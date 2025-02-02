import React from 'react';
import { Link } from 'react-router-dom';
import allBlogPosts from '../../data/blogposts';

const Blog = () => {
  return (
    <div className="page-background">
      <div className="container">
        <section className="visible">
          <h1>Blog</h1>

          <div className="blog-grid">
            {allBlogPosts.map((post) => {
              const postData = post.getPreviewData();
              return (
                <div key={postData.id} className="blog-card">
                  <img src={postData.coverImage} alt={postData.title} />
                  <div className="blog-card-content">
                    <div className="blog-card-date">{postData.formattedPublishDate}</div>
                    <h3>{postData.title}</h3>
                    <p className="blog-card-summary">{postData.summary}</p>
                    <Link to={`/${postData.id}`} className="cta-button secondary">
                      Read →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

const FeaturedPostCard = ({ post, index, headerFont, isHovered, onHover }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="relative rounded-xl overflow-hidden shadow-lg bg-black/30 hover:bg-black/40 transition-all duration-300"
    onMouseEnter={() => onHover(post.id)}
    onMouseLeave={() => onHover(null)}
  >
    <Link to={`/${post.id}`} className="block h-full">
      <div className="aspect-video relative">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-borela text-primary-color text-sm">{post.category}</span>
          <span className="text-gray-400">•</span>
          <span className="font-borela text-gray-400 text-sm">{post.readTime}</span>
        </div>
        <h3 
          className="font-borela text-2xl mb-3 tracking-wide"
          style={{ fontFamily: headerFont }}
        >
          {post.title}
        </h3>
        <p className="font-borela text-gray-300 mb-4">{post.summary}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 rounded-full bg-primary-color/20 text-primary-color text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-400 font-borela">
          {post.publishDate}
        </div>
      </div>
    </Link>
  </motion.div>
);

const BlogPostCard = ({ post, index, headerFont, isHovered, onHover }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="relative rounded-xl overflow-hidden shadow-lg bg-black/30 hover:bg-black/40 transition-all duration-300"
    onMouseEnter={() => onHover(post.id)}
    onMouseLeave={() => onHover(null)}
  >
    <Link to={`/${post.id}`} className="block">
      <div className="aspect-video relative">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-primary-color text-sm">{post.category}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-400 text-sm">{post.readTime}</span>
        </div>
        <h3 
          className="font-borela text-2xl mb-2 tracking-wide"
          style={{ fontFamily: headerFont }}
        >
          {post.title}
        </h3>
        <p className="font-borela text-gray-300 text-sm mb-3 line-clamp-2">{post.summary}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-0.5 rounded-full bg-primary-color/20 text-primary-color text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-400">
          {post.publishDate}
        </div>
      </div>
    </Link>
  </motion.div>
);

export default Blog;
