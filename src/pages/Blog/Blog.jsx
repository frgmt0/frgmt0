import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import allBlogPosts from '../../data/blogposts';

const CATEGORIES = ['All', 'Technology', 'News', 'Personal'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? allBlogPosts 
    : allBlogPosts.filter(post => post.getPreviewData().category === selectedCategory);

  return (
    <div className="page-background">
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Blog</h1>
        
        <div className="category-filter">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post) => {
            const postData = post.getPreviewData();
            return (
              <div key={postData.id} className="blog-card">
                <img src={postData.coverImage} alt={postData.title} />
                <div className="blog-card-content">
                  <div className="blog-card-date">{postData.formattedPublishDate}</div>
                  <h3>{postData.title}</h3>
                  <p className="blog-card-summary">{postData.summary}</p>
                  <Link to={`/${postData.id}`} className="cta-button secondary" style={{ alignSelf: 'flex-start' }}>
                    Read →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default Blog;
