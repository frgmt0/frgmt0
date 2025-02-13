import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div className="container">
      <motion.div className="about-hero" style={{ opacity, scale, y }}>
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
            <p>Software Engineer & AI Systems Architect</p>
            <p>Crafting innovative solutions at the intersection of human intelligence and machine learning</p>
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
          As a software engineer with a passion for artificial intelligence and systems architecture, 
          I thrive on creating elegant solutions to complex problems. My work seamlessly bridges 
          the gap between theoretical computer science and practical engineering, focusing on 
          building robust systems that push the boundaries of what's possible.
        </p>
      </motion.div>

      <motion.div
        className="glass-card expertise-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2>Skills & Certifications</h2>
        <div className="expertise-grid">
          <motion.div
            className="expertise-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Programming Languages</h3>
            <p>Python • JavaScript • Rust (Learning) • Java</p>
          </motion.div>
          <motion.div
            className="expertise-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Technologies</h3>
            <p>Database Management • Web Development • System Administration</p>
          </motion.div>
          <motion.div
            className="expertise-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Professional Certifications</h3>
            <p>Adobe Certified Professional (2023) • Cisco Certified Support Technician (2022)</p>
          </motion.div>
          <motion.div
            className="expertise-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Additional Certifications</h3>
            <p>IC3 Master (2022) • MTA: Java Programming (2022) • HackerRank Python (2023)</p>
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
            <h3>College</h3>
            <p className="school">Mt. San Antonio College</p>
            <p className="degree">Electrical Engineering</p>
            <p className="year">2023 - Present</p>
          </motion.div>
          <motion.div
            className="education-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>High School</h3>
            <p className="school">eSTEM Academy</p>
            <p className="degree">High School Diploma</p>
            <p className="year">2019 - 2023</p>
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
          Currently developing Crater, an innovative programming language that transpiles to C, 
          designed to combine low-level performance with high-level expressiveness. In parallel, 
          I'm exploring the frontiers of game AI through the development of chess engines powered 
          by pure reinforcement learning, pushing the boundaries of strategic decision-making systems.
        </p>
      </motion.div>

      <motion.div
        className="glass-card contact-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2>Contact Me</h2>
        <div className="contact-grid">
          <motion.a
            href="mailto:jason.awz2005@gmail.com"
            className="contact-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Email</h3>
            <p>jason.awz2005@gmail.com</p>
          </motion.a>
          <motion.a
            href="https://github.com/frgmt0"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>GitHub</h3>
            <p>@frgmt0</p>
          </motion.a>
          <motion.a
            href="https://bsky.app/profile/frgmt.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Bluesky</h3>
            <p>@frgmt.xyz</p>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
