import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import MagnetLines from "./components/MagnetLines/MagnetLines";
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects.jsx";
import Research from "./pages/Research/Research.jsx";
import About from "./pages/About/About.jsx";
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
            height: "100vh"
          }}
        />
      </div>
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
