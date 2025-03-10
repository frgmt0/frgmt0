// Service Worker for frgmt blog
const CACHE_NAME = 'frgmt-blog-cache-v1';
const RUNTIME_CACHE = 'frgmt-blog-runtime-v1';

// Resources to cache on install
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/logo.svg',
  '/fonts/text/exo.otf',
  '/images/background.jpg',
];

// Install event - precache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (event.request.url.startsWith(self.location.origin)) {
    // For HTML pages, use network-first strategy
    if (event.request.headers.get('accept').includes('text/html')) {
      event.respondWith(
        fetch(event.request)
          .then(response => {
            // Clone the response to store in cache
            const responseToCache = response.clone();
            caches.open(RUNTIME_CACHE)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          })
          .catch(() => {
            // If network fails, try to serve from cache
            return caches.match(event.request);
          })
      );
      return;
    }

    // For images, use cache-first strategy
    if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
      event.respondWith(
        caches.match(event.request)
          .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            
            return fetch(event.request)
              .then(response => {
                // Clone the response to store in cache
                const responseToCache = response.clone();
                caches.open(RUNTIME_CACHE)
                  .then(cache => {
                    cache.put(event.request, responseToCache);
                  });
                return response;
              });
          })
      );
      return;
    }

    // For other assets, use stale-while-revalidate strategy
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          const fetchPromise = fetch(event.request)
            .then(response => {
              // Clone the response to store in cache
              const responseToCache = response.clone();
              caches.open(RUNTIME_CACHE)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
              return response;
            })
            .catch(error => {
              console.error('Fetch failed:', error);
            });

          // Return the cached response immediately, or wait for network response
          return cachedResponse || fetchPromise;
        })
    );
  }
}); 