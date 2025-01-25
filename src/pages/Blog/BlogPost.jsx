import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFont } from '../../context/FontContext';

const BlogPost = () => {
  const { id } = useParams();
  const { fontStyle } = useFont();
  const headerFont = fontStyle === 'EasyRead' ? 'TrashHand' : 'main';

  useEffect(() => {
    // Redirect to the corresponding post on blog subdomain
    window.location.href = `https://blog.frgmt.xyz/${id}`;
  }, [id]);

  return (
    <div className="min-h-screen bg-background-color pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 
            className="font-main text-4xl md:text-5xl mb-8 tracking-wider text-gradient"
            style={{ fontFamily: headerFont }}
          >
            Blog Post
          </h1>
          <p className="text-gray-300 text-lg">
            Redirecting to blog.frgmt.xyz...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
