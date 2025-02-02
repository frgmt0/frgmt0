const authors = {
  frgmt0: {
    name: "frgmt0",
    avatar: "/images/avatar.jpg",
    bio: "Always hungry, eternally tired, I just wanna nap",
    social: {
      github: "https://github.com/frgmt0",
      bluesky: "https://bsky.app/profile/frgmt.xyz",
    },
  },
  // Add more authors here as needed
};

export const getAuthor = (authorId) => {
  const author = authors[authorId];
  if (!author) {
    throw new Error(`Author with ID "${authorId}" not found`);
  }
  return author;
};

export default authors;
