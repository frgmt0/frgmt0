import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Research from './pages/Research/Research';
import ResearchProject from './pages/Research/ResearchProject';
import Preloader from './components/Preloader';
import LoadingScreen from './components/LoadingScreen';
import { useState } from 'react';

function App() {
  const location = useLocation();
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  return (
    <div className="app-container">
      {!assetsLoaded && <LoadingScreen />}
      <Preloader onLoadComplete={() => setAssetsLoaded(true)} />
      <div className="page-background">
        <main className="flex-1 relative">
          <AnimatePresence mode="wait">
            {assetsLoaded && (
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
                  <Research />
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
                  <ResearchProject />
                </motion.div>
              } />
              </Routes>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
