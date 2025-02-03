import React from 'react';
import { Link } from 'react-router-dom';

const TagCloud = ({ posts }) => {
  const tagCount = posts.reduce((acc, post) => {
    post.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  // Calculate font sizes based on count
  const maxCount = Math.max(...Object.values(tagCount));
  const minFontSize = 0.8;
  const maxFontSize = 1.6;

  const calculateFontSize = (count) => {
    return minFontSize + (count / maxCount) * (maxFontSize - minFontSize);
  };

  return (
    <div className="tag-cloud">
      <h2>Popular Topics</h2>
      <div className="tag-cloud-content">
        {Object.entries(tagCount)
          .sort((a, b) => b[1] - a[1])
          .map(([tag, count]) => (
            <span
              key={tag}
              className="tag-cloud-item"
              style={{ fontSize: `${calculateFontSize(count)}rem` }}
              title={`${count} post${count === 1 ? '' : 's'}`}
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default TagCloud;
