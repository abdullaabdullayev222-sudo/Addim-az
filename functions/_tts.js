// TTS ümumi köməkçiləri
// Tətbiqdəki ad → Aura-2 səsi (qadın / kişi)
export const AURA2 = { asteria: 'thalia', orion: 'orion' };
export const ttsKey = (h, voice) => 'a2-' + h + '-' + voice;

export async function sha16(t) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t));
  return [...new Uint8Array(d)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}
export const toBytes = a => a instanceof Uint8Array ? a : a instanceof ArrayBuffer ? new Uint8Array(a) : new Uint8Array(a || []);


// Tələffüz düzəlişləri: ekranda yazılan mətn dəyişmir, yalnız səs modelinə gedən mətn.
// (Whisper yoxlaması göstərdi ki, model bu sözləri səhv oxuyur.)
export const SAY = [
  [/\bmanats\b/gi, 'mah-nahts'],
  [/\bmanat\b/gi, 'mah-naht'],
  [/\bLeyla\b/g, 'Layla'],
];
export const spoken = t => SAY.reduce((s, [re, to]) => s.replace(re, to), t);
// Sınaq üçün icazə verilən Aura-2 səsləri
export const TRY_VOICES = ['thalia', 'asteria', 'luna', 'athena', 'orion', 'apollo', 'arcas', 'orpheus', 'zeus'];
