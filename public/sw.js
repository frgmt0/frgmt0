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
  '/manifest.json',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/pages/Blog/Blog.jsx',
  '/src/components/Metadata.jsx'
];

// Install event - precache static assets
self.addEventListener('install', event => {
  // Skip waiting to activate this service worker immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(PRECACHE_URLS);
      })
  );
});

// Activate event - clean up old caches and take control immediately
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  
  // Take control of all clients immediately
  event.waitUntil(self.clients.claim());
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => !currentCaches.includes(cacheName))
          .map(cacheToDelete => {
            console.log('Deleting old cache:', cacheToDelete);
            return caches.delete(cacheToDelete);
          })
      );
    })
  );
});

// Fetch event - serve from cache or network with improved strategies
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // For navigation requests (HTML pages), use a network-first strategy with a timeout
  if (event.request.mode === 'navigate' || 
      (event.request.method === 'GET' && 
       event.request.headers.get('accept').includes('text/html'))) {
    
    event.respondWith(
      Promise.race([
        // Set a timeout for network requests
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Network timeout')), 3000);
        }),
        fetch(event.request.clone())
          .then(response => {
            // Cache the response if it's valid
            if (response.status === 200) {
              const responseToCache = response.clone();
              caches.open(RUNTIME_CACHE)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            return response;
          })
      ])
      .catch(() => {
        // If network times out or fails, try to serve from cache
        return caches.match(event.request)
          .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If not in cache, try network again without timeout
            return fetch(event.request);
          });
      })
    );
    return;
  }

  // For JavaScript and CSS files, use stale-while-revalidate strategy
  if (event.request.url.match(/\.(js|css)$/)) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          const fetchPromise = fetch(event.request)
            .then(networkResponse => {
              // Update the cache
              caches.open(RUNTIME_CACHE)
                .then(cache => {
                  cache.put(event.request, networkResponse.clone());
                });
              return networkResponse;
            });
          
          // Return the cached response immediately if we have it
          return cachedResponse || fetchPromise;
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

  // For all other requests, use a network-first strategy
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
        return caches.match(event.request);
      })
  );
}); 