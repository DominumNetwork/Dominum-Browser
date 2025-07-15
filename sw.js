importScripts('https://cdn.jsdelivr.net/gh/titaniumnetwork-dev/Ultraviolet@latest/public/uv.bundle.js');
importScripts('https://cdn.jsdelivr.net/gh/titaniumnetwork-dev/Ultraviolet@latest/public/uv.config.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event => {
  event.respondWith(sw.fetch(event));
});