const CACHE_NAME = "version-1";
const urlsToCache = ["offline.html"];

addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return fetch(event.request).catch((error) =>
        caches.match("offline.html")
      );
    })
  );
});

addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
