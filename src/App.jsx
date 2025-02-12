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
            height: "100vh",
          }}
        />
      </div>
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
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
