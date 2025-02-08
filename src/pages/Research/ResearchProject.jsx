import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import researchProjects from "../../data/researchProjects";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReadingProgress from "../../components/ReadingProgress";
import ShareButtons from "../../components/ShareButtons";
import ChartRenderer from "../../components/ChartRenderer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  SubTitle
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  SubTitle
);

const ResearchProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('ResearchProject mounted, loading post:', id);
    setIsLoading(true);
    
    const foundPost = researchProjects.find((p) => p.id === id);
    if (foundPost) {
      console.log('Found post:', foundPost);
      try {
        const postData = foundPost.getFullData();
        console.log('Post data processed:', postData);
        setPost(postData);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Error processing post data:', error);
        navigate("/");
      }
    } else {
      console.log('Post not found');
      navigate("/");
    }
    
    setIsLoading(false);
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [id, navigate]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!post) {
    console.log('No post data available');
    return null;
  }

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
                
                // Handle chart blocks
                if (!inline && match && match[1] === 'chart') {
                  try {
                    const chartConfig = JSON.parse(String(children));
                    return <ChartRenderer chartConfig={chartConfig} />;
                  } catch (error) {
                    console.error('Failed to parse chart configuration:', error);
                    return <div className="error">Invalid chart configuration</div>;
                  }
                }
                
                // Handle table blocks
                if (!inline && match && match[1] === 'table') {
                  const lines = String(children).trim().split('\n');
                  const tableData = {
                    headers: [],
                    rows: []
                  };

                  lines.forEach(line => {
                    const [type, ...content] = line.split(':').map(s => s.trim());
                    if (type === 'headers') {
                      tableData.headers = content[0].split(',').map(h => h.trim());
                    } else if (type === 'row') {
                      tableData.rows.push(content[0].split(',').map(c => c.trim()));
                    }
                  });

                  return (
                    <div className="table-container">
                      <table className="markdown-table">
                        <thead>
                          <tr>
                            {tableData.headers.map((header, i) => (
                              <th key={i} className="markdown-th">{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.rows.map((row, i) => (
                            <tr key={i} className="markdown-tr">
                              {row.map((cell, j) => (
                                <td key={j} className="markdown-td">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
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
