const CACHE_NAME = 'stock-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  'https://static.vecteezy.com/system/resources/previews/015/993/318/non_2x/stock-exchange-icon-design-free-vector.jpg',
  'https://cdnjs.cloudflare.com/ajax/libs/chart.js/2.9.3/Chart.min.js',  // Si usas alguna librería como Chart.js
];

// Instalación del Service Worker y cacheo de los recursos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Archivos cacheados');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist
