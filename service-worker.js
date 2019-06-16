importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  '/',
  '/style.css',
  '/jon.png',
  '/audio/careful.wav', 
  '/audio/defend_self.wav', 
  '/audio/deliver_baby.wav', 
  '/audio/risk_lives.wav'
]);