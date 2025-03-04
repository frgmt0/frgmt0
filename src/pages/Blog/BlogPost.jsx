import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition/PageTransition";

const BlogPost = () => {
  const { id } = useParams();

  useEffect(() => {
    // Redirect to the new blog URL with the same post ID after delay
    const timer = setTimeout(() => {
      window.location.href = `https://blog.frgmt.xyz/${id}`;
    }, 1000); // Delay redirect to show animation
    
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <PageTransition>
      <div className="page-container">
        <section className="content-section">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Redirecting to Blog Post...
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            If you are not redirected automatically, please click{" "}
            <a href={`https://blog.frgmt.xyz/${id}`} className="neon-text">here</a>.
          </motion.p>
          <motion.div 
            className="loading-animation"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
            style={{
              height: "2px",
              background: "linear-gradient(90deg, var(--neon-blue), var(--neon-purple))",
              marginTop: "2rem"
            }}
          />
        </section>
      </div>
    </PageTransition>
  );
};

export default BlogPost;
