// Addım — anonim istifadə statistikası
// POST /api/track {uid, ev, data?, lvl?, standalone?}
// Ad, e-poçt və ya şəxsi məlumat saxlanılmır — yalnız təsadüfi cihaz id-si və hadisə növü.
import { json, validId, ensureSchema, bakuDay } from '../_shared.js';

const EVENTS = ['open', 'lesson', 'placement', 'quiz', 'premium_view', 'install', 'limit_hit', 'install_help', 'practice', 'review', 'share', 'ad', 'why'];
const LEVELS = ['a1', 'a2', 'b1', 'b2', 'c1'];

export async function onRequest({ request, env }) {
  if (request.method !== 'POST') return json({ error: 'method' }, 405);
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);
  let b; try { b = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  if (!validId(b.uid) || !EVENTS.includes(b.ev)) return json({ error: 'invalid' }, 400);
  const data = typeof b.data === 'string' && /^[a-z0-9-]{1,24}$/.test(b.data) ? b.data : null;
  const lvl = LEVELS.includes(b.lvl) ? b.lvl : null;
  await ensureSchema(env.DB);
  const day = bakuDay(), now = Date.now();

  await env.DB.prepare(`INSERT INTO users (uid, first_day, last_day, lvl, standalone) VALUES (?1, ?2, ?2, ?3, ?4)
    ON CONFLICT(uid) DO UPDATE SET last_day = excluded.last_day, lvl = COALESCE(excluded.lvl, users.lvl),
    standalone = MAX(users.standalone, excluded.standalone)`).bind(b.uid, day, lvl, b.standalone ? 1 : 0).run();
  await env.DB.prepare('INSERT OR IGNORE INTO daily (day, uid) VALUES (?1, ?2)').bind(day, b.uid).run();

  if (b.ev !== 'open') {
    // Eyni gündə eyni hadisəni 200-dən çox yazmağın qarşısını al (spam qorunması)
    const n = (await env.DB.prepare('SELECT COUNT(*) AS n FROM events WHERE day = ?1 AND uid = ?2').bind(day, b.uid).first()).n;
    if (n < 200) await env.DB.prepare('INSERT INTO events (day, uid, ev, data, ts) VALUES (?1, ?2, ?3, ?4, ?5)').bind(day, b.uid, b.ev, data, now).run();
  }
  return json({ ok: true });
}
