import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TiltedCard from "../../components/tiltedcard/TitledCard";
import PageTransition from "../../components/PageTransition/PageTransition";
import allProjects from "../../data/projects";

const Home = () => {
  const featuredProjects = allProjects.filter((project) => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 } 
    }
  };

  return (
    <PageTransition>
      <div className="container">
        <div className="home-hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="glitch-text" data-text="frgmt_">frgmt_</h1>
            <div className="glass-card hero-card">
              <p className="hero-text">
                Software engineer and researcher focused on AI systems and
                computational frameworks. Building tools that bridge the gap
                between human cognition and machine intelligence.
              </p>
              <motion.div 
                className="cta-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link to="/projects" className="neon-button">View Projects</Link>
                <Link to="/about" className="neon-button-alt">About Me</Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="skills-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="skills-grid">
              <motion.div className="glass-card skill-item" variants={itemVariants}>
                <h3>Languages</h3>
                <p>Python • JavaScript • Rust • C++</p>
              </motion.div>
              <motion.div className="glass-card skill-item" variants={itemVariants}>
                <h3>AI/ML</h3>
                <p>PyTorch • TensorFlow • Neural Networks</p>
              </motion.div>
              <motion.div className="glass-card skill-item" variants={itemVariants}>
                <h3>Web</h3>
                <p>React • Node.js • Three.js</p>
              </motion.div>
              <motion.div className="glass-card skill-item" variants={itemVariants}>
                <h3>Tools</h3>
                <p>Git • Docker • AWS • Linux</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="featured-projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {featuredProjects.slice(0, 2).map((project) => (
                <motion.div 
                  key={project.id}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TiltedCard
                    title={project.title}
                    description={project.shortDescription}
                    imageUrl={project.imageUrl}
                    link={`/projects#${project.id}`}
                    tags={project.technologies}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
