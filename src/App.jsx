import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FontProvider } from './context/FontContext';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';

function App() {
  const location = useLocation();

  return (
    <FontProvider>
      <div className="min-h-screen flex flex-col relative">
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
                  transition={{ duration: 0.5 }}
                  className="min-h-full"
                >
                  <Blog />
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
                  <BlogPost />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </FontProvider>
  );
}

export default App;
