import React, { useEffect } from "react";
import researchProjects from "../data/researchProjects";

const Preloader = () => {
  useEffect(() => {
    // Preload all blog post cover images
    researchProjects.forEach((post) => {
      const img = new Image();
      img.src = post.getPreviewData().coverImage;
    });
  }, []);

  return null;
};

export default Preloader;
