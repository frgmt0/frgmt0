import { useState } from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '../../components/tiltedcard/TitledCard';
import allProjects from '../../data/projects/index.js';

const Projects = () => {
  console.log('Projects component rendering');
  const [filter, setFilter] = useState('all');
  
  if (!allProjects) {
    console.error('allProjects is undefined');
    return null;
  }
  
  console.log('allProjects:', allProjects);
  const categories = ['all', ...new Set(allProjects.map(project => project.category))];
  
  const filteredProjects = filter === 'all' 
    ? allProjects
    : allProjects.filter(project => project.category === filter);
    
  console.log('Filtered projects:', filteredProjects);

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

          <div className="featured-projects-grid">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <TiltedCard
                  imageSrc={project.imageSrc}
                  altText={project.prevText || project.title}
                  captionText={project.shortDescription}
                  containerHeight="400px"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="project-card">
                      <div className="project-content">
                        <div className="project-header">
                          <h3 className="project-title">{project.title}</h3>
                          <a 
                            href={project.githubUrl || project.liveUrl}
                            target={project.githubUrl ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="learn-more-btn"
                          >
                            learn more →
                          </a>
                        </div>
                        <p className="project-description">{project.shortDescription}</p>
                        <div className="tech-tags">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
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

export default Projects;
