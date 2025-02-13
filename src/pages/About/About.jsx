import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div className="container">
      <motion.div 
        className="about-hero"
        style={{ opacity, scale, y }}
      >
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
      </motion.div>

      <motion.div 
        className="glass-card about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2>About Me</h2>
        <p>
          I'm a software engineer and researcher focused on artificial intelligence 
          and computational frameworks. My work spans across various domains, from 
          developing innovative AI architectures to creating practical software solutions.
        </p>
      </motion.div>

      <motion.div 
        className="glass-card expertise-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2>Areas of Expertise</h2>
        <div className="expertise-grid">
          <motion.div 
            className="expertise-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>AI Research</h3>
            <p>Developing novel architectures and approaches in artificial intelligence</p>
          </motion.div>
          <motion.div 
            className="expertise-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Software Engineering</h3>
            <p>Building robust and scalable applications</p>
          </motion.div>
          <motion.div 
            className="expertise-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Neural Networks</h3>
            <p>Designing and implementing advanced neural architectures</p>
          </motion.div>
          <motion.div 
            className="expertise-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Systems Design</h3>
            <p>Creating efficient and maintainable system architectures</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="glass-card education-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2>Education</h2>
        <div className="education-grid">
          <motion.div 
            className="education-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Master of Science</h3>
            <p className="school">University of California, Berkeley</p>
            <p className="degree">Computer Science</p>
            <p className="year">2024 - Present</p>
          </motion.div>
          <motion.div 
            className="education-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Bachelor of Science</h3>
            <p className="school">University of California, Berkeley</p>
            <p className="degree">Computer Science & Mathematics</p>
            <p className="year">2020 - 2024</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="glass-card current-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2>Current Focus</h2>
        <p>
          Currently working on PRISM, a novel AI architecture that aims to bridge 
          the gap between pattern matching and principled reasoning. The project 
          explores new approaches to knowledge representation and neural processing.
        </p>
        <div className="social-links">
          <motion.a 
            href="https://github.com/frgmt0" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a 
            href="https://bsky.app/profile/frgmt.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Bluesky
          </motion.a>
        </div>
      </motion.div>
    </div>
};

export default About;
