/**
 * Cloudflare Worker for optimizing frgmt blog
 */

// Cache settings
const CACHE_TIME = 60 * 60 * 24; // 24 hours in seconds
const HTML_CACHE_TIME = 60 * 60; // 1 hour in seconds

// HTML optimization function
async function optimizeHtml(html) {
  // Add preconnect hints
  html = html.replace(
    '<head>',
    `<head>
    <link rel="preconnect" href="https://blog.frgmt.xyz" crossorigin>
    <link rel="preconnect" href="https://static.cloudflareinsights.com" crossorigin>`
  );
  
  // Move non-critical scripts to the end of body
  html = html.replace(
    /<script(?!\s+type="module"|defer|async)(.+?)>/g,
    '<script defer$1>'
  );
  
  return html;
}

// Handle requests
async function handleRequest(request) {
  const url = new URL(request.url);
  const cache = caches.default;
  
  // Check if the request is for the main page
  const isMainPage = url.pathname === '/' || url.pathname.endsWith('.html');
  
  // Try to get from cache first
  let response = await cache.match(request);
  
  if (!response) {
    // If not in cache, fetch from origin
    response = await fetch(request);
    
    // Only process successful responses
    if (response.status === 200) {
      // Clone the response so we can modify it
      const originalResponse = response.clone();
      
      // Set appropriate cache control headers
      const headers = new Headers(response.headers);
      
      if (isMainPage) {
        // For HTML pages, use shorter cache time
        headers.set('Cache-Control', `public, max-age=${HTML_CACHE_TIME}`);
        
        // Optimize HTML content
        const contentType = response.headers.get('Content-Type') || '';
        if (contentType.includes('text/html')) {
          const text = await originalResponse.text();
          const optimizedHtml = await optimizeHtml(text);
          
          // Create new response with optimized HTML
          response = new Response(optimizedHtml, {
            status: response.status,
            statusText: response.statusText,
            headers
          });
        }
      } else {
        // For static assets, use longer cache time
        headers.set('Cache-Control', `public, max-age=${CACHE_TIME}`);
        
        // Create new response with updated headers
        response = new Response(originalResponse.body, {
          status: response.status,
          statusText: response.statusText,
          headers
        });
      }
      
      // Store in cache
      await cache.put(request, response.clone());
    }
  }
  
  return response;
}

// Event listener for fetch events
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
}); 