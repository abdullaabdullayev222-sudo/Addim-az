// Web Push şifrələməsinin yoxlanışı: brauzer (qəbul edən) tərəfini təqlid edib mesajı açırıq.
import { encrypt, b64u, unb64u, vapidKeys } from '../functions/_push.js';
const enc = new TextEncoder(), dec = new TextDecoder();
const hk = async (salt, ikm, info, len) => new Uint8Array(await crypto.subtle.deriveBits({ name: 'HKDF', hash: 'SHA-256', salt, info }, await crypto.subtle.importKey('raw', ikm, 'HKDF', false, ['deriveBits']), len * 8));
const cat = (...a) => { const o = new Uint8Array(a.reduce((n, x) => n + x.length, 0)); let i = 0; for (const x of a) { o.set(x, i); i += x.length; } return o; };
let fails = 0; const ok = (n, c) => { console.log((c ? '  OK  ' : '  FAIL ') + n); if (!c) fails++; };

const ua = await crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
const uaPub = new Uint8Array(await crypto.subtle.exportKey('raw', ua.publicKey)), auth = crypto.getRandomValues(new Uint8Array(16));
const msg = JSON.stringify({ title: '⚡ Şimşəyin əsəbiləşir!', body: '5 günlük seriyan sönməsin — çəkinmə, ğ ü ö ş ı ə' });
const body = await encrypt(msg, b64u(uaPub), b64u(auth));
// qəbul edən tərəf (RFC 8291)
const salt = body.slice(0, 16), idlen = body[20], asPub = body.slice(21, 21 + idlen), ct = body.slice(21 + idlen);
const asKey = await crypto.subtle.importKey('raw', asPub, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
const shared = new Uint8Array(await crypto.subtle.deriveBits({ name: 'ECDH', public: asKey }, ua.privateKey, 256));
const ikm = await hk(auth, shared, cat(enc.encode('WebPush: info\0'), uaPub, asPub), 32);
const cek = await hk(salt, ikm, enc.encode('Content-Encoding: aes128gcm\0'), 16), nonce = await hk(salt, ikm, enc.encode('Content-Encoding: nonce\0'), 12);
const pt = new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: nonce }, await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['decrypt']), ct));
ok('şifrələnmiş bildiriş açılır və mətn eynidir', pt[pt.length - 1] === 2 && dec.decode(pt.slice(0, -1)) === msg);
ok('başlıq: rs=4096, açar 65 bayt', body[18] === 16 && body[19] === 0 && idlen === 65);

// VAPID: açar yaradılır və imza yoxlanılır
const rows = {}; const DB = { prepare: sql => ({ bind: (...a) => ({ run: async () => { if (/INSERT/.test(sql) && !rows[1]) rows[1] = { pub: a[0], priv: a[1] }; }, first: async () => rows[1] || null }), run: async () => {}, first: async () => rows[1] || null }) };
const keys = await vapidKeys(DB), keys2 = await vapidKeys(DB);
ok('VAPID açarı bir dəfə yaradılır və saxlanılır', keys.pub === keys2.pub && unb64u(keys.pub).length === 65);
let auth2 = '';
globalThis.fetch = async (url, o) => { auth2 = o.headers.Authorization; return { status: 201 }; };
const { sendPush } = await import('../functions/_push.js');
const st = await sendPush({ endpoint: 'https://fcm.googleapis.com/fcm/send/abc', p256dh: b64u(uaPub), auth: b64u(auth) }, { title: 'x' }, keys);
const [, jwt] = auth2.match(/t=([^,]+)/); const [h, p, s] = jwt.split('.');
const pubKey = await crypto.subtle.importKey('raw', unb64u(keys.pub), { name: 'ECDSA', namedCurve: 'P-256' }, false, ['verify']);
const valid = await crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, pubKey, unb64u(s), enc.encode(h + '.' + p));
const claims = JSON.parse(dec.decode(unb64u(p)));
ok('VAPID imzası düzgündür (ES256)', valid && st === 201);
ok('VAPID aud = bildiriş serverinin ünvanı', claims.aud === 'https://fcm.googleapis.com' && claims.exp > Date.now() / 1000);
console.log(fails ? 'PUSH: ' + fails + ' UĞURSUZ' : 'PUSH: HAMISI KEÇDİ'); process.exit(fails ? 1 : 0);
