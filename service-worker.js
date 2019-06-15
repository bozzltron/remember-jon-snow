var CACHE_NAME = 'john-snow-cache-v1';
var urlsToCache = [
  '/',
  '/style.css',
  '/jon.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});