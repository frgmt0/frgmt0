import { motion } from "framer-motion";
import TiltedCard from "../../components/tiltedcard/TitledCard";
import allProjects from "../../data/projects";

const Home = () => {
  const featuredProjects = allProjects.filter((project) => project.featured);

  return (
    <div className="container">
      <div className="home-grid">
        <motion.div
          className="intro-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>frgmt_</h1>
          <p className="intro-text">
            Software engineer and researcher focused on AI systems and
            computational frameworks. Building tools that bridge the gap between
            human cognition and machine intelligence.
          </p>
        </motion.div>

        <motion.div
          className="featured-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Featured Project</h2>
          {featuredProjects.length > 0 && (
            <div className="featured-project-container">
              <TiltedCard
                imageSrc={featuredProjects[0].imageSrc}
                altText={featuredProjects[0].title}
                captionText={featuredProjects[0].shortDescription}
                containerHeight="300px"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={8}
                displayOverlayContent={true}
                overlayContent={
                  <div className="tilted-card-content">
                    <div className="project-content">
                      <div className="project-header">
                        <h3 className="project-title">{featuredProjects[0].title}</h3>
                        <a
                          href={featuredProjects[0].githubUrl || featuredProjects[0].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="learn-more-btn"
                        >
                          learn more →
                        </a>
                      </div>
                      <p className="project-description">
                        {featuredProjects[0].shortDescription}
                      </p>
                    </div>
                  </div>
                }
              />
            </div>
          )}
        </motion.div>

        <motion.div
          className="social-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>Connect</h2>
          <div className="social-links">
            <a href="https://github.com/frgmt0" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://bsky.app/profile/frgmt.xyz" target="_blank" rel="noopener noreferrer">
              Bluesky
            </a>
          </div>
        </motion.div>

        <motion.div
          className="quick-links-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Quick Links</h2>
          <div className="quick-links">
            <motion.div whileHover={{ rotateX: 180 }} className="flip-container">
              <a href="/projects">Projects</a>
            </motion.div>
            <motion.div whileHover={{ rotateX: 180 }} className="flip-container">
              <a href="https://research.frgmt.xyz">Research</a>
            </motion.div>
            <motion.div whileHover={{ rotateX: 180 }} className="flip-container">
              <a href="/about">About</a>
            </motion.div>
            <motion.div whileHover={{ rotateX: 180 }} className="flip-container">
              <a href="https://blog.frgmt.xyz">Blog</a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
