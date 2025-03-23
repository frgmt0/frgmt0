import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/globals.css';
import './styles/App.css';

// Create context for blog data
export const BlogContext = createContext();

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [blogCache, setBlogCache] = useState({});

  // Preload blog data when app loads
  useEffect(() => {
    const preloadBlogData = async () => {
      try {
        // Fetch the list of blog posts in the background
        const response = await fetch('/blog/posts.json');
        if (response.ok) {
          const data = await response.json();
          setBlogPosts(data);
          
          // Start preloading the content of the first few blog posts
          data.slice(0, 2).forEach(async (post) => {
            try {
              const contentResponse = await fetch(`/blog/${post.file}`);
              if (contentResponse.ok) {
                const content = await contentResponse.text();
                setBlogCache(prev => ({
                  ...prev,
                  [post.slug]: content
                }));
              }
            } catch (error) {
              console.error(`Error preloading blog post ${post.slug}:`, error);
            }
          });
        }
      } catch (error) {
        console.error('Error preloading blog data:', error);
      } finally {
        setBlogLoading(false);
      }
    };

    preloadBlogData();
  }, []);

  return (
    <BlogContext.Provider value={{ blogPosts, blogLoading, blogCache, setBlogCache }}>
      <Router>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BlogContext.Provider>
  );
}

export default App;
