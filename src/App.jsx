import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import MagnetLines from "./components/MagnetLines/MagnetLines";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Research from "./pages/Research/Research";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="background-container" style={{ zIndex: -1 }}>
        <MagnetLines
          rows={15}
          columns={15}
          lineColor="rgba(121, 104, 121, 0.5)"
          lineWidth="20px"
          lineHeight="20px"
          baseAngle={0}
          containerSize="100vw"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1
          }}
        />
      </div>
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            } />
            <Route path="/research" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Research />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            } />
            <Route path="/blog" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Blog />
              </motion.div>
            } />
            <Route path="/blog/:id" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BlogPost />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
