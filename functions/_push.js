// Addım — Web Push (RFC 8291 şifrələmə + RFC 8292 VAPID), yalnız WebCrypto ilə.
// VAPID açarları ilk istifadədə serverdə yaradılır və D1-də saxlanılır (heç kim əl ilə daxil etmir).
const enc = new TextEncoder();
export const b64u = u8 => btoa(String.fromCharCode(...u8)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
export const unb64u = s => { s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; return Uint8Array.from(atob(s), c => c.charCodeAt(0)); };
const concat = (...a) => { const o = new Uint8Array(a.reduce((n, x) => n + x.length, 0)); let i = 0; for (const x of a) { o.set(x, i); i += x.length; } return o; };

export async function vapidKeys(DB) {
  await DB.prepare('CREATE TABLE IF NOT EXISTS vapid (id INTEGER PRIMARY KEY, pub TEXT NOT NULL, priv TEXT NOT NULL)').run();
  let row = await DB.prepare('SELECT pub, priv FROM vapid WHERE id = 1').first();
  if (!row) {
    const kp = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
    const pub = b64u(new Uint8Array(await crypto.subtle.exportKey('raw', kp.publicKey)));
    const priv = JSON.stringify(await crypto.subtle.exportKey('jwk', kp.privateKey));
    await DB.prepare('INSERT OR IGNORE INTO vapid (id, pub, priv) VALUES (1, ?1, ?2)').bind(pub, priv).run();
    row = await DB.prepare('SELECT pub, priv FROM vapid WHERE id = 1').first();
  }
  return row;
}

async function vapidAuth(endpoint, keys, subject) {
  const aud = new URL(endpoint).origin;
  const head = b64u(enc.encode(JSON.stringify({ typ: 'JWT', alg: 'ES256' })));
  const body = b64u(enc.encode(JSON.stringify({ aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: subject })));
  const key = await crypto.subtle.importKey('jwk', JSON.parse(keys.priv), { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const sig = new Uint8Array(await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, enc.encode(head + '.' + body)));
  return `vapid t=${head}.${body}.${b64u(sig)}, k=${keys.pub}`;
}

async function hkdf(salt, ikm, info, len) {
  const k = await crypto.subtle.importKey('raw', ikm, 'HKDF', false, ['deriveBits']);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: 'HKDF', hash: 'SHA-256', salt, info }, k, len * 8));
}

// Mətni abunəçinin açarları ilə şifrələ (aes128gcm)
export async function encrypt(payload, p256dh, auth) {
  const uaPub = unb64u(p256dh), authS = unb64u(auth);
  const as = await crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
  const asPub = new Uint8Array(await crypto.subtle.exportKey('raw', as.publicKey));
  const uaKey = await crypto.subtle.importKey('raw', uaPub, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const shared = new Uint8Array(await crypto.subtle.deriveBits({ name: 'ECDH', public: uaKey }, as.privateKey, 256));
  const ikm = await hkdf(authS, shared, concat(enc.encode('WebPush: info\0'), uaPub, asPub), 32);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const cek = await hkdf(salt, ikm, enc.encode('Content-Encoding: aes128gcm\0'), 16);
  const nonce = await hkdf(salt, ikm, enc.encode('Content-Encoding: nonce\0'), 12);
  const k = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce }, k, concat(enc.encode(payload), new Uint8Array([2]))));
  const rs = new Uint8Array([0, 0, 16, 0]); // 4096
  return concat(salt, rs, new Uint8Array([asPub.length]), asPub, ct);
}

// Bildiriş göndər. Qaytarır: HTTP status (201 — uğurlu, 404/410 — abunə artıq etibarsızdır)
export async function sendPush(sub, data, keys, subject = 'https://addim-az.pages.dev') {
  const body = await encrypt(JSON.stringify(data), sub.p256dh, sub.auth);
  const r = await fetch(sub.endpoint, {
    method: 'POST',
    headers: { Authorization: await vapidAuth(sub.endpoint, keys, subject), 'Content-Encoding': 'aes128gcm', 'Content-Type': 'application/octet-stream', TTL: '43200', Urgency: 'normal' },
    body,
  });
  return r.status;
}

export const PUSH_SCHEMA = 'CREATE TABLE IF NOT EXISTS push_subs (uid TEXT PRIMARY KEY, endpoint TEXT NOT NULL, p256dh TEXT NOT NULL, auth TEXT NOT NULL, hour INTEGER NOT NULL DEFAULT 20, streak INTEGER DEFAULT 0, done_day TEXT, sent_day TEXT, created INTEGER NOT NULL)';
