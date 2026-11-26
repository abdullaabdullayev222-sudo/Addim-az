// Addım — həftəlik liqa API (Cloudflare Pages Function + D1)
// Hər səviyyənin (A1, A2, B1, B2) öz liqası var.
// GET  /api/board?id=...&league=a1          -> cədvəl
// POST /api/board {id,name,color,xp,league} -> balı yenilə və cədvəli qaytar
// D1 binding adı: DB

const SCHEMA = `CREATE TABLE IF NOT EXISTS scores_v2 (
  id TEXT NOT NULL, week TEXT NOT NULL, league TEXT NOT NULL DEFAULT 'a1', name TEXT NOT NULL,
  color INTEGER NOT NULL DEFAULT 0, xp INTEGER NOT NULL DEFAULT 0,
  updated INTEGER NOT NULL, PRIMARY KEY (id, week))`;
const LEAGUES = ['a1', 'a2', 'b1', 'b2', 'c1'];
const MAX_WEEK_XP = 3000; // real istifadə üçün kifayət, saxta böyük rəqəmlərin qarşısını alır

import { json, ensureSchema, premiumUntil, cleanCosmetics } from '../_shared.js';

// Həftə bazar ertəsi Bakı vaxtı ilə (UTC+4) başlayır
function weekKey(ms = Date.now()) {
  const d = new Date(ms + 4 * 3600e3);
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7));
  return d.toISOString().slice(0, 10);
}

// Medallar: keçən həftənin hər liqasında ilk 3 yer bir dəfə qeyd olunur
const MEDAL_SCHEMA = ['CREATE TABLE IF NOT EXISTS medals (id TEXT NOT NULL, week TEXT NOT NULL, league TEXT NOT NULL, place INTEGER NOT NULL, xp INTEGER NOT NULL, PRIMARY KEY (id, week))',
  'CREATE TABLE IF NOT EXISTS medal_weeks (week TEXT PRIMARY KEY, done INTEGER NOT NULL)'];
async function finalizeWeek(DB, prev) {
  for (const s of MEDAL_SCHEMA) await DB.prepare(s).run();
  if (await DB.prepare('SELECT 1 FROM medal_weeks WHERE week = ?1').bind(prev).first()) return;
  for (const lg of LEAGUES) {
    const { results } = await DB.prepare('SELECT id, xp FROM scores_v2 WHERE week = ?1 AND league = ?2 AND xp > 0 ORDER BY xp DESC, updated ASC LIMIT 3').bind(prev, lg).all();
    for (let i = 0; i < results.length; i++)
      await DB.prepare('INSERT OR IGNORE INTO medals (id, week, league, place, xp) VALUES (?1, ?2, ?3, ?4, ?5)').bind(results[i].id, prev, lg, i + 1, results[i].xp).run();
  }
  await DB.prepare('INSERT OR IGNORE INTO medal_weeks (week, done) VALUES (?1, ?2)').bind(prev, Date.now()).run();
}

