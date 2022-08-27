const CACHE_NAME = "version-1"
const urlsToCache = ["index.html", "offline.html"]

addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened Cache", cache)
    })
  )
})