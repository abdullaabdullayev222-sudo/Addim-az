// Addım — təbii səsləndirmə (Cloudflare Workers AI, Deepgram Aura-2)
// GET /api/tts?v=asteria|orion&t=<cümlə>  -> audio/mpeg
// Hər cümlə bir dəfə yaradılır və D1-də saxlanılır; sonrakı istəklər pulsuzdur.
// Yalnız kursdakı cümlələr (functions/_tts_keys.js) səsləndirilir.
import { json } from '../_shared.js';
import { KEYS } from '../_tts_keys.js';
import { padStart } from '../_mp3.js';
import { AURA2, ttsKey, sha16, toBytes } from '../_tts.js';

const VOICES = ['asteria', 'orion'];
const AUDIO_HEADERS = { 'content-type': 'audio/mpeg', 'cache-control': 'public, max-age=31536000, immutable' };

export async function onRequest({ request, env }) {
  if (request.method !== 'GET') return json({ error: 'method' }, 405);
  const u = new URL(request.url);
  const text = (u.searchParams.get('t') || '').slice(0, 300);
  const voice = VOICES.includes(u.searchParams.get('v')) ? u.searchParams.get('v') : VOICES[0];
  if (!text) return json({ error: 'empty' }, 400);
  const h = await sha16(text);
  if (!KEYS.has(h)) return json({ error: 'not_allowed' }, 403);
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);

  await env.DB.prepare('CREATE TABLE IF NOT EXISTS tts (k TEXT PRIMARY KEY, audio BLOB NOT NULL, created INTEGER NOT NULL)').run();
  const k = ttsKey(h, voice);
  const row = await env.DB.prepare('SELECT audio FROM tts WHERE k = ?1').bind(k).first();
  if (row && row.audio) return new Response(toBytes(row.audio), { headers: { ...AUDIO_HEADERS, 'x-tts': 'cache' } });

  if (!env.AI) return json({ error: 'ai_not_bound' }, 503);
  try {
    const out = await env.AI.run('@cf/deepgram/aura-2-en', { text, speaker: AURA2[voice], encoding: 'mp3' }, { returnRawResponse: true });
    const res = out instanceof Response ? out : new Response(out);
    if (!res.ok) throw new Error('ai_status_' + res.status);
    const raw = new Uint8Array(await res.arrayBuffer());
    if (raw.byteLength < 500) throw new Error('ai_short');
    const buf = padStart(raw, 0.25);
    await env.DB.prepare('INSERT OR REPLACE INTO tts (k, audio, created) VALUES (?1, ?2, ?3)').bind(k, buf, Date.now()).run();
    return new Response(buf, { headers: { ...AUDIO_HEADERS, 'x-tts': 'new' } });
  } catch (e) {
    // Gündəlik pulsuz limit bitəndə və ya model əlçatmaz olanda tətbiq cihazın öz səsinə keçir
    return json({ error: 'tts_unavailable', detail: String(e && e.message || e).slice(0, 120) }, 503);
  }
}
