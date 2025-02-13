import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects.jsx";
import Research from "./pages/Research/Research.jsx";
import About from "./pages/About/About.jsx";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import Waves from "./components/Waves/Waves";

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="background-container">
        <Waves
          lineColor="#fff"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
