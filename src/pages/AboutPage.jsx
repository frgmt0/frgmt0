import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    // Check if the URL has the contact hash
    if (location.hash === '#contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1 className="page-title fade-in">
            <span className="gradient-text">about me</span>
          </h1>
          <div className="about-intro">
            <div className="about-image-container">
              <div className="about-image">
                <div className="blob"></div>
                <div className="avatar">
                  <div className="avatar-placeholder">
                  <div className="avatar">
                  <div className="avatar-image-container avatar-placeholder" style={{ position: 'relative', width: '150px', height: '150px', margin: '0 auto' }}>
                    <img 
                      src="/avatar.jpg" 
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
            </div>
            <div className="about-text">
              <h2>hey there, i'm jason!</h2>
              <p>
                i'm a 19-year-old passionate developer from los angeles with a love for building beautiful, 
                functional websites and applications. my journey in tech has been driven by 
                curiosity and a desire to create meaningful digital experiences.
              </p>
              <p>
                when i'm not coding, you'll find me spending time with animals, exploring new technologies,
                and continuously learning new skills to expand my expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-experience section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">skills & experience</span>
          </h2>
          <div className="skills-grid">
            <div className="skill-column">
              <h3>technical skills</h3>
              <ul className="skill-list">
                <li>
                  <span className="skill-name">python</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">bash/zsh</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">linux os/navigation</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">c</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">laptop/desktop repair</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">javascript/typescript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '65%' }}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">rust</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '60%' }}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">c++</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '45%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="skill-column">
              <h3>experience timeline</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>IT department intern</h4>
                    <p className="timeline-date">2023</p>
                    <p>Corona-Norco Unified School District (6 months)</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>college student</h4>
                    <p className="timeline-date">2023 - present</p>
                    <p>studying computer science at mt. san antonio college</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">education</span>
          </h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
              <div className="education-content">
                <h3>computer science</h3>
                <p className="education-place">mt. san antonio college</p>
                <p className="education-date">2023 - present (expected transfer 2025)</p>
                <p>currently pursuing coursework with expected transfer to a 4-year university in june 2025.</p>
              </div>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
              <div className="education-content">
                <h3>high school diploma with computer science focus</h3>
                <p className="education-place">estem academy</p>
                <p className="education-date">graduated 2023</p>
                <p>specialized in computer science with coursework in programming and software development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hobbies section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">hobbies & interests</span>
          </h2>
          <div className="hobbies-content">
            <div className="hobbies-text">
              <p>
                i love animals and currently volunteer at Riverside County Animal Services Shelter where i get to play with 
                the cute puppies. this hands-on experience with animals brings me joy and fulfillment.
              </p>
              <p>
                when it comes to entertainment, i'm a big fan of marvel movies and tv shows, and i also enjoy rom-coms 
                and comedy films. i occasionally game as well, with balatro being my current favorite.
              </p>
              <p>
                beyond tech, i have a creative side and enjoy making music and sketches for myself and close friends. 
                i love tinkering with both tech and non-tech projects, always exploring and creating something new.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="current-work section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">current work</span>
          </h2>
          <div className="current-work-content">
            <p>
              i'm currently working on a variety of interesting projects that showcase my technical skills and 
              creative problem-solving abilities. each project represents a different challenge and allows me 
              to explore various programming languages and concepts.
            </p>
            <p>
              i enjoy creating tools that help developers work more efficiently and diving into complex domains 
              like game development and artificial intelligence.
            </p>
            <div className="current-projects">
              <h3>current projects:</h3>
              <ul>
                <li>
                  <strong>pocket</strong> - a snippet saver on steroids that offers cool extensions to boost 
                  developer productivity. check out more details in the projects page.
                </li>
                <li>
                  <strong>pearl</strong> - a custom-built chess engine based on classical heuristics with future 
                  plans to integrate neural networks for improved gameplay and decision-making.
                </li>
                <li>
                  <strong>text adventure game</strong> - an upcoming project currently in the ideation phase. 
                  i'm exploring narrative structures and game mechanics to create an engaging text-based experience.
                </li>
                <li>
                  <strong>personal portfolio website</strong> - you're looking at it! always iterating
                  and improving my online presence.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef} className="contact section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">get in touch</span>
          </h2>
          <div className="contact-content contact-centered">
            <div className="contact-info">
              <p>
                i'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                feel free to reach out through any of the following channels:
              </p>
              <ul className="contact-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>jason.awz2005@gmail.com</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Los Angeles, California</span>
                </li>
                <li>
                <svg width="24" height="24" viewBox="0 0 568 501" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M123.121 33.6637C188.241 82.5526 258.281 181.681 284 234.873C309.719 181.681 379.759 82.5526 444.879 33.6637C491.866 -1.61183 568 -28.9064 568 57.9464C568 75.2916 558.055 203.659 552.222 224.501C531.947 296.954 458.067 315.434 392.347 304.249C507.222 323.8 536.444 388.56 473.333 453.32C353.473 576.312 301.061 422.461 287.631 383.039C285.169 375.812 284.017 372.431 284 375.306C283.983 372.431 282.831 375.812 280.369 383.039C266.939 422.461 214.527 576.312 94.6667 453.32C31.5556 388.56 60.7778 323.8 175.653 304.249C109.933 315.434 36.0535 296.954 15.7778 224.501C9.94525 203.659 0 75.2916 0 57.9464C0 -28.9064 76.1345 -1.61183 123.121 33.6637Z"/>
</svg>
                  <span>@frgmt.xyz on Bluesky</span>
                </li>
              </ul>
              <div className="social-links contact-social">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://bsky.app/profile/frgmt.xyz" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
                <svg width="24" height="24" viewBox="0 0 568 501" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M123.121 33.6637C188.241 82.5526 258.281 181.681 284 234.873C309.719 181.681 379.759 82.5526 444.879 33.6637C491.866 -1.61183 568 -28.9064 568 57.9464C568 75.2916 558.055 203.659 552.222 224.501C531.947 296.954 458.067 315.434 392.347 304.249C507.222 323.8 536.444 388.56 473.333 453.32C353.473 576.312 301.061 422.461 287.631 383.039C285.169 375.812 284.017 372.431 284 375.306C283.983 372.431 282.831 375.812 280.369 383.039C266.939 422.461 214.527 576.312 94.6667 453.32C31.5556 388.56 60.7778 323.8 175.653 304.249C109.933 315.434 36.0535 296.954 15.7778 224.501C9.94525 203.659 0 75.2916 0 57.9464C0 -28.9064 76.1345 -1.61183 123.121 33.6637Z"/>
</svg>
                </a>
                <a href="mailto:jason.awz2005@gmail.com" aria-label="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 