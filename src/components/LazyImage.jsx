import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyImage component for optimized image loading
 * 
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alternative text for the image
 * @param {string} props.className - CSS class for the image
 * @param {Object} props.style - Inline styles for the image
 * @param {number} props.threshold - Intersection observer threshold (0-1)
 * @param {string} props.placeholderSrc - Placeholder image to show while loading
 */
const LazyImage = ({
  src,
  alt,
  className = '',
  style = {},
  threshold = 0.1,
  placeholderSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23cccccc"/%3E%3C/svg%3E',
  ...rest
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Skip if image is already loaded or no ref
    if (imageLoaded || !imgRef.current) return;

    // Disconnect previous observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create a new IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // If image is in viewport, start loading the actual image
        if (entry.isIntersecting) {
          setImageSrc(src);
          // Disconnect the observer after triggering the load
          observerRef.current.disconnect();
        }
      },
      {
        root: null, // Use viewport as root
        rootMargin: '100px', // Start loading when image is 100px from viewport
        threshold, // Trigger when this percentage of the image is visible
      }
    );

    // Start observing the image element
    observerRef.current.observe(imgRef.current);

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, imageLoaded, threshold]);

  // Handle image load event
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Handle image error event
  const handleImageError = () => {
    console.error(`Failed to load image: ${src}`);
    // Keep the placeholder if the actual image fails to load
    if (imageSrc !== placeholderSrc) {
      setImageSrc(placeholderSrc);
    }
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${!imageLoaded ? 'image-loading' : 'image-loaded'}`}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        opacity: imageLoaded ? 1 : 0.5,
        ...style,
      }}
      onLoad={handleImageLoad}
      onError={handleImageError}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
};

export default LazyImage; 