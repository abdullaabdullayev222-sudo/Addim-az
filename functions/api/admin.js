// Addım — admin: aktivasiya kodları yaratmaq və siyahını görmək
// POST /api/admin {key, action:'create', days, count, note} -> { codes:[...] }
// POST /api/admin {key, action:'list'}                       -> { codes:[{code,days,note,created,redeemed_by,redeemed_at}], premiumUsers }
// Açar Cloudflare-də ADMIN_KEY dəyişəni kimi saxlanılır (kodda yoxdur).
import { json, ensureSchema, newCode } from '../_shared.js';

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
  return json({ error: 'unknown_action' }, 400);
}
