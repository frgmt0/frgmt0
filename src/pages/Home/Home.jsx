import { motion } from "framer-motion";
import TiltedCard from "../../components/tiltedcard/TitledCard";
import allProjects from "../../data/projects";

const Home = () => {
  const featuredProjects = allProjects.filter((project) => project.featured);

  return (
    <div className="container">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>frgmt_</h1>
          <p>
            Software engineer and researcher focused on AI systems and
            computational frameworks. Building tools that bridge the gap between
            human cognition and machine intelligence.
          </p>
          <p>
            Currently working on PRISM, a novel AI architecture that combines
            pattern recognition with principled reasoning. Exploring new
            approaches to knowledge representation and neural processing.
          </p>
        </motion.div>
      </section>

      <section className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Featured Projects</h2>
          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <TiltedCard
                  imageSrc={project.imageSrc}
                  altText={project.title}
                  captionText={project.shortDescription}
                  containerHeight="400px"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="tilted-card-content">
                      <div className="project-content">
                        <div className="project-header">
                          <h3>{project.title}</h3>
                          <a
                            href={project.githubUrl || project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="learn-more-btn"
                          >
                            learn more →
                          </a>
                        </div>
                        <p className="project-description">
                          {project.shortDescription}
                        </p>
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
