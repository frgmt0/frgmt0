import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import LoadingScreen from './components/LoadingScreen';

const Research = lazy(() => import('./pages/Research/Research'));
const ResearchProject = lazy(() => import('./pages/Research/ResearchProject'));

function App() {
  const location = useLocation();
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    console.log('App mounted');
    return () => console.log('App unmounted');
  }, []);

  const handleAssetsLoaded = () => {
    console.log('Assets loaded callback triggered');
    setAssetsLoaded(true);
  };

  if (!assetsLoaded) {
    console.log('Waiting for assets to load...');
    return (
      <>
        <LoadingScreen />
        <Preloader onLoadComplete={handleAssetsLoaded} />
      </>
    );
  }

  console.log('Assets loaded, rendering main content');

  return (
    <div className="app-container">
      <Preloader onLoadComplete={() => setAssetsLoaded(true)} />
      <div className="page-background">
        <main className="flex-1 relative">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route 
                path="/" 
                element={
                  <Suspense fallback={<LoadingScreen />}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Research />
                    </motion.div>
                  </Suspense>
                } 
              />
              <Route 
                path="/:id" 
                element={
                  <Suspense fallback={<LoadingScreen />}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ResearchProject />
                    </motion.div>
                  </Suspense>
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
