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
  return (
    <div className="app-container">
      <Navbar />
      <main
        style={{
          position: "relative",
          zIndex: 10,
          color: "white",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
