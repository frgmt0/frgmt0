import React, { lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';

// Lazy load page components
const Blog = lazy(() => import('./pages/Blog/Blog'));
const BlogPost = lazy(() => import('./pages/Blog/BlogPost'));

// Loading component for routes
const RouteLoading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '80vh',
    color: '#f5f5f5',
    fontFamily: 'sans-serif'
  }}>
    <div style={{ textAlign: 'center' }}>
      <h3>Loading content...</h3>
    </div>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Preloader />
      <main 
        className="flex-1 relative"
        style={{ 
          minHeight: '100vh'
        }}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-full"
                onAnimationComplete={() => {
                  document.body.style.overflow = 'auto';
                }}
              >
                <Suspense fallback={<RouteLoading />}>
                  <Blog />
                </Suspense>
              </motion.div>
            } />
            <Route path="/:id" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-full"
              >
                <Suspense fallback={<RouteLoading />}>
                  <BlogPost />
                </Suspense>
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
