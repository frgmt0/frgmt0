import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Performance monitoring
const reportWebVitals = ({ name, delta, id }) => {
  console.log(`${name} (ID: ${id}) took ${Math.round(delta)} ms`);
  
  // Send to analytics if needed
  if (navigator.sendBeacon) {
    const data = new FormData();
    data.append('metric', name);
    data.append('value', delta);
    data.append('id', id);
    navigator.sendBeacon('/api/analytics/vitals', data);
  }
};

// Lazy load the App component
const App = lazy(() => import('./App'));

// Loading component - already rendered in HTML
const AppLoading = () => null;

// Preload critical components immediately
const preloadComponents = () => {
  // Use requestIdleCallback to preload non-critical components during idle time
  const preloadNonCritical = () => {
    // Preload the Blog component (main page)
    import('./pages/Blog/Blog');
    
    // Preload the Metadata component
    import('./components/Metadata');
  };
  
  // Use requestIdleCallback if available, otherwise use setTimeout
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(preloadNonCritical, { timeout: 2000 });
  } else {
    setTimeout(preloadNonCritical, 1000);
  }
};

// Start preloading components
preloadComponents();

// Create root and render app
const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<AppLoading />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
  
  // Report performance metrics
  if ('performance' in window && 'getEntriesByType' in window.performance) {
    window.performance.getEntriesByType('navigation').forEach(navigation => {
      reportWebVitals({
        name: 'TTFB',
        delta: navigation.responseStart - navigation.requestStart,
        id: 'main-navigation'
      });
      
      reportWebVitals({
        name: 'FCP',
        delta: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        id: 'main-navigation'
      });
    });
  }
};

// Render immediately if document is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  renderApp();
} else {
  // Otherwise wait for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', renderApp);
}
