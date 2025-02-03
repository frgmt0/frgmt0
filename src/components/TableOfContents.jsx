import React, { useState, useEffect } from 'react';

const TableOfContents = ({ content }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
    
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-20% 0px -80% 0px'
    });

    headings.forEach(heading => {
      if (heading.id) {
        observer.observe(heading);
      }
    });

    return () => headings.forEach(heading => observer.unobserve(heading));
  }, []);

  // Extract headings from markdown content
  const headings = content.match(/^(#{1,3})\s+(.+)$/gm)?.map(heading => {
    const level = heading.match(/^(#{1,3})/)[0].length;
    const title = heading.replace(/^#{1,3}\s+/, '');
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return { level, title, id };
  }) || [];

  if (headings.length === 0) return null;

  return (
    <nav className="table-of-contents">
      <div className="toc-content">
        <h3>Contents</h3>
        {headings.map(({ level, title, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`toc-item level-${level} ${activeId === id ? 'active' : ''}`}
          >
            <span className="toc-bullet"></span>
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default TableOfContents;
