import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Research from './pages/Research/Research';
import ResearchProject from './pages/Research/ResearchProject';
import Preloader from './components/Preloader';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Preloader />
      <div className="page-background">
        <main className="flex-1 relative">
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
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
