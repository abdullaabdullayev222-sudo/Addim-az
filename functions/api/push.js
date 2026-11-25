// Addım — bildiriş abunəliyi
// GET  /api/push            -> { key }  (VAPID açıq açarı)
// POST /api/push {action:'subscribe', uid, sub:{endpoint,keys:{p256dh,auth}}, hour, streak}
// POST /api/push {action:'unsubscribe', uid}
// POST /api/push {action:'done', uid, streak}   — bu gün dərs keçildi (xatırlatma göndərilməsin)
import { json, validId, bakuDay } from '../_shared.js';
import { vapidKeys, PUSH_SCHEMA } from '../_push.js';
const okEndpoint = e => typeof e === 'string' && e.length < 1000 && /^https:\/\/[a-z0-9.-]+(:\d+)?\//i.test(e);
const okKey = (k, min, max) => typeof k === 'string' && /^[A-Za-z0-9_-]+$/.test(k) && k.length >= min && k.length <= max;

export async function onRequest({ request, env }) {
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);
  if (request.method === 'GET') return json({ key: (await vapidKeys(env.DB)).pub });
  if (request.method !== 'POST') return json({ error: 'method' }, 405);
  let b; try { b = await request.json(); } catch (e) { return json({ error: 'bad_json' }, 400); }
  if (!validId(b.uid)) return json({ error: 'bad_uid' }, 400);
  await env.DB.prepare(PUSH_SCHEMA).run();
  const streak = Math.max(0, Math.min(5000, Math.floor(Number(b.streak) || 0)));
  if (b.action === 'subscribe') {
    const s = b.sub || {}, k = s.keys || {};
    if (!okEndpoint(s.endpoint) || !okKey(k.p256dh, 80, 100) || !okKey(k.auth, 16, 30)) return json({ error: 'bad_sub' }, 400);
    const hour = Math.max(8, Math.min(22, Math.floor(Number(b.hour) || 20)));
    await env.DB.prepare(`INSERT INTO push_subs (uid, endpoint, p256dh, auth, hour, streak, done_day, created) VALUES (?1,?2,?3,?4,?5,?6,?7,?8)
      ON CONFLICT(uid) DO UPDATE SET endpoint=?2, p256dh=?3, auth=?4, hour=?5, streak=?6, done_day=COALESCE(?7, done_day)`)
      .bind(b.uid, s.endpoint, k.p256dh, k.auth, hour, streak, b.doneToday ? bakuDay() : null, Date.now()).run();
    return json({ ok: true, hour });
  }
  if (b.action === 'unsubscribe') { await env.DB.prepare('DELETE FROM push_subs WHERE uid = ?1').bind(b.uid).run(); return json({ ok: true }); }
  if (b.action === 'done') { await env.DB.prepare('UPDATE push_subs SET done_day = ?2, streak = ?3 WHERE uid = ?1').bind(b.uid, bakuDay(), streak).run(); return json({ ok: true }); }
  return json({ error: 'bad_action' }, 400);
}
