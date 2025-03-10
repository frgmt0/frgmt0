import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Lazy load the App component
const App = lazy(() => import('./App'));

// Loading component
const AppLoading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    background: '#1a1a1a',
    color: '#f5f5f5',
    fontFamily: 'sans-serif'
  }}>
    <div style={{ textAlign: 'center' }}>
      <h2>Loading frgmt blog...</h2>
      <p>Just a moment while we prepare your experience</p>
    </div>
  </div>
);

// Preload critical components
const preloadComponents = () => {
  // Preload the App component
  import('./App');
  
  // Preload the Blog component (main page)
  import('./pages/Blog/Blog');
  
  // Preload the Metadata component
  import('./components/Metadata');
};

// Start preloading components
preloadComponents();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<AppLoading />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
