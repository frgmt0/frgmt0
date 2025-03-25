import React, { Suspense, lazy } from 'react';

// Lazy load the markdown component
const ReactMarkdown = lazy(() => import('react-markdown'));

const MarkdownRenderer = ({ content }) => {
  if (!content) return null;

  return (
    <Suspense fallback={<div className="loading">Loading content...</div>}>
      <div className="markdown-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Suspense>
  );
};

export default MarkdownRenderer; 