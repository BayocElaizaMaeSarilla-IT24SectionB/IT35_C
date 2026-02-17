const CACHE_NAME = 'phil-story-book-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './homepage.html',
  './read.html',
  './about.html',
  './manifest.json',
  './css/style.css',
  './css/index.css',
  './css/read.css',
  './css/about.css',
  './js/function.js',
  './js/language.js',
  './media/Araw-sa-Palengke_540x.webp',
  './media/ANG+BATING+MARAMING+BAWAL.webp',
  './media/pagong at matsing.webp',
  './media/Sari-Sari-Summers-Filipino-children-s-book.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
