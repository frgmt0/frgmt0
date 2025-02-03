// Calculate similarity score between two posts based on their tags
export const calculateSimilarity = (post1, post2) => {
  const tags1 = new Set(post1.tags);
  const tags2 = new Set(post2.tags);
  
  // Calculate intersection
  const intersection = new Set([...tags1].filter(tag => tags2.has(tag)));
  
  // Calculate union
  const union = new Set([...tags1, ...tags2]);
  
  // Jaccard similarity coefficient
  return intersection.size / union.size;
};

// Get related posts sorted by similarity
export const getRelatedPosts = (currentPost, allPosts, limit = 3) => {
  return allPosts
    .filter(post => post.id !== currentPost.id) // Exclude current post
    .map(post => ({
      post,
      similarity: calculateSimilarity(currentPost, post)
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit)
    .map(({ post }) => post);
};
