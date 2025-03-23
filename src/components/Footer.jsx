import React, { useState, useCallback, useMemo } from 'react';
import '../styles/Footer.css';
import CookieRain from './CookieRain';

const Footer = () => {
  const year = new Date().getFullYear();
  const [cookieCount, setCookieCount] = useState(0);
  const [shouldAddCookies, setShouldAddCookies] = useState(false);
  
  // Use useCallback to prevent function recreation on every render
  const handleCookieClick = useCallback(() => {
    // Batch state updates for better performance
    setCookieCount(prevCount => {
      const newCount = prevCount + 1;
      // Only trigger cookie rain if we're not already adding cookies
      // This prevents rapid clicks from causing too many state updates
      setShouldAddCookies(true);
      
      // Schedule reset of the flag
      setTimeout(() => {
        setShouldAddCookies(false);
      }, 100);
      
      return newCount;
    });
  }, []);
  
  // Memoize the cookie message to prevent recalculation on every render
  const cookieMessage = useMemo(() => {
    if (cookieCount === 0) return "have a cookie";
    if (cookieCount === 1) return "have another cookie";
    if (cookieCount === 2) return "okay, one more cookie";
    if (cookieCount === 3) return "that's a lot of cookies...";
    if (cookieCount === 4) return "are you still hungry?";
    if (cookieCount >= 5 && cookieCount < 10) return `you've had ${cookieCount} cookies!`;
    return "🍪 cookie monster 🍪";
  }, [cookieCount]);
  
  // Memoize this calculation
  const isCookieMonster = useMemo(() => cookieCount >= 10, [cookieCount]);
  
  return (
    <footer className="footer">
      <CookieRain 
        addCookies={shouldAddCookies}
        cookieCount={cookieCount}
        isCookieMonster={isCookieMonster}
      />
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="gradient-text">jason</h3>
            <p>LA-based developer who loves animals and building cool things.</p>
          </div>
          
          <div className="footer-section">
            <h4>Links</h4>
            <ul className="footer-links">
              <li><a href="/">home</a></li>
              <li><a href="/about">about</a></li>
              <li><a href="/projects">projects</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/frgmt0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
        
        <div className="footer-bottom">
          <p>&copy; {year} frgmt. All Rights Reserved.</p>
          <p className="cookie-text" onClick={handleCookieClick}>
            {cookieMessage}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer); 