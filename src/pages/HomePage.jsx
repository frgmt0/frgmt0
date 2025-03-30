import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              hi, i'm <span className="gradient-text">jason</span>
            </h1>
            <h2 className="hero-subtitle slide-in">
              furball connoisseur & computer magician
            </h2>
            <p className="hero-description slide-in">
              i build beautiful (debatable), functional (depends on who you ask...), and accessible tools
              with a focus on detail and performance. Passionate about creating
              tools that solve real problems.
            </p>
            <div className="hero-cta slide-in">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/about" className="btn btn-secondary">About Me</Link>
            </div>
          </div>
          <div className="hero-image-container fade-in">
            <div className="hero-image">
              <div className="blob"></div>
              <div className="avatar">
                  <div className="avatar-image-container avatar-placeholder" style={{ position: 'relative', width: '150px', height: '150px', margin: '0 auto' }}>
                    <img 
                      src="/image.jpg" 
                      alt="Jason's avatar" 
                      className="avatar-image" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }} 
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      <section className="skills section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">what i do (supposedly)</span>
          </h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 18l6-6-6-6"></path>
                  <path d="M8 6l-6 6 6 6"></path>
                </svg>
              </div>
              <h3>software development</h3>
              <p>building efficient and powerful applications with python, rust, and c. focused on performance and clean code.</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>linux & system administration</h3>
              <p>expert in linux os navigation, bash/zsh scripting, and maintaining efficient system environments.</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              </div>
              <h3>hardware expertise</h3>
              <p>skilled in laptop and desktop repair, hardware diagnostics, and system optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">featured projects</span>
          </h2>
          <div className="featured-grid">
            <div className="featured-card">
              <div className="featured-image" style={{ backgroundImage: "url('/images/img3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div className="featured-content">
                <h3>Pocket</h3>
                <p>A snippet saver on steroids. Save, tag, and search for snippets of text from your personal 'pocket'. Built with Rust and Cargo.</p>
                <Link to="/projects" className="btn btn-small">View Project</Link>
              </div>
            </div>
            
            <div className="featured-card">
              <div className="featured-image" style={{ backgroundImage: "url('/images/img1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div className="featured-content">
                <h3>Pearl</h3>
                <p>A powerful classical heuristics chess engine, leveraging AI techniques to provide challenging gameplay. Built with Python.</p>
                <Link to="/projects" className="btn btn-small">View Project</Link>
              </div>
            </div>
          </div>
          <div className="view-all">
            <Link to="/projects" className="btn">view all projects</Link>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2 className="gradient-text">let's work together</h2>
            <p>have a project in mind? feel free to reach out and let's create something awesome!</p>
            <Link to="/about#contact" className="btn btn-primary">get in touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 