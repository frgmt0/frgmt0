import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import './DataGrid.css';

const DataGrid = () => {
  const [tiles, setTiles] = useState([]);
  const [hoveredTile, setHoveredTile] = useState(null);
  const [counters, setCounters] = useState({});
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const dataTiles = [
    { id: 1, title: 'Projects', count: 12, suffix: '+', color: 'var(--neon-pink)' },
    { id: 2, title: 'Languages', count: 4, suffix: '', color: 'var(--neon-blue)' },
    { id: 3, title: 'Certifications', count: 5, suffix: '', color: 'var(--neon-teal)' },
    { id: 4, title: 'Repositories', count: 20, suffix: '+', color: 'var(--neon-purple)' },
    { id: 5, title: 'Coffee', count: 999, suffix: '+', color: 'var(--neon-yellow)' },
    { id: 6, title: 'Experience', count: 3, suffix: ' yrs', color: 'var(--neon-blue)' },
  ];
  
  // Initialize counters at 0
  useEffect(() => {
    setTiles(dataTiles);
    const initialCounters = {};
    dataTiles.forEach(tile => {
      initialCounters[tile.id] = 0;
    });
    setCounters(initialCounters);
  }, []);
  
  // Start counter animation when in view
  useEffect(() => {
    if (isInView) {
      dataTiles.forEach(tile => {
        // Special case for "infinity" (coffee)
        if (tile.id === 5) {
          const interval = setInterval(() => {
            setCounters(prev => {
              const newValue = prev[tile.id] + Math.ceil(999 / 30);
              if (newValue >= 999) {
                clearInterval(interval);
                return { ...prev, [tile.id]: 999 };
              }
              return { ...prev, [tile.id]: newValue };
            });
          }, 50);
          return;
        }
        
        // Normal counting animation
        const duration = 1500; // ms
        const steps = 20;
        const increment = Math.ceil(tile.count / steps);
        const stepTime = duration / steps;
        
        const interval = setInterval(() => {
          setCounters(prev => {
            const newValue = prev[tile.id] + increment;
            if (newValue >= tile.count) {
              clearInterval(interval);
              return { ...prev, [tile.id]: tile.count };
            }
            return { ...prev, [tile.id]: newValue };
          });
        }, stepTime);
      });
    }
  }, [isInView]);
  
  return (
    <div className="data-grid-container" ref={containerRef}>
      <h2>Performance Matrix</h2>
      <div className="data-grid">
        {tiles.map((tile) => (
          <motion.div
            key={tile.id}
            className="data-tile"
            style={{ 
              '--tile-color': tile.color,
              borderColor: hoveredTile === tile.id ? tile.color : 'rgba(5, 217, 232, 0.3)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: tile.id * 0.1,
              type: 'spring',
              stiffness: 100 
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 0 20px ${tile.color}`,
              transition: { duration: 0.2 }
            }}
            onHoverStart={() => setHoveredTile(tile.id)}
            onHoverEnd={() => setHoveredTile(null)}
          >
            <div className="data-header">
              <div className="data-title">{tile.title}</div>
              <div className="data-icon">
                <div className="scanner-line"></div>
              </div>
            </div>
            <div className="data-count">
              {tile.id === 5 && counters[tile.id] >= 999 ? '∞' : counters[tile.id]}{tile.suffix}
            </div>
            <div className="data-noise"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DataGrid;