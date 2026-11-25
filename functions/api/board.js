// Addım — həftəlik liqa API (Cloudflare Pages Function + D1)
// GET  /api/board?id=...          -> cədvəl
// POST /api/board {id,name,color,xp} -> balı yenilə və cədvəli qaytar
// D1 binding adı: DB

const SCHEMA = `CREATE TABLE IF NOT EXISTS scores (
  id TEXT NOT NULL, week TEXT NOT NULL, name TEXT NOT NULL,
  color INTEGER NOT NULL DEFAULT 0, xp INTEGER NOT NULL DEFAULT 0,
  updated INTEGER NOT NULL, PRIMARY KEY (id, week))`;
const MAX_WEEK_XP = 3000; // real istifadə üçün kifayət, saxta böyük rəqəmlərin qarşısını alır

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

// Həftə bazar ertəsi Bakı vaxtı ilə (UTC+4) başlayır
function weekKey() {
  const d = new Date(Date.now() + 4 * 3600e3);
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7));
  return d.toISOString().slice(0, 10);
}

const cleanName = s => String(s || '').replace(/[\u0000-\u001f\u007f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 20);
const validId = s => typeof s === 'string' && /^[A-Za-z0-9-]{8,48}$/.test(s);

export async function onRequest({ request, env }) {
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);
  if (!['GET', 'POST'].includes(request.method)) return json({ error: 'method' }, 405);
  await env.DB.prepare(SCHEMA).run();
  const week = weekKey();
  let id = new URL(request.url).searchParams.get('id') || '';

  if (request.method === 'POST') {
    let b;
    try { b = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
    const name = cleanName(b.name);
    const xp = Math.max(0, Math.min(MAX_WEEK_XP, Math.floor(Number(b.xp) || 0)));
    const color = Math.max(0, Math.min(9, Math.floor(Number(b.color) || 0)));
    if (!validId(b.id) || name.length < 2) return json({ error: 'invalid' }, 400);
    id = b.id;
    await env.DB.prepare(
      `INSERT INTO scores (id, week, name, color, xp, updated) VALUES (?1, ?2, ?3, ?4, ?5, ?6)
       ON CONFLICT(id, week) DO UPDATE SET name = excluded.name, color = excluded.color,
       xp = MAX(scores.xp, excluded.xp), updated = CASE WHEN excluded.xp > scores.xp THEN excluded.updated ELSE scores.updated END`
    ).bind(id, week, name, color, xp, Date.now()).run();
  }

  const top = (await env.DB.prepare(
    'SELECT id, name, color, xp FROM scores WHERE week = ?1 AND xp > 0 ORDER BY xp DESC, updated ASC LIMIT 30'
  ).bind(week).all()).results.map(r => ({ name: r.name, color: r.color, xp: r.xp, me: validId(id) && r.id === id }));

  const total = (await env.DB.prepare('SELECT COUNT(*) AS n FROM scores WHERE week = ?1').bind(week).first()).n;

  let me = null, above = null;
  if (validId(id)) {
    const row = await env.DB.prepare('SELECT xp, updated FROM scores WHERE id = ?1 AND week = ?2').bind(id, week).first();
    if (row) {
      const better = (await env.DB.prepare(
        'SELECT COUNT(*) AS n FROM scores WHERE week = ?1 AND (xp > ?2 OR (xp = ?2 AND updated < ?3 AND ?2 > 0))'
      ).bind(week, row.xp, row.updated).first()).n;
      me = { rank: better + 1, xp: row.xp };
      const a = await env.DB.prepare('SELECT xp FROM scores WHERE week = ?1 AND xp > ?2 ORDER BY xp ASC LIMIT 1').bind(week, row.xp).first();
      if (a) above = { xp: a.xp };
    }
  }
  return json({ week, total, top, me, above });
}
