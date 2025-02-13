import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    {
      id: 'intro',
      content: (
        <div className="about-hero">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              frgmt_
            </motion.h1>
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>Software Engineer & AI Researcher</p>
              <p>Building the future of intelligent systems</p>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 'about',
      content: (
        <div className="glass-card about-content">
          <h2>About Me</h2>
          <p>
            I'm a software engineer and researcher focused on artificial intelligence 
            and computational frameworks. My work spans across various domains, from 
            developing innovative AI architectures to creating practical software solutions.
          </p>
        </div>
      )
    },
    {
      id: 'expertise',
      content: (
        <div className="glass-card expertise-section">
          <h2>Areas of Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h3>AI Research</h3>
              <p>Developing novel architectures and approaches in artificial intelligence</p>
            </div>
            <div className="expertise-item">
              <h3>Software Engineering</h3>
              <p>Building robust and scalable applications</p>
            </div>
            <div className="expertise-item">
              <h3>Neural Networks</h3>
              <p>Designing and implementing advanced neural architectures</p>
            </div>
            <div className="expertise-item">
              <h3>Systems Design</h3>
              <p>Creating efficient and maintainable system architectures</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleScroll = (e) => {
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  return (
    <div className="container" onWheel={handleScroll}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          {sections[currentSection].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default About;
