importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  '/',
  '/style.css',
  '/jon.png',
  '/audio/careful.mp3', 
  '/audio/defend_self.mp3', 
  '/audio/deliver_baby.mp3', 
  '/audio/risk_lives.mp3'
]);
