import React, { useEffect } from "react";
import allBlogPosts from "../data/researchProjects";

const Preloader = () => {
  useEffect(() => {
    // Preload all blog post cover images
    allBlogPosts.forEach((post) => {
      const img = new Image();
      img.src = post.getPreviewData().coverImage;
    });
  }, []);

  return null;
};

export default Preloader;
