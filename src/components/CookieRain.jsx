import React, { useState, useEffect, useRef, memo } from 'react';
import '../styles/CookieRain.css';

// Maximum number of cookies to have on screen at once
const MAX_COOKIES = 150;

// Memoized cookie component for better performance
const Cookie = memo(({ cookie, isCookieMonster }) => (
  <div 
    className={`cookie ${isCookieMonster ? 'cookie-monster' : ''}`}
    style={{
      left: `${cookie.x}%`,
      animationDelay: `${cookie.delay}s`,
      animationDuration: `${cookie.speed}s`,
      transform: `scale(${cookie.size}) rotate(${cookie.rotation}deg)`,
    }}
  >
    🍪
  </div>
));

const CookieRain = ({ addCookies, cookieCount = 0, isCookieMonster = false }) => {
  const [cookies, setCookies] = useState([]);
  const nextCookieId = useRef(0);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  
  // Add new cookies when triggered
  useEffect(() => {
    if (!addCookies) return;
    
    // Create new cookies based on count or mode
    const newCookies = [];
    // If cookie monster mode, add lots of cookies, otherwise just add one
    const numToAdd = isCookieMonster ? 30 + Math.floor(Math.random() * 20) : 1;
    
    for (let i = 0; i < numToAdd; i++) {
      newCookies.push({
        id: nextCookieId.current++,
        x: Math.random() * 100, // random x position
        delay: Math.random() * 0.5, // random start delay
        speed: 3 + Math.random() * 4, // random fall speed
        size: isCookieMonster ? 0.7 + Math.random() * 0.6 : 1,
        rotation: isCookieMonster ? Math.random() * 360 : 0,
        // Each cookie needs to be removed individually
        expirationTime: Date.now() + (isCookieMonster ? 4000 : 3000) + (Math.random() * 500)
      });
    }
    
    // Add new cookies to existing ones, but keep under the max limit
    setCookies(prevCookies => {
      // If we already have too many cookies, only keep the newest ones
      const combinedCookies = [...prevCookies, ...newCookies];
      if (combinedCookies.length > MAX_COOKIES) {
        return combinedCookies.slice(combinedCookies.length - MAX_COOKIES);
      }
      return combinedCookies;
    });
    
  }, [addCookies, isCookieMonster]);
  
  // Use requestAnimationFrame for smoother cleanup
  const animateCleanup = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      // Only clean up every 300ms instead of every frame for better performance
      if (deltaTime > 300) {
        previousTimeRef.current = time;
        const now = Date.now();
        setCookies(prevCookies => 
          prevCookies.filter(cookie => cookie.expirationTime > now)
        );
      }
    } else {
      previousTimeRef.current = time;
    }
    
    requestRef.current = requestAnimationFrame(animateCleanup);
  };
  
  useEffect(() => {
    // Start the animation cleanup loop when we have cookies
    if (cookies.length > 0 && !requestRef.current) {
      requestRef.current = requestAnimationFrame(animateCleanup);
    }
    
    // Clean up the animation frame when component unmounts
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = undefined;
        previousTimeRef.current = undefined;
      }
    };
  }, [cookies.length]);
  
  // Stop the cleanup when there are no more cookies
  useEffect(() => {
    if (cookies.length === 0 && requestRef.current) {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = undefined;
      previousTimeRef.current = undefined;
    }
  }, [cookies.length]);
  
  if (cookies.length === 0) return null;
  
  return (
    <div className="cookie-container">
      {cookies.map(cookie => (
        <Cookie 
          key={cookie.id}
          cookie={cookie}
          isCookieMonster={isCookieMonster}
        />
      ))}
    </div>
  );
};

export default CookieRain; 