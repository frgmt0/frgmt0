import { motion } from "framer-motion";
import TiltedCard from "../../components/tiltedcard/TitledCard";
import allProjects from "../../data/projects";

const Home = () => {
  const featuredProjects = allProjects.filter((project) => project.featured);

  return (
    <div className="container">
      <div className="home-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>frgmt_</h1>
          <div className="glass-card">
            <p className="hero-text">
              Software engineer and researcher focused on AI systems and
              computational frameworks. Building tools that bridge the gap
              between human cognition and machine intelligence.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="skills-grid">
            <div className="glass-card skill-item">
              <h3>Languages</h3>
              <p>Python • JavaScript • Rust • C++</p>
            </div>
            <div className="glass-card skill-item">
              <h3>AI/ML</h3>
              <p>PyTorch • TensorFlow • Neural Networks</p>
            </div>
            <div className="glass-card skill-item">
              <h3>Web</h3>
              <p>React • Node.js • Three.js</p>
            </div>
            <div className="glass-card skill-item">
              <h3>Tools</h3>
              <p>Git • Docker • AWS • Linux</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
