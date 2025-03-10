import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import allBlogPosts from '../../data/blogposts';
import SearchBar from '../../components/SearchBar';
import Metadata from '../../components/Metadata';
import LazyImage from '../../components/LazyImage';

const CATEGORIES = ['All', 'Technology', 'News', 'Personal'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayedPosts, setDisplayedPosts] = useState(allBlogPosts);

  const handleSearchResults = (results) => {
    setDisplayedPosts(
      selectedCategory === 'All'
        ? results
        : results.filter(post => post.getPreviewData().category === selectedCategory)
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDisplayedPosts(
      category === 'All'
        ? allBlogPosts
        : allBlogPosts.filter(post => post.getPreviewData().category === category)
    );
  };

  // Get the latest blog post for the description
  const latestPost = allBlogPosts[0]?.getPreviewData();
  const blogDescription = latestPost 
    ? `Latest: ${latestPost.title}. ${latestPost.summary}`
    : 'Thoughts on technology, programming, and more';

  return (
    <div className="page-background">
      {/* Add metadata for the blog homepage */}
      <Metadata 
        title="frgmt blog"
        description={blogDescription}
        url={window.location.origin}
        type="website"
        tags={['blog', 'technology', 'programming', 'news', 'personal']}
      />
      
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Blog</h1>
        
        <SearchBar posts={allBlogPosts} onSearchResults={handleSearchResults} />
        
        <div className="category-filter">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {displayedPosts.map((post) => {
            const postData = post.getPreviewData();
            return (
              <div key={postData.id} className="blog-card">
                <Link to={`/${postData.id}`}>
                  <LazyImage 
                    src={postData.coverImage} 
                    alt={postData.title}
                    threshold={0.01}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }}
                  />
                </Link>
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
