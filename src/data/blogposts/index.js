import selfcare from "./02022025-personal";
import tariffs from "./02022025-news";
import newAIRelease from "./02022025-tech";
// import webPerformance from './webPerformance';

// Add all blog posts to this array
// The order here determines the display order in the blog list
const allBlogPosts = [
  selfcare,
  tariffs,
  newAIRelease,
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
