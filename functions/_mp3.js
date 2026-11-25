// MP3-ün əvvəlinə səssiz kadrlar əlavə edir.
// Səbəb: bəzi telefonlar və bluetooth qulaqlıqlar səsin ilk ~0.1 saniyəsini "yeyir" —
// «Nice» → «…ice» kimi eşidilir. Qısa sükut ilk səsi qoruyur.
const BR1 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320];
const BR2 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160];
const SR = { 3: [44100, 48000, 32000], 2: [22050, 24000, 16000], 0: [11025, 12000, 8000] };

export function firstFrame(buf) {
  let i = 0;
  if (buf[0] === 0x49 && buf[1] === 0x44 && buf[2] === 0x33) // ID3
    i = 10 + ((buf[6] & 0x7f) << 21 | (buf[7] & 0x7f) << 14 | (buf[8] & 0x7f) << 7 | (buf[9] & 0x7f));
  for (; i < buf.length - 4; i++) {
    if (buf[i] !== 0xff || (buf[i + 1] & 0xe0) !== 0xe0) continue;
    const ver = (buf[i + 1] >> 3) & 3, layer = (buf[i + 1] >> 1) & 3, bri = buf[i + 2] >> 4, sri = (buf[i + 2] >> 2) & 3;
    if (ver === 1 || layer !== 1 || bri === 0 || bri === 15 || sri === 3) continue;
    const br = (ver === 3 ? BR1 : BR2)[bri] * 1000, sr = SR[ver][sri];
    const len = Math.floor((ver === 3 ? 144 : 72) * br / sr);
    return { at: i, ver, sr, len, spf: ver === 3 ? 1152 : 576, h: buf.slice(i, i + 4) };
  }
  return null;
}

export function padStart(buf, seconds = 0.25) {
  const f = firstFrame(buf);
  if (!f || f.len < 8) return buf;
  const n = Math.max(1, Math.ceil(seconds * f.sr / f.spf));
  const frame = new Uint8Array(f.len);
  frame.set(f.h);
  frame[1] |= 1;      // CRC yoxdur
  frame[2] &= ~2;     // padding biti sıfır
  const out = new Uint8Array(buf.length + n * f.len);
  out.set(buf.subarray(0, f.at), 0);
  for (let k = 0; k < n; k++) out.set(frame, f.at + k * f.len);
  out.set(buf.subarray(f.at), f.at + n * f.len);
  return out;
}
