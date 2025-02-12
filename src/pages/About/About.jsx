import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="page-container">
      <section className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="about-content">
            <div className="profile-section">
              {/* Optional image rendering */}
              <div
                className="profile-image"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  marginBottom: "2rem",
                  border: "4px solid rgba(121, 104, 121, 0.3)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  background: "rgba(121, 104, 121, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                frgmt_
              </div>
              <h2>frgmt_</h2>
              <p className="subtitle">Software Engineer & AI Researcher</p>
            </div>

            <div className="bio-section">
              <p>
                I'm a software engineer and researcher focused on artificial
                intelligence and computational frameworks. My work spans across
                various domains, from developing innovative AI architectures to
                creating practical software solutions.
              </p>

              <h3>Research Interests</h3>
              <ul>
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Neural Network Architectures</li>
                <li>Knowledge Representation</li>
                <li>Computational Theory</li>
              </ul>

              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Languages</h4>
                  <ul>
                    <li>Python</li>
                    <li>JavaScript/TypeScript</li>
                    <li>Rust</li>
                    <li>C++</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Frameworks</h4>
                  <ul>
                    <li>PyTorch</li>
                    <li>TensorFlow</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Tools</h4>
                  <ul>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>Linux/Unix</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
