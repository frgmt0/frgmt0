import React, { useState, useCallback } from 'react';
import Fuse from 'fuse.js';

const SearchIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SearchBar = ({ posts, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const fuse = new Fuse(posts, {
    keys: ['title', 'summary', 'content', 'tags', 'category'],
    threshold: 0.3,
    distance: 100,
    minMatchCharLength: 2
  });

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
    if (value.trim()) {
      const results = fuse.search(value).map(result => result.item);
      onSearchResults(results);
    } else {
      onSearchResults(posts);
    }
  }, [fuse, posts, onSearchResults]);

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;
