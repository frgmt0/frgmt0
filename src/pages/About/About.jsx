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
          I'm a software engineer and researcher focused on artificial
          intelligence and computational frameworks. My work spans across
          various domains, from developing innovative AI architectures to
          creating practical software solutions.
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
          Currently working on PRISM, a novel AI architecture that aims to
          bridge the gap between pattern matching and principled reasoning. The
          project explores new approaches to knowledge representation and neural
          processing.
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
