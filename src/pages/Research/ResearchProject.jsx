import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import researchProjects from "../../data/researchProjects";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReadingProgress from "../../components/ReadingProgress";
import ShareButtons from "../../components/ShareButtons";
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
                
                // Handle chart blocks
                if (!inline && match && match[1] === 'chart') {
                  const lines = String(children).trim().split('\n');
                  const chartData = {
                    type: '',
                    title: '',
                    data: {
                      labels: [],
                      datasets: []
                    },
                    options: {
                      scales: {}
                    }
                  };

                  let currentDataset = null;
                  
                  lines.forEach(line => {
                    const [key, ...value] = line.split(':').map(s => s.trim());
                    const val = value.join(':').trim();
                    
                    switch(key) {
                      case 'type':
                        chartData.type = val;
                        break;
                      case 'title':
                        chartData.options.plugins = {
                          title: {
                            display: true,
                            text: val
                          }
                        };
                        break;
                      case 'xAxis':
                        chartData.options.scales.x = {
                          title: {
                            display: true,
                            text: val
                          }
                        };
                        break;
                      case 'yAxis':
                        const [label, unit] = val.split('(');
                        chartData.options.scales.y = {
                          title: {
                            display: true,
                            text: val
                          },
                          ticks: {
                            callback: function(value) {
                              if (unit) {
                                const cleanUnit = unit.replace(')', '').trim();
                                return value.toLocaleString() + ' ' + cleanUnit;
                              }
                              return value.toLocaleString();
                            }
                          }
                        };
                        break;
                      case 'categories':
                        chartData.data.labels = JSON.parse(val.replace(/\[|\]/g, '')).split(',').map(s => s.trim());
                        break;
                      case 'data':
                        if (chartData.type === 'bar') {
                          const dataPoints = [];
                          const labels = [];
                          lines.slice(lines.indexOf(line) + 1).forEach(dataLine => {
                            if (dataLine.trim().startsWith('-')) {
                              const [label, value] = dataLine.replace('-', '').split(':').map(s => s.trim());
                              labels.push(label.replace('label:', '').trim());
                              dataPoints.push(parseFloat(value.replace('value:', '').trim()));
                            }
                          });
                          chartData.data.labels = labels;
                          chartData.data.datasets = [{
                            data: dataPoints,
                            backgroundColor: 'rgba(121, 104, 121, 0.5)',
                            borderColor: 'rgba(121, 104, 121, 1)',
                            borderWidth: 1,
                            label: 'Data Volume'
                          }];
                          
                          // Add any notes as a subtitle
                          const notes = lines.find(l => l.startsWith('notes:'));
                          if (notes) {
                            chartData.options.plugins.subtitle = {
                              display: true,
                              text: notes.split(':')[1].trim(),
                              padding: {
                                bottom: 10
                              }
                            };
                          }
                        }
                        break;
                      case 'datasets':
                        if (chartData.type === 'radar') {
                          lines.slice(lines.indexOf(line) + 1).forEach(dataLine => {
                            if (dataLine.trim().startsWith('-')) {
                              const [label, values] = dataLine.replace('-', '').split(':').map(s => s.trim());
                              chartData.data.datasets.push({
                                label: label.replace('label:', '').trim(),
                                data: JSON.parse(values.replace('values:', '').trim()),
                                fill: true,
                                backgroundColor: `rgba(121, 104, 121, ${0.2 + chartData.data.datasets.length * 0.2})`,
                                borderColor: 'rgba(121, 104, 121, 1)',
                                pointBackgroundColor: 'rgba(121, 104, 121, 1)',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgba(121, 104, 121, 1)'
                              });
                            }
                          });
                        }
                        break;
                    }
                  });

                  return (
                    <div style={{ margin: '2rem 0', padding: '1rem', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '8px' }}>
                      <Chart type={chartData.type} data={chartData.data} options={chartData.options} />
                    </div>
                  );
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
