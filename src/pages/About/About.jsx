import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className="container" ref={containerRef}>
      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div style={{ y: y1 }} className="glass-card intro-section">
          <h1>About Me</h1>
          <p className="about-text">
            I'm a software engineer and researcher focused on artificial
            intelligence and computational frameworks. My work spans across various
            domains, from developing innovative AI architectures to creating
            practical software solutions.
          </p>
        </motion.div>

        <motion.div style={{ y: y2 }} className="glass-card expertise-section">
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
        </motion.div>

        <motion.div style={{ y: y3 }} className="glass-card current-section">
          <h2>Current Focus</h2>
          <p className="about-text">
            Currently working on PRISM, a novel AI architecture that aims to bridge
            the gap between pattern matching and principled reasoning. The project
            explores new approaches to knowledge representation and neural processing.
          </p>
          <div className="social-links">
            <a href="https://github.com/frgmt0" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://bsky.app/profile/frgmt.xyz" target="_blank" rel="noopener noreferrer">
              Bluesky
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
