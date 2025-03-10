import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component to dynamically update metadata for the current page
 * 
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.image - Image URL for social sharing
 * @param {string} props.url - Canonical URL for the current page
 * @param {string} props.type - Content type (article, website, etc.)
 * @param {Array} props.tags - Content tags/keywords
 * @param {Object} props.author - Author information
 */
const Metadata = ({ 
  title = 'frgmt blog',
  description = 'Thoughts on technology, programming, and more',
  image = '/logo.svg', // Default image path
  url = null,
  type = 'website',
  tags = [],
  author = null
}) => {
  const location = useLocation();
  
  // If URL is not provided, construct it from the current location
  const currentUrl = url || `${window.location.origin}${location.pathname}`;
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', tags.join(', '));
    
    // Open Graph meta tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image.startsWith('http') ? image : `${window.location.origin}${image}`);
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:type', type);
    
    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image.startsWith('http') ? image : `${window.location.origin}${image}`);
    
    // Article specific meta tags
    if (type === 'article' && author) {
      updateMetaTag('article:author', author.name);
      updateMetaTag('og:article:author', author.name);
      if (author.url) {
        updateMetaTag('article:author:url', author.url);
      }
    }
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);
    
    // Clean up function
    return () => {
      // We don't remove the tags as they might be needed by other pages
      // Just leave them with the last values
    };
  }, [title, description, image, currentUrl, type, tags, author]);
  
  // This component doesn't render anything visible
  return null;
};

export default Metadata; 