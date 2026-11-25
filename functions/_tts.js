// TTS ümumi köməkçiləri
// Tətbiqdəki ad → Aura-2 səsi (qadın / kişi)
export const AURA2 = { asteria: 'thalia', orion: 'orion' };
export const ttsKey = (h, voice) => 'a2-' + h + '-' + voice;

export async function sha16(t) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t));
  return [...new Uint8Array(d)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}
export const toBytes = a => a instanceof Uint8Array ? a : a instanceof ArrayBuffer ? new Uint8Array(a) : new Uint8Array(a || []);

