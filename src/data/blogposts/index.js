import post from './02022025';
// import webPerformance from './webPerformance';

// Add all blog posts to this array
// The order here determines the display order in the blog list
const allBlogPosts = [
  post,
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
