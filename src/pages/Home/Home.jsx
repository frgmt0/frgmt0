import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TiltedCard from '../../components/tiltedcard/TitledCard';
import allProjects from '../../data/projects';

const Home = () => {
  const featuredProjects = allProjects.filter(project => project.featured);
  
  console.log('Home rendering with featured projects:', featuredProjects);

  return (
    <div className="container">
      <section className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>frgmt_</h1>
          <p>
            Software engineer and researcher focused on AI systems and computational frameworks. 
            Building tools that bridge the gap between human cognition and machine intelligence.
          </p>
          <p>
            Currently working on PRISM, a novel AI architecture that combines pattern recognition 
            with principled reasoning. Exploring new approaches to knowledge representation and 
            neural processing.
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
              <Link 
                key={project.id}
                to={project.liveUrl || `/projects#${project.id}`}
              >
                <TiltedCard
                  altText={project.prevText || project.title}
                  captionText={project.shortDescription}
                  containerHeight="250px"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="project-overlay-content">
                      <h3>{project.title}</h3>
                      <p>{project.shortDescription}</p>
                      <div className="project-tech-tags">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span 
                            key={index}
                            className="tech-tag"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  }
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
