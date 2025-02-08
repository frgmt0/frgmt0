import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import researchProjects from "../../data/researchProjects";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReadingProgress from "../../components/ReadingProgress";
import ShareButtons from "../../components/ShareButtons";

const ResearchProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = researchProjects.find((p) => p.id === id);
    if (foundPost) {
      setPost(foundPost.getFullData());
      // Reset scroll position and enable smooth scrolling after content loads
      window.scrollTo(0, 0);
      document.body.style.overflow = "auto";
    } else {
      navigate("/");
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [id, navigate]);

  if (!post) return null;

  return (
    <div className="blog-post">
      <ReadingProgress />
      <Link
        to="/"
        className="cta-button secondary"
        style={{ marginBottom: "2rem" }}
      >
        ← Back to Research
      </Link>

      <article>
        <div className="blog-post-header">
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span>{post.formattedPublishDate}</span>
          </div>
        </div>

        <ShareButtons url={window.location.href} title={post.title} />
        <div className="blog-post-content">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                // Handle xml-table blocks
                if (match && match[1] === 'xml-table') {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(String(children), 'text/html');
                  const table = doc.querySelector('table');
                  if (table) {
                    return (
                      <div className="table-container">
                        <table className="markdown-table" dangerouslySetInnerHTML={{ __html: table.innerHTML }} />
                      </div>
                    );
                  }
                }
                // Handle regular code blocks
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button secondary"
                  style={{ padding: "0.25rem 0.5rem", margin: "0 0.25rem" }}
                />
              ),
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
              <img src={post.author.avatar} alt={post.author.name} />
            </div>
            <h3 className="text-xl">{post.author.name}</h3>
          </div>
          {post.author.bio && <p className="author-bio">{post.author.bio}</p>}
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
      </article>
    </div>
  );
};

export default ResearchProject;
