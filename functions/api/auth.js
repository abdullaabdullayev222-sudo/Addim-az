// Addım — Google ilə giriş
// POST /api/auth {credential, uid}  -> { token, uid, email, name, state, isNew }
// Yeni hesab cihazın indiki uid-sini götürür (Premium, liqa, səslər itmir).
// Mövcud hesaba başqa cihazdan girəndə cihaz hesabın uid-sinə keçir; cihazdakı Premium hesaba köçürülür.
import { json, validId, ensureSchema } from '../_shared.js';
import { authSchema, verifyGoogle, newToken, clientId } from '../_auth.js';

export async function onRequest({ request, env }) {
  if (request.method === 'GET') return json({ clientId: clientId(env) });
  if (request.method !== 'POST') return json({ error: 'method' }, 405);
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);
  let b; try { b = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  let g; try { g = await verifyGoogle(env, b.credential); } catch (e) { return json({ error: 'bad_token', why: String(e.message || e) }, 401); }
  await ensureSchema(env.DB); await authSchema(env.DB);
  const now = Date.now(), dev = validId(b.uid) ? b.uid : null;
  const email = String(g.email || '').slice(0, 120), name = String(g.name || g.given_name || '').slice(0, 60);
  let acc = await env.DB.prepare('SELECT sub, uid, state, updated FROM accounts WHERE sub = ?1').bind(g.sub).first(), isNew = false;
  if (!acc) {
    const uid = dev || crypto.randomUUID();
    await env.DB.prepare('INSERT INTO accounts (sub, email, name, uid, state, updated, created) VALUES (?1, ?2, ?3, ?4, NULL, 0, ?5)').bind(g.sub, email, name, uid, now).run();
    acc = { sub: g.sub, uid, state: null, updated: 0 }; isNew = true;
  } else {
    await env.DB.prepare('UPDATE accounts SET email = ?1, name = ?2 WHERE sub = ?3').bind(email, name, g.sub).run();
    if (dev && dev !== acc.uid) { // cihazda alınmış Premium hesaba köçsün
      const p = await env.DB.prepare('SELECT until FROM premium WHERE id = ?1').bind(dev).first();
      if (p && p.until > now) await env.DB.prepare('INSERT INTO premium (id, until) VALUES (?1, ?2) ON CONFLICT(id) DO UPDATE SET until = MAX(premium.until, excluded.until)').bind(acc.uid, p.until).run();
    }
  }
  const token = newToken();
  await env.DB.prepare('INSERT INTO sessions (token, sub, created) VALUES (?1, ?2, ?3)').bind(token, g.sub, now).run();
  let state = null; try { state = acc.state ? JSON.parse(acc.state) : null; } catch {}
  return json({ token, uid: acc.uid, email, name, state, updated: acc.updated || 0, isNew });
}
