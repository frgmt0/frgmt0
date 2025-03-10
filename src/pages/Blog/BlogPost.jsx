import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import allBlogPosts from "../../data/blogposts";
import ReactMarkdown from "react-markdown";
import ReadingProgress from "../../components/ReadingProgress";
import { getRelatedPosts } from "../../utils/postUtils";
import ShareButtons from "../../components/ShareButtons";
import Metadata from "../../components/Metadata";
import LazyImage from "../../components/LazyImage";

// Lazy load the syntax highlighter components
const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter').then(module => ({
  default: module.Prism
})));
const atomDarkStyle = lazy(() => import('react-syntax-highlighter/dist/esm/styles/prism/atom-dark').then(module => ({
  default: module.default
})));

// Loading fallback for code blocks
const CodeBlockLoading = () => (
  <div className="code-block-loading" style={{ 
    background: '#282c34', 
    padding: '1rem', 
    borderRadius: '0.5rem',
    color: '#abb2bf',
    fontFamily: 'monospace',
    minHeight: '50px'
  }}>
    Loading code...
  </div>
);

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isStyleLoaded, setIsStyleLoaded] = useState(false);

  useEffect(() => {
    const foundPost = allBlogPosts.find((p) => p.id === id);
    if (foundPost) {
      setPost(foundPost.getFullData());
      // Reset scroll position and enable smooth scrolling after content loads
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto';
      
      // Preload the syntax highlighter if the post contains code blocks
      if (foundPost.getFullData().content.includes('```')) {
        import('react-syntax-highlighter/dist/esm/styles/prism/atom-dark')
          .then(() => setIsStyleLoaded(true))
          .catch(err => console.error('Failed to preload syntax highlighter:', err));
      }
    } else {
      navigate("/");
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [id, navigate]);

  if (!post) return null;
  
  // Construct the full URL for sharing
  const postUrl = `${window.location.origin}/${post.id}`;

  return (
    <div className="page-background">
      {/* Add metadata for the blog post */}
      <Metadata 
        title={post.title}
        description={post.summary}
        image={post.coverImage}
        url={postUrl}
        type="article"
        tags={post.tags}
        author={post.author ? {
          name: post.author.name,
          url: post.author.url
        } : null}
      />
      
      <ReadingProgress />
      <div className="blog-post">
        <Link to="/" className="cta-button secondary" style={{ marginBottom: '2rem' }}>
          ← Back to Blog
        </Link>

        <article>
          <div className="blog-post-header">
            <LazyImage 
              src={post.coverImage} 
              alt={post.title} 
              style={{ 
                maxWidth: '600px', 
                width: '100%', 
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
              threshold={0.01}
            />
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.formattedPublishDate}</span>
            </div>
          </div>

          <ShareButtons 
            url={window.location.href} 
            title={post.title}
          />
          <div className="blog-post-content">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <Suspense fallback={<CodeBlockLoading />}>
                      <SyntaxHighlighter
                        style={atomDarkStyle}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </Suspense>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                img({ node, ...props }) {
                  return (
                    <LazyImage
                      {...props}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        margin: '1.5rem 0',
                      }}
                    />
                  );
                },
                // Add optimized rendering for other markdown elements
                a({ node, ...props }) {
                  return (
                    <a 
                      {...props} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    />
                  );
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Last Modified Date */}
          {post.formattedLastModified && (
            <div className="last-modified">
              Last updated: {post.formattedLastModified}
            </div>
          )}

          {/* Author Section */}
          <div className="author-section">
            <div className="author-info">
              <div className="author-avatar">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                />
              </div>
              <h3 className="text-xl">{post.author.name}</h3>
            </div>
            {post.author.bio && (
              <p className="author-bio">{post.author.bio}</p>
            )}
            {post.author.social && (
              <div className="author-social">
                {post.author.social.github && (
                  <a 
                    href={post.author.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button secondary"
                  >
                    GitHub
                  </a>
                )}
                {post.author.social.bluesky && (
                  <a 
                    href={post.author.social.bluesky}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button secondary"
                  >
                    Bluesky
                  </a>
                )}
                {post.author.social.linkedin && (
                  <a 
                    href={post.author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button secondary"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Related Posts */}
          {getRelatedPosts(post, allBlogPosts).length > 0 && (
            <div className="related-posts">
              <h2>Related Posts</h2>
              <div className="related-posts-grid">
                {getRelatedPosts(post, allBlogPosts).map((relatedPost) => {
                const postData = relatedPost.getPreviewData();
                return (
                  <Link 
                    key={postData.id} 
                    to={`/${postData.id}`} 
                    className="related-post-card"
                  >
                    <img src={postData.coverImage} alt={postData.title} />
                    <div className="related-post-content">
                      <h3>{postData.title}</h3>
                      <p>{postData.summary}</p>
                    </div>
                  </Link>
                );
                })}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