const cleanName = s => String(s || '').replace(/[\u0000-\u001f\u007f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 20);
const validId = s => typeof s === 'string' && /^[A-Za-z0-9-]{8,48}$/.test(s);

export async function onRequest({ request, env }) {
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);
  if (!['GET', 'POST'].includes(request.method)) return json({ error: 'method' }, 405);
  await env.DB.prepare(SCHEMA).run();
  await ensureSchema(env.DB);
  const now = Date.now();
  const week = weekKey(), prevWeek = weekKey(Date.now() - 7 * 864e5);
  await finalizeWeek(env.DB, prevWeek);
  const q = new URL(request.url).searchParams;
  let id = q.get('id') || '';
  let league = LEAGUES.includes(q.get('league')) ? q.get('league') : 'a1';

  if (request.method === 'POST') {
    let b;
    try { b = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
    const name = cleanName(b.name);
    const xp = Math.max(0, Math.min(MAX_WEEK_XP, Math.floor(Number(b.xp) || 0)));
    const color = Math.max(0, Math.min(9, Math.floor(Number(b.color) || 0)));
    if (!validId(b.id) || name.length < 2) return json({ error: 'invalid' }, 400);
    id = b.id;
    if (LEAGUES.includes(b.league)) league = b.league;
    await env.DB.prepare(
      `INSERT INTO scores_v2 (id, week, league, name, color, xp, updated) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)
       ON CONFLICT(id, week) DO UPDATE SET league = excluded.league, name = excluded.name, color = excluded.color,
       xp = MAX(scores_v2.xp, excluded.xp), updated = CASE WHEN excluded.xp > scores_v2.xp THEN excluded.updated ELSE scores_v2.updated END`
    ).bind(id, week, league, name, color, xp, Date.now()).run();
    // Kosmetika: Premium olmayanların yalnız pulsuz seçimləri saxlanılır
    const prem = (await premiumUntil(env.DB, id)) > now;
    const c = cleanCosmetics(b.look, prem);
    await env.DB.prepare(`INSERT INTO profiles (id, avatar, ncolor, nstyle, frame) VALUES (?1, ?2, ?3, ?4, ?5)
      ON CONFLICT(id) DO UPDATE SET avatar = excluded.avatar, ncolor = excluded.ncolor, nstyle = excluded.nstyle, frame = excluded.frame`)
      .bind(id, c.avatar, c.ncolor, c.nstyle, c.frame).run();
  }

  const top = (await env.DB.prepare(
    `SELECT s.id, s.name, s.color, s.xp, p.avatar, p.ncolor, p.nstyle, p.frame, COALESCE(pr.until, 0) AS until,
       (SELECT COUNT(*) FROM medals m WHERE m.id = s.id AND m.place = 1) AS g, (SELECT COUNT(*) FROM medals m WHERE m.id = s.id AND m.place = 2) AS sv, (SELECT COUNT(*) FROM medals m WHERE m.id = s.id AND m.place = 3) AS b
     FROM scores_v2 s LEFT JOIN profiles p ON p.id = s.id LEFT JOIN premium pr ON pr.id = s.id
     WHERE s.week = ?1 AND s.league = ?2 AND s.xp > 0 ORDER BY s.xp DESC, s.updated ASC LIMIT 30`
  ).bind(week, league).all()).results.map(r => {
    const prem = r.until > now;
    return { name: r.name, color: r.color, xp: r.xp, me: validId(id) && r.id === id, prem, medals: [r.g || 0, r.sv || 0, r.b || 0],
      look: cleanCosmetics({ avatar: r.avatar, ncolor: r.ncolor, nstyle: r.nstyle, frame: r.frame }, prem) };
  });

  const total = (await env.DB.prepare('SELECT COUNT(*) AS n FROM scores_v2 WHERE week = ?1 AND league = ?2').bind(week, league).first()).n;

  let me = null, above = null;
  if (validId(id)) {
    const row = await env.DB.prepare('SELECT xp, updated FROM scores_v2 WHERE id = ?1 AND week = ?2 AND league = ?3').bind(id, week, league).first();
    if (row) {
      const better = (await env.DB.prepare(
        'SELECT COUNT(*) AS n FROM scores_v2 WHERE week = ?1 AND league = ?4 AND (xp > ?2 OR (xp = ?2 AND updated < ?3 AND ?2 > 0))'
      ).bind(week, row.xp, row.updated, league).first()).n;
      me = { rank: better + 1, xp: row.xp };
      const a = await env.DB.prepare('SELECT xp FROM scores_v2 WHERE week = ?1 AND league = ?3 AND xp > ?2 ORDER BY xp ASC LIMIT 1').bind(week, row.xp, league).first();
      if (a) above = { xp: a.xp };
    }
  }
  // Keçən həftə medal qazanmısansa — mərasim üçün
  let medal = null, medals = [0, 0, 0];
  if (validId(id)) {
    const m = await env.DB.prepare('SELECT league, place, xp FROM medals WHERE id = ?1 AND week = ?2').bind(id, prevWeek).first();
    if (m) medal = { week: prevWeek, league: m.league, place: m.place, xp: m.xp };
    const { results } = await env.DB.prepare('SELECT place, COUNT(*) AS n FROM medals WHERE id = ?1 GROUP BY place').bind(id).all();
    for (const r of results) medals[r.place - 1] = r.n;
  }
  return json({ week, league, total, top, me, above, medal, medals });
}
