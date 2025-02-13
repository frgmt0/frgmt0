import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltedCard from "../../components/tiltedcard/TitledCard";
import allProjects from "../../data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const categories = ["All Projects", "Research", "Coding"];
  
  const filteredProjects = selectedCategory === "All Projects" 
    ? allProjects 
    : allProjects.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="container">
      <motion.div 
        className="projects-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Projects</h1>
        <p className="projects-intro">
          A collection of my work in software development, AI research, and computational systems.
        </p>
      </motion.div>

      <motion.div 
        className="category-filter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      <motion.div className="projects-grid">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <TiltedCard
                altText={project.title}
                captionText={project.shortDescription}
                containerHeight="400px"
                containerWidth="400px"
                imageHeight="400px"
                imageWidth="400px"
                rotateAmplitude={8}
                displayOverlayContent={true}
                overlayContent={
                  <div className="project-card">
                    <div className="project-content">
                      <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
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
                      <div className="tech-tags">
                        {project.technologies?.map((tech, index) => (
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
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
