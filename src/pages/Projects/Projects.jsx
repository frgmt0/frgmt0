import { useState } from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '../../components/tiltedcard/TitledCard';
import allProjects from '../../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...new Set(allProjects.map(project => project.category))];
  
  const filteredProjects = filter === 'all' 
    ? allProjects
    : allProjects.filter(project => project.category === filter);

  return (
    <div className="container">
      <section className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Projects</h1>
          <p>A collection of my work in software development, research, and AI systems.</p>
          
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-button ${filter === category ? 'active' : ''}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="project-card"
              >
                <a 
                  href={project.githubUrl || project.liveUrl}
                  target={project.githubUrl ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="project-link"
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
                      <div className="project-overlay">
                        <h3>{project.title}</h3>
                        <p className="project-description">{project.shortDescription}</p>
                        <div className="tech-tags">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    }
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
