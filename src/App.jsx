import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import MagnetLines from "./components/MagnetLines/MagnetLines";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Research from "./pages/Projects/Research";
import About from "./pages/About/About";
import Art from "./pages/Art/Art";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="background-container">
        <MagnetLines
          rows={15}
          columns={15}
          lineColor="rgba(121, 104, 121, 0.1)"
          lineWidth="2px"
          lineHeight="20px"
          baseAngle={0}
        />
      </div>
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-full"
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/portfolio"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-full"
                >
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/research"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-full"
                >
                  <Research />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-full"
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/art"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-full"
                >
                  <Art />
                </motion.div>
              }
            />
            <Route
              path="/blog"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-full"
                >
                  <Blog />
                </motion.div>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-full"
                >
                  <BlogPost />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
