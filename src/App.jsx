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

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
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
