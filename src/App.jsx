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
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

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
          const preloadPromises = data.slice(0, 2).map(async (post) => {
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
          
          // Wait for initial preload to complete
          await Promise.all(preloadPromises);
          
          // Mark initial data as loaded
          setInitialDataLoaded(true);
        }
      } catch (error) {
        console.error('Error preloading blog data:', error);
        // Even on error, consider data loaded to not block rendering
        setInitialDataLoaded(true);
      } finally {
        setBlogLoading(false);
      }
    };

    preloadBlogData();
  }, []);

  // If initial data is still loading, show a minimal loading indicator
  if (!initialDataLoaded) {
    return (
      <div className="app initial-loading">
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

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
