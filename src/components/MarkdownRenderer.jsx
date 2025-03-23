import React, { useEffect, useRef, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // Import a highlight.js theme

// Using memo to prevent unnecessary re-renders
const MarkdownRenderer = memo(({ content }) => {
  const contentRef = useRef(null);

  // Initialize and apply highlight.js after the content renders
  useEffect(() => {
    if (!contentRef.current) return;
    
    // Use requestIdleCallback or setTimeout to defer highlighting until after render
    const highlightCode = () => {
      const codeBlocks = contentRef.current?.querySelectorAll('pre code');
      if (codeBlocks?.length) {
        codeBlocks.forEach(block => {
          if (!block.classList.contains('hljs')) {
            hljs.highlightElement(block);
          }
        });
      }
    };
    
    if (window.requestIdleCallback) {
      // Use requestIdleCallback for browsers that support it
      window.requestIdleCallback(highlightCode, { timeout: 500 });
    } else {
      // Fallback to setTimeout
      setTimeout(highlightCode, 100);
    }
    
    return () => {
      if (window.requestIdleCallback) {
        window.cancelIdleCallback(highlightCode);
      }
    };
  }, [content]);

  // Custom components for markdown rendering
  const components = {
    // Custom heading renderer to add ids for linking
    h2: ({ node, ...props }) => {
      const id = props.children
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
      return <h2 id={id} {...props} />;
    },
    h3: ({ node, ...props }) => {
      const id = props.children
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
      return <h3 id={id} {...props} />;
    },
    // Custom link renderer to handle internal/external links properly
    a: ({ node, href, children, ...props }) => {
      const isInternalLink = href.startsWith('/') || href.startsWith('#');
      if (isInternalLink) {
        return (
          <a href={href} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
    // Custom code block renderer
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      
      return !inline ? (
          <code className={language ? `language-${language}` : ''} {...props}>
            {children}
          </code>
      ) : (
        <code className="inline-code" {...props}>
          {children}
        </code>
      );
    },
    // Custom image renderer to add responsive styling and lazy loading
    img: ({ node, src, alt, ...props }) => {
      return (
        <img 
          src={src} 
          alt={alt || ''} 
          className="responsive-image" 
          loading="lazy" 
          {...props} 
        />
      );
    },
    // Custom table renderer for responsive tables
    table: ({ node, children, ...props }) => {
      return (
        <div className="table-container">
          <table {...props}>{children}</table>
        </div>
      );
    }
  };

  // If no content, return null
  if (!content) return null;

  return (
    <div className="markdown-content" ref={contentRef}>
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { detect: false, ignoreMissing: true }]]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
});

MarkdownRenderer.displayName = 'MarkdownRenderer';

export default MarkdownRenderer; 