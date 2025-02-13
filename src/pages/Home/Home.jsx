import { motion } from "framer-motion";
import MagnetLines from "../../components/MagnetLines/MagnetLines";
import TiltedCard from "../../components/tiltedcard/TitledCard";
import allProjects from "../../data/projects";

const Home = () => {
  const featuredProjects = allProjects.filter((project) => project.featured);

  return (
    <div className="container">
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
      <div className="home-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>frgmt_</h1>
          <p className="hero-text">
            Software engineer and researcher focused on AI systems and
            computational frameworks. Building tools that bridge the gap between
            human cognition and machine intelligence.
          </p>
        </motion.div>
        
        <motion.div 
          className="skills-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Languages</h3>
              <p>Python • JavaScript • Rust • C++</p>
            </div>
            <div className="skill-item">
              <h3>AI/ML</h3>
              <p>PyTorch • TensorFlow • Neural Networks</p>
            </div>
            <div className="skill-item">
              <h3>Web</h3>
              <p>React • Node.js • Three.js</p>
            </div>
            <div className="skill-item">
              <h3>Tools</h3>
              <p>Git • Docker • AWS • Linux</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="nav-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="/projects">Projects</a>
          <a href="https://research.frgmt.xyz">Research</a>
          <a href="/about">About</a>
          <a href="https://blog.frgmt.xyz">Blog</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
