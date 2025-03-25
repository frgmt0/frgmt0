import React, { useState, useEffect, useContext, useRef, useCallback } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { BlogContext } from '../App';
import '../styles/BlogPage.css';

const BlogPage = () => {
  const [currentPost, setCurrentPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get preloaded blog data from context
  const { blogPosts, blogLoading, blogCache, setBlogCache } = useContext(BlogContext);

  const blogCardsRef = useRef([]);
  
  // Setup intersection observer for lazy loading blog cards
  const observerCallback = useCallback(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // If there's an image that needs to be loaded
        const imgElement = entry.target.querySelector('.blog-image');
        if (imgElement && imgElement.dataset.src) {
          imgElement.style.backgroundImage = `url(${imgElement.dataset.src})`;
          delete imgElement.dataset.src;
        }
      }
    });
  }, []);
  
  // Initialize observer
  useEffect(() => {
    if (!slug && blogPosts.length > 0) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
      };
      
      const observer = new IntersectionObserver(observerCallback, options);
      
      // Set a small timeout to ensure DOM is fully rendered
      setTimeout(() => {
        blogCardsRef.current.forEach(card => {
          if (card) {
            observer.observe(card);
            // Make cards visible immediately in case observer fails to trigger
            card.classList.add('visible');
          }
        });
      }, 100);
      
      return () => {
        blogCardsRef.current.forEach(card => {
          if (card) observer.unobserve(card);
        });
      };
    }
  }, [slug, blogPosts, observerCallback]);

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        setLoading(true);
        
        if (blogLoading) {
          // Still loading from global state, wait a bit
          return;
        }
        
        // If on a single post page, fetch or use cached post content
        if (slug) {
          const post = blogPosts.find(p => p.slug === slug);
          
          if (post) {
            // Check if we already have this post in cache
            if (blogCache[slug]) {
              setCurrentPost({ ...post, content: blogCache[slug] });
              setLoading(false);
              return;
            }
            
            // Not in cache, fetch it
            const contentResponse = await fetch(`/blog/${post.file}`);
            if (!contentResponse.ok) {
              throw new Error('Failed to fetch post content');
            }
            const content = await contentResponse.text();
            
            // Update cache
            setBlogCache(prev => ({
              ...prev,
              [slug]: content
            }));
            
            setCurrentPost({ ...post, content });
          } else {
            // Post not found, redirect to blog index
            navigate('/blog');
          }
        } else {
          // Reset current post when viewing the index
          setCurrentPost(null);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setLoading(false);
      }
    };

    loadBlogData();
  }, [slug, navigate, blogPosts, blogLoading, blogCache, setBlogCache]);

  // Begin preloading other posts when a user visits the blog index
  useEffect(() => {
    if (!slug && !blogLoading && blogPosts.length > 0) {
      // Preload all posts that aren't already cached
      blogPosts.forEach(async (post) => {
        if (!blogCache[post.slug]) {
          try {
            // Low priority fetch - we're just preloading for future navigation
            const contentResponse = await fetch(`/blog/${post.file}`);
            if (contentResponse.ok) {
              const content = await contentResponse.text();
              setBlogCache(prev => ({
                ...prev,
                [post.slug]: content
              }));
            }
          } catch (error) {
            // Silently fail for preloading
            console.debug(`Preloading failed for ${post.slug}`);
          }
        }
      });
    }
  }, [slug, blogPosts, blogLoading, blogCache, setBlogCache]);

  // Render a single blog post view
  const renderSinglePost = () => {
    if (!currentPost) return null;

    return (
      <div className="blog-post">
        <div className="blog-cta">
          <Link to="/blog" className="btn back-button" onClick={(e) => {
            e.preventDefault();
            navigate('/blog');
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to all posts
          </Link>
        </div>
        
        <div className="blog-header">
          <h1 className="blog-post-title">{currentPost.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-meta-date">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {new Date(currentPost.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
            {currentPost.tags && (
              <span className="blog-meta-tag">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
                {currentPost.tags.join(', ')}
              </span>
            )}
          </div>
        </div>
        
        <div className="blog-post-content">
          <MarkdownRenderer content={currentPost.content} />
        </div>
      </div>
    );
  };

  // Render a list of blog posts
  const renderPostsList = () => {
    if (blogPosts.length === 0 && !loading && !blogLoading) {
      return (
        <div className="no-posts">
          <p>no blog posts found</p>
          <p>check back soon for new content</p>
        </div>
      );
    }

    // Reset refs array
    blogCardsRef.current = [];

    return (
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div 
            className="blog-card fade-in-card visible" 
            key={post.slug}
            ref={el => blogCardsRef.current[index] = el}
          >
            <div 
              className="blog-image" 
              data-src={post.image}
              style={post.image ? { backgroundImage: `url(${post.image})` } : {}}
            >
            </div>
            <div className="blog-content">
              <h2 className="blog-title">{post.title}</h2>
              <div className="blog-meta">
                <span className="blog-meta-date">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <p className="blog-description">{post.excerpt}</p>
              <div className="blog-cta">
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/blog/${post.slug}`);
                  }}
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="blog-page">
      {slug ? (
        // Single post view
        loading || blogLoading ? (
          <div className="loading">
            <div className="loader"></div>
            <p>loading post...</p>
          </div>
        ) : (
          renderSinglePost()
        )
      ) : (
        // Blog list view
        <>
          <section className="blog-hero">
            <div className="container">
              <h1 className="page-title fade-in">
                <span className="gradient-text">blog</span>
              </h1>
              <p className="section-description slide-in">
                thoughts, tutorials, and stuff i'm learning about
              </p>
            </div>
          </section>
          
          <section className="blog-posts section">
            <div className="container">
              {loading || blogLoading ? (
                <div className="loading">
                  <div className="loader"></div>
                  <p>loading blog posts...</p>
                </div>
              ) : (
                renderPostsList()
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default BlogPage; 