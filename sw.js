const CACHE = "pha-dong-bai-v1";
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(["./", "./index.html", "./style.css", "./script.js"])
    )
  );
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
