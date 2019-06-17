importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  '/jon512x512.png',
  '/jon192x192.png',
  '/audio/careful.mp3', 
  '/audio/defend_self.mp3', 
  '/audio/deliver_baby.mp3', 
  '/audio/risk_lives.mp3'
]);

workbox.routing.registerRoute(
  '/',
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  /\.(?:png|css|ico)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

