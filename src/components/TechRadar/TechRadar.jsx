import { useEffect, useRef } from 'react';
import './TechRadar.css';

const TechRadar = () => {
  const canvasRef = useRef(null);
  
  const technologies = [
    { name: 'Python', level: 0.9, angle: 20, color: 'var(--neon-blue)' },
    { name: 'JavaScript', level: 0.85, angle: 80, color: 'var(--neon-yellow)' },
    { name: 'React', level: 0.8, angle: 130, color: 'var(--neon-teal)' },
    { name: 'Java', level: 0.7, angle: 180, color: 'var(--neon-pink)' },
    { name: 'Rust', level: 0.4, angle: 240, color: 'var(--neon-purple)' },
    { name: 'SQL', level: 0.75, angle: 300, color: 'var(--neon-blue)' },
    { name: 'HTML/CSS', level: 0.8, angle: 340, color: 'var(--neon-pink)' },
  ];
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const center = size / 2;
    const radiusStep = center / 5;
    
    const drawRadar = () => {
      ctx.clearRect(0, 0, size, size);
      
      // Draw radar circles
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(center, center, radiusStep * i, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(5, 217, 232, ${0.1 + (i * 0.05)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw radar sweep
      const time = Date.now() / 3000;
      const sweepAngle = time % (2 * Math.PI);
      
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(
        center + Math.cos(sweepAngle) * center,
        center + Math.sin(sweepAngle) * center
      );
      ctx.strokeStyle = 'rgba(5, 217, 232, 0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Create glow for sweep
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(
        center + Math.cos(sweepAngle) * center,
        center + Math.sin(sweepAngle) * center
      );
      ctx.strokeStyle = 'rgba(5, 217, 232, 0.2)';
      ctx.lineWidth = 6;
      ctx.stroke();
      
      // Draw blips
      technologies.forEach(tech => {
        const radians = (tech.angle * Math.PI) / 180;
        const x = center + Math.cos(radians) * (center * tech.level);
        const y = center + Math.sin(radians) * (center * tech.level);
        
        // Check if blip is within sweep
        const angleDiff = Math.abs((radians - sweepAngle) % (2 * Math.PI));
        const isHighlighted = angleDiff < 0.3 || angleDiff > (2 * Math.PI - 0.3);
        
        // Draw blip
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = isHighlighted ? tech.color : 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
        
        if (isHighlighted) {
          // Add glow
          ctx.beginPath();
          ctx.arc(x, y, 12, 0, 2 * Math.PI);
          ctx.fillStyle = tech.color.replace(')', ', 0.2)').replace('rgb', 'rgba');
          ctx.fill();
          
          // Add tech name
          ctx.font = '12px exo';
          ctx.fillStyle = tech.color;
          ctx.textAlign = 'center';
          ctx.fillText(tech.name, x, y - 15);
        }
      });
      
      requestAnimationFrame(drawRadar);
    };
    
    drawRadar();
    
    return () => {
      // Cleanup
    };
  }, []);
  
  return (
    <div className="tech-radar-container">
      <h2>Tech Radar</h2>
      <div className="radar-wrapper">
        <canvas ref={canvasRef} width="300" height="300" className="tech-radar"></canvas>
        <div className="radar-labels">
          <span className="radar-label" style={{ top: '10%', left: '50%' }}>Expert</span>
          <span className="radar-label" style={{ top: '25%', left: '50%' }}>Proficient</span>
          <span className="radar-label" style={{ top: '45%', left: '50%' }}>Intermediate</span>
          <span className="radar-label" style={{ top: '65%', left: '50%' }}>Beginner</span>
        </div>
      </div>
    </div>
  );
};

export default TechRadar;