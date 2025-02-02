import frgmtAi from "./frgmtAi";
import prismBlogPost from "./prism";
import frm from "./frm";
import what from "./what";
import experiments from "./experiments";
import post from "./01072025";
import lum from "./lum";
// import webPerformance from './webPerformance';

// Add all blog posts to this array
// The order here determines the display order in the blog list
const allBlogPosts = [
  lum,
  post,
  experiments,
  what,
  frm,
  prismBlogPost,
  frgmtAi,
  // webPerformance,
  // Add new blog posts here
].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

// Validate all blog posts
allBlogPosts.forEach((post) => {
  try {
    post.validate();
  } catch (error) {
    console.error(`Validation error in blog post ${post.id}:`, error.message);
  }
});

export default allBlogPosts;
