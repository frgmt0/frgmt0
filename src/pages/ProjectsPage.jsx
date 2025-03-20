import React, { useState, useEffect } from 'react';
import '../styles/ProjectsPage.css';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects([
        {
          id: 1,
          title: 'Pocket',
          description: 'A snippet saver on steroids. Pocket allows you to save, tag, and search for snippets of text from your personal \'pocket\'. Pocket is extensible and can be built to your liking.',
          image: '/images/img3.jpg',
          category: 'tools',
          technologies: ['Rust', 'Cargo'],
          githubUrl: 'https://github.com/frgmt0/pocket.git',
          liveUrl: ''
        },
        {
          id: 2,
          title: 'Pearl',
          description: 'A powerful classical heuristics chess engine.',
          image: '/images/img1.jpg',
          category: 'library',
          technologies: ['Python', 'Chess', 'Engine', 'Artificial Intelligence'],
          githubUrl: 'https://github.com/frgmt0/pearl.git',
          liveUrl: ''
        },
        {
          id: 3,
          title: 'etch',
          description: 'etch is a p2p chat app built to be permanent and everlasting.',
          image: '/images/img2.jpg',
          category: 'web',
          technologies: ["React", "Websockets", "Node.js", "TailwindCSS"],
          githubUrl: 'https://github.com/frgmt0/etch.git',
          liveUrl: ''
        }
      ]);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      <section className="projects-hero section">
        <div className="container">
          <h1 className="page-title fade-in">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="projects-intro">
            Here's a collection of my recent work. I'm passionate about building applications 
            that are not only functional but also provide a great user experience. Each project 
            represents a unique challenge and solution.
          </p>
        </div>
      </section>

      <section className="projects-filter section">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'web' ? 'active' : ''}`} 
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button 
              className={`filter-btn ${filter === 'tools' ? 'active' : ''}`} 
              onClick={() => setFilter('tools')}
            >
              Tools
            </button>
            <button 
              className={`filter-btn ${filter === 'library' ? 'active' : ''}`} 
              onClick={() => setFilter('library')}
            >
              Libraries
            </button>
          </div>
        </div>
      </section>

      <section className="projects-grid section">
        <div className="container">
          {loading ? (
            <div className="loading">
              <div className="loader"></div>
              <p>loading projects...</p>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="projects">
              {filteredProjects.map(project => (
                <div className="project-card" key={project.id}>
                  <div className={`project-image ${!project.image ? 'placeholder' : ''}`} 
                       style={project.image ? { backgroundImage: `url(${project.image})` } : {}}>
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View on GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View live demo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="2" y1="12" x2="22" y2="12"></line>
                              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span className="tech-tag" key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <p>no projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="github-cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="gradient-text">see more on GitHub</h2>
            <p>check out my GitHub profile for more projects and code samples.</p>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              view GitHub profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage; 