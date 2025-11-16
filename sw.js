const CACHE_NAME = 'sdcalc-cache-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './Chaos-Zero-Nightmare_L.webp',
  './Savedata.png',
  './card.png',
  './delete.png',
  './duplicar.png',
  './upgrade.png',
  './favicon.ico'
  // podés agregar más archivos locales si querés
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Cache-first simple
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
