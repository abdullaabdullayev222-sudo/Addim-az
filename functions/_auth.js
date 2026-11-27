// Addım — hesablar: Google ID token-in yoxlanması, sessiyalar
import { GOOGLE_CLIENT_ID } from './_google_id.js';

export const AUTH_SCHEMA = [
  'CREATE TABLE IF NOT EXISTS accounts (sub TEXT PRIMARY KEY, email TEXT, name TEXT, uid TEXT NOT NULL, state TEXT, updated INTEGER, created INTEGER)',
  'CREATE TABLE IF NOT EXISTS sessions (token TEXT PRIMARY KEY, sub TEXT NOT NULL, created INTEGER)'];
export async function authSchema(DB) { for (const s of AUTH_SCHEMA) await DB.prepare(s).run(); }
export const clientId = env => String(env.GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID || '').trim();

let KEYS = null, KEYS_AT = 0;
async function googleKeys(env) {
  if (env.TEST_JWKS) return env.TEST_JWKS;
  if (KEYS && Date.now() - KEYS_AT < 3600e3) return KEYS;
  const r = await fetch('https://www.googleapis.com/oauth2/v3/certs');
  if (!r.ok) throw new Error('jwks');
  KEYS = (await r.json()).keys; KEYS_AT = Date.now(); return KEYS;
}
const b64u = s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)), c => c.charCodeAt(0));
const dec = u => JSON.parse(new TextDecoder().decode(u));

// Google-un imzası, auditoriya (bizim Client ID), göndərən və müddət yoxlanılır
export async function verifyGoogle(env, token) {
  const id = clientId(env);
  if (!id) throw new Error('no_client_id');
  const parts = String(token || '').split('.');
  if (parts.length !== 3) throw new Error('format');
  const head = dec(b64u(parts[0])), pay = dec(b64u(parts[1]));
  if (head.alg !== 'RS256') throw new Error('alg');
  const jwk = (await googleKeys(env)).find(k => k.kid === head.kid);
  if (!jwk) throw new Error('kid');
  const key = await crypto.subtle.importKey('jwk', { kty: jwk.kty, n: jwk.n, e: jwk.e, alg: 'RS256', ext: true }, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
  const ok = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, b64u(parts[2]), new TextEncoder().encode(parts[0] + '.' + parts[1]));
  if (!ok) throw new Error('sig');
  if (!['accounts.google.com', 'https://accounts.google.com'].includes(pay.iss)) throw new Error('iss');
  if (pay.aud !== id) throw new Error('aud');
  if (!pay.exp || pay.exp * 1000 < Date.now() - 60e3) throw new Error('exp');
  if (!pay.sub) throw new Error('sub');
  return pay;
}

export const newToken = () => [...crypto.getRandomValues(new Uint8Array(24))].map(b => b.toString(16).padStart(2, '0')).join('');
export async function sessionAccount(DB, token) {
  if (typeof token !== 'string' || !/^[a-f0-9]{48}$/.test(token)) return null;
  const s = await DB.prepare('SELECT sub FROM sessions WHERE token = ?1').bind(token).first();
  if (!s) return null;
  return await DB.prepare('SELECT sub, email, name, uid, state, updated FROM accounts WHERE sub = ?1').bind(s.sub).first();
}
