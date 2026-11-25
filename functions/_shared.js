// Addım — server tərəfi üçün ortaq köməkçilər (bu fayl route deyil: adı "_" ilə başlayır)

export const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

export const validId = s => typeof s === 'string' && /^[A-Za-z0-9-]{8,48}$/.test(s);

const SCHEMAS = [
  `CREATE TABLE IF NOT EXISTS premium (id TEXT PRIMARY KEY, until INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS codes (code TEXT PRIMARY KEY, days INTEGER NOT NULL, note TEXT,
     created INTEGER NOT NULL, redeemed_by TEXT, redeemed_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS profiles (id TEXT PRIMARY KEY, avatar TEXT, ncolor INTEGER DEFAULT 0,
     nstyle INTEGER DEFAULT 0, frame INTEGER DEFAULT 0)`
];
export async function ensureSchema(db) { for (const s of SCHEMAS) await db.prepare(s).run(); }

export async function premiumUntil(db, id) {
  if (!validId(id)) return 0;
  const r = await db.prepare('SELECT until FROM premium WHERE id = ?1').bind(id).first();
  return r ? r.until : 0;
}

// Kosmetika kataloqu — tətbiqdəki ilə eyni olmalıdır.
// Pulsuz: avatarların ilk 6-sı, rəng 0, şrift 0, çərçivə 0. Qalanları yalnız Premium üçün.
export const AVATARS = ['cat', 'bear', 'frog', 'penguin', 'owl', 'fox', 'lion', 'panda', 'robot', 'unicorn', 'dragon', 'astronaut'];
export const FREE_AVATARS = 6, N_COLORS = 7, N_STYLES = 4, N_FRAMES = 4;

export function cleanCosmetics(c, isPremium) {
  c = c || {};
  let avatar = AVATARS.includes(c.avatar) ? c.avatar : '';
  let ncolor = Math.max(0, Math.min(N_COLORS - 1, Math.floor(Number(c.ncolor) || 0)));
  let nstyle = Math.max(0, Math.min(N_STYLES - 1, Math.floor(Number(c.nstyle) || 0)));
  let frame = Math.max(0, Math.min(N_FRAMES - 1, Math.floor(Number(c.frame) || 0)));
  if (!isPremium) {
    if (avatar && AVATARS.indexOf(avatar) >= FREE_AVATARS) avatar = '';
    ncolor = 0; nstyle = 0; frame = 0;
  }
  return { avatar, ncolor, nstyle, frame };
}

const ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // qarışan simvollar yoxdur (0/O, 1/I)
export function newCode() {
  const b = new Uint8Array(8); crypto.getRandomValues(b);
  const s = [...b].map(x => ALPHA[x % ALPHA.length]).join('');
  return 'ADDIM-' + s.slice(0, 4) + '-' + s.slice(4);
}
