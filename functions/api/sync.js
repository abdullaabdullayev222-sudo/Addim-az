// Addım — irəliləyişin hesabda saxlanması
// GET  /api/sync?token=...               -> { state, updated, uid, email }
// POST /api/sync {token, state}           -> { ok, updated }
// POST /api/sync {token, logout: 1}       -> sessiyanı bağla
import { json } from '../_shared.js';
import { authSchema, sessionAccount } from '../_auth.js';

const MAX = 400 * 1024;
export async function onRequest({ request, env }) {
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);
  await authSchema(env.DB);
  if (request.method === 'GET') {
    const acc = await sessionAccount(env.DB, new URL(request.url).searchParams.get('token'));
    if (!acc) return json({ error: 'auth' }, 401);
    let state = null; try { state = acc.state ? JSON.parse(acc.state) : null; } catch {}
    return json({ state, updated: acc.updated || 0, uid: acc.uid, email: acc.email, name: acc.name });
  }
  if (request.method !== 'POST') return json({ error: 'method' }, 405);
  let b; try { b = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  if (b.logout) { if (typeof b.token === 'string') await env.DB.prepare('DELETE FROM sessions WHERE token = ?1').bind(b.token).run(); return json({ ok: true }); }
  const acc = await sessionAccount(env.DB, b.token);
  if (!acc) return json({ error: 'auth' }, 401);
  const s = JSON.stringify(b.state || null);
  if (!b.state || typeof b.state !== 'object' || s.length > MAX) return json({ error: 'bad_state' }, 400);
  const now = Date.now();
  await env.DB.prepare('UPDATE accounts SET state = ?1, updated = ?2 WHERE sub = ?3').bind(s, now, acc.sub).run();
  return json({ ok: true, updated: now });
}
