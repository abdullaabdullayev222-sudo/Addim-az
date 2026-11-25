// Addım service worker: tətbiqi oflayn işlədir
const CACHE = 'addim-v20';
const AUDIO = 'addim-audio-v2';
const FILES = ['./', './index.html', './course.js', './course-extra.js', './a1-more.js', './practice.js', './avatars.js', './config.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== AUDIO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Əvvəl şəbəkə (yeni versiya üçün), alınmasa yaddaşdakı nüsxə. Liqa API-si heç vaxt keşlənmir.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // Təbii səs faylları: əvvəl yaddaş (dəyişmir), yoxdursa şəbəkə — internetsiz də işləsin
  if (url.pathname === '/api/tts') {
    e.respondWith(caches.open(AUDIO).then(c => c.match(e.request).then(m => m || fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }))));
    return;
  }
  if (url.pathname.startsWith('/api/')) return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok && url.origin === location.origin) {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return r;
    }).catch(() => caches.match(e.request).then(m => m || caches.match('./index.html')))
  );
});

// Bildirişlər: gündəlik xatırlatma
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || '⚡ Addım', {
    body: d.body || 'Bu gün bir dərs keç — şimşəyin sönməsin.',
    icon: './icon-192.png', badge: './icon-192.png', tag: d.tag || 'daily', renotify: true,
    data: { url: d.url || './#home' }
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || './#home', self.location.href).href;
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) if (c.url.startsWith(self.location.origin)) { c.navigate ? c.navigate(url) : 0; return c.focus(); }
    return clients.openWindow(url);
  }));
});
