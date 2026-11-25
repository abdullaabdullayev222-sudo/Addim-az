// Addım — admin: aktivasiya kodları yaratmaq və siyahını görmək
// POST /api/admin {key, action:'create', days, count, note} -> { codes:[...] }
// POST /api/admin {key, action:'list'}                       -> { codes:[{code,days,note,created,redeemed_by,redeemed_at}], premiumUsers }
// Açar Cloudflare-də ADMIN_KEY dəyişəni kimi saxlanılır (kodda yoxdur).
import { json, ensureSchema, newCode, bakuDay } from '../_shared.js';

function safeEqual(a, b) {
  a = String(a || ''); b = String(b || '');
  if (a.length !== b.length) return false;
  let r = 0; for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

export async function onRequest({ request, env }) {
  if (request.method !== 'POST') return json({ error: 'method' }, 405);
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);
  if (!env.ADMIN_KEY || String(env.ADMIN_KEY).length < 12) return json({ error: 'admin_key_not_set' }, 503);
  let b; try { b = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  if (!safeEqual(b.key, env.ADMIN_KEY)) return json({ error: 'forbidden' }, 403);
  await ensureSchema(env.DB);

  if (b.action === 'create') {
    const days = Math.max(1, Math.min(366, Math.floor(Number(b.days) || 30)));
    const count = Math.max(1, Math.min(50, Math.floor(Number(b.count) || 1)));
    const note = String(b.note || '').replace(/[\u0000-\u001f<>]/g, '').slice(0, 80);
    const codes = [];
    for (let i = 0; i < count; i++) {
      const c = newCode();
      await env.DB.prepare('INSERT INTO codes (code, days, note, created) VALUES (?1, ?2, ?3, ?4)').bind(c, days, note, Date.now()).run();
      codes.push(c);
    }
    return json({ codes, days });
  }
  if (b.action === 'list') {
    const codes = (await env.DB.prepare('SELECT code, days, note, created, redeemed_by, redeemed_at FROM codes ORDER BY created DESC LIMIT 200').all()).results;
    const premiumUsers = (await env.DB.prepare('SELECT COUNT(*) AS n FROM premium WHERE until > ?1').bind(Date.now()).first()).n;
    return json({ codes, premiumUsers });
  }
  if (b.action === 'stats') {
    const db = env.DB, now = Date.now(), today = bakuDay();
    const dayAgo = n => bakuDay(now - n * 864e5);
    const one = async (sql, ...a) => (await db.prepare(sql).bind(...a).first()) || {};
    const all = async (sql, ...a) => (await db.prepare(sql).bind(...a).all()).results;

    const totalUsers = (await one('SELECT COUNT(*) AS n FROM users')).n || 0;
    const dau = (await one('SELECT COUNT(*) AS n FROM daily WHERE day = ?1', today)).n || 0;
    const wau = (await one('SELECT COUNT(DISTINCT uid) AS n FROM daily WHERE day > ?1', dayAgo(7))).n || 0;
    const mau = (await one('SELECT COUNT(DISTINCT uid) AS n FROM daily WHERE day > ?1', dayAgo(30))).n || 0;
    const installed = (await one('SELECT COUNT(*) AS n FROM users WHERE standalone = 1')).n || 0;

    // Son 14 gün: aktiv və yeni istifadəçilər
    const since = dayAgo(13);
    const act = Object.fromEntries((await all('SELECT day, COUNT(*) AS n FROM daily WHERE day >= ?1 GROUP BY day', since)).map(r => [r.day, r.n]));
    const neu = Object.fromEntries((await all('SELECT first_day AS day, COUNT(*) AS n FROM users WHERE first_day >= ?1 GROUP BY first_day', since)).map(r => [r.day, r.n]));
    const days = []; for (let i = 13; i >= 0; i--) { const d = dayAgo(i); days.push({ day: d, active: act[d] || 0, fresh: neu[d] || 0 }); }

    // Geri qayıtma: son 30 gündə gəlib, ən azı 1 gün əvvəl qeydə alınanlardan neçəsi növbəti gün yenə gəlib
    const ret = await one(`SELECT COUNT(*) AS cohort,
        SUM(CASE WHEN EXISTS (SELECT 1 FROM daily d WHERE d.uid = u.uid AND d.day = date(u.first_day, '+1 day')) THEN 1 ELSE 0 END) AS d1,
        SUM(CASE WHEN EXISTS (SELECT 1 FROM daily d WHERE d.uid = u.uid AND d.day >= date(u.first_day, '+7 day')) THEN 1 ELSE 0 END) AS d7
      FROM users u WHERE u.first_day >= ?1 AND u.first_day < ?2`, dayAgo(30), today);
    const cohort7 = (await one('SELECT COUNT(*) AS n FROM users WHERE first_day >= ?1 AND first_day <= ?2', dayAgo(30), dayAgo(7))).n || 0;

    const lessons7 = (await one("SELECT COUNT(*) AS n FROM events WHERE ev = 'lesson' AND day > ?1", dayAgo(7))).n || 0;
    const lessonsAll = (await one("SELECT COUNT(*) AS n FROM events WHERE ev = 'lesson'")).n || 0;
    const quiz7 = (await one("SELECT COUNT(*) AS n FROM events WHERE ev = 'quiz' AND day > ?1", dayAgo(7))).n || 0;
    const funnel = await all("SELECT data AS id, COUNT(DISTINCT uid) AS n FROM events WHERE ev = 'lesson' AND data IS NOT NULL GROUP BY data ORDER BY data");
    const levels = await all('SELECT COALESCE(lvl, \'—\') AS lvl, COUNT(*) AS n FROM users GROUP BY lvl ORDER BY lvl');
    const placement = await all("SELECT data AS lvl, COUNT(*) AS n FROM events WHERE ev = 'placement' GROUP BY data ORDER BY data");
    const limitHits7 = (await one("SELECT COUNT(DISTINCT uid) AS n FROM events WHERE ev = 'limit_hit' AND day > ?1", dayAgo(7))).n || 0;
    const premViews7 = (await one("SELECT COUNT(DISTINCT uid) AS n FROM events WHERE ev = 'premium_view' AND day > ?1", dayAgo(7))).n || 0;
    const premActive = (await one('SELECT COUNT(*) AS n FROM premium WHERE until > ?1', now)).n || 0;
    const codesUsed = (await one('SELECT COUNT(*) AS n FROM codes WHERE redeemed_by IS NOT NULL')).n || 0;
    let league = [];
    try { league = await all("SELECT league, COUNT(*) AS n, MAX(xp) AS top FROM scores_v2 WHERE week = (SELECT MAX(week) FROM scores_v2) GROUP BY league ORDER BY league"); } catch {}

    return json({ today, totalUsers, dau, wau, mau, installed, days,
      retention: { cohort: ret.cohort || 0, d1: ret.d1 || 0, cohort7, d7: ret.d7 || 0 },
      lessons7, lessonsAll, quiz7, funnel, levels, placement, limitHits7, premViews7, premActive, codesUsed, league });
  }
  return json({ error: 'unknown_action' }, 400);
}
