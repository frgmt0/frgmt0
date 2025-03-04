import { useState } from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const Timeline = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  
  const timelineEvents = [
    {
      id: 1,
      year: '2019',
      title: 'High School Journey Begins',
      description: 'Started academic path focused on technology and computer science.',
      icon: '🎓',
      color: 'var(--neon-blue)'
    },
    {
      id: 2,
      year: '2021',
      title: 'First Certification',
      description: 'Earned IT Specialist: Cybersecurity certification, marking first professional milestone.',
      icon: '🔒',
      color: 'var(--neon-pink)'
    },
    {
      id: 3,
      year: '2022',
      title: 'Certification Milestones',
      description: 'Achieved Adobe Certified Professional (October) and IC3 Master certification (August).',
      icon: '🏆',
      color: 'var(--neon-teal)'
    },
    {
      id: 4,
      year: '2022-2023',
      title: 'IT Department Internship',
      description: 'Corona-Norco Unified School District - Proposed curriculum for cybersecurity education.',
      icon: '💼',
      color: 'var(--neon-purple)'
    },
    {
      id: 5,
      year: '2023',
      title: 'CompTIA A+ Exam',
      description: 'Completed first exam toward CompTIA A+ certification.',
      icon: '📝',
      color: 'var(--neon-blue)'
    },
    {
      id: 6,
      year: '2023',
      title: 'Higher Education Path',
      description: 'Enrolled at Mt. San Antonio College with plans to transfer to 4-year university.',
      icon: '🎓',
      color: 'var(--neon-yellow)'
    },
    {
      id: 7,
      year: '2024',
      title: 'Chess Engine Project',
      description: 'Began development of a Chess Engine in Python, exploring game AI concepts and algorithms.',
      icon: '♟️',
      color: 'var(--neon-teal)'
    },
    {
      id: 8,
      year: '2025',
      title: 'Chess Engine Evolution',
      description: 'Migrated Chess Engine project to Rust for improved performance and learning systems programming.',
      icon: '⚙️',
      color: 'var(--neon-pink)'
    },
    {
      id: 9,
      year: '2025',
      title: 'Leo Voice Assistant',
      description: 'Launched development of "Leo", an open-source smart voice assistant built with TypeScript.',
      icon: '🔊',
      color: 'var(--neon-blue)'
    }
  ];

  return (
    <div className="timeline-section">
      <h2>Journey</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {timelineEvents.map((event, index) => (
          <motion.div 
            key={event.id}
            className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredEvent(event.id)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            <div 
              className="timeline-dot"
              style={{ backgroundColor: event.color }}
            >
              <span className="timeline-icon">{event.icon}</span>
            </div>
            
            <div className="timeline-content">
              <div className="timeline-year" style={{ color: event.color }}>
                {event.year}
              </div>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
              
              <div 
                className="timeline-glow" 
                style={{ 
                  opacity: hoveredEvent === event.id ? 0.2 : 0,
                  boxShadow: `0 0 30px 10px ${event.color}` 
                }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;