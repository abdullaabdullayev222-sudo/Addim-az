// Addım — təklif və şikayətlər
// POST /api/feedback {uid, kind:'item'|'speech'|'general', ref?, q?, mine?, right?, text, lvl?}
// Admin bunları /admin.html-də «Təklif və şikayətlər» bölməsində görür.
import { json, validId, bakuDay } from '../_shared.js';

export const FB_SCHEMA = `CREATE TABLE IF NOT EXISTS feedback (id INTEGER PRIMARY KEY AUTOINCREMENT, created INTEGER, day TEXT, uid TEXT,
  kind TEXT, ref TEXT, q TEXT, mine TEXT, right TEXT, text TEXT, lvl TEXT, ua TEXT, done INTEGER DEFAULT 0)`;
const KINDS = ['item', 'speech', 'general'];
const clean = (v, n) => String(v == null ? '' : v).replace(/[\u0000-\u0008\u000b-\u001f]/g, '').trim().slice(0, n);

export async function onRequest({ request, env }) {
  if (request.method !== 'POST') return json({ error: 'method' }, 405);
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);
  let b; try { b = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  if (!validId(b.uid) || !KINDS.includes(b.kind)) return json({ error: 'invalid' }, 400);
  const text = clean(b.text, 1000);
  if (text.length < 3) return json({ error: 'empty' }, 400);
  await env.DB.prepare(FB_SCHEMA).run();
  const day = bakuDay();
  const n = (await env.DB.prepare('SELECT COUNT(*) AS n FROM feedback WHERE day = ?1 AND uid = ?2').bind(day, b.uid).first()).n;
  if (n >= 20) return json({ error: 'limit' }, 429);
  await env.DB.prepare('INSERT INTO feedback (created, day, uid, kind, ref, q, mine, right, text, lvl, ua) VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10,?11)')
    .bind(Date.now(), day, b.uid, b.kind, clean(b.ref, 80), clean(b.q, 300), clean(b.mine, 300), clean(b.right, 300), text,
      clean(b.lvl, 4), clean(request.headers.get('user-agent'), 160)).run();
  return json({ ok: true });
}
