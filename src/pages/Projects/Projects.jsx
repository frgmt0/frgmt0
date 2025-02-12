import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div style={{
      color: 'white',
      padding: '100px 20px',
      position: 'relative',
      zIndex: 999,
      backgroundColor: 'rgba(0,0,0,0.5)'
    }}>
      <h1>Test Projects Page</h1>
      <p>If you can see this, basic rendering is working.</p>
          <h1>Projects</h1>
          <p>
            A collection of my work in software development, research, and AI
            systems.
          </p>

          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-button ${filter === category ? "active" : ""}`}
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
                        <p className="project-description">
                          {project.shortDescription}
                        </p>
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
