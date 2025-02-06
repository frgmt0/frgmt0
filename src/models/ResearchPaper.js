import { getAuthor } from '../data/authors';

class ResearchPaper {
  constructor({
    id,
    title,
    content,
    summary,
    tags = [],
    publishDate,
    lastModified,
    featured = false,
    paperUrl,
    githubUrl,
    authorId,
    type = 'research' // 'research' or 'experiment'
  }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.summary = summary;
    this.tags = tags;
    this.publishDate = publishDate; // Expecting 'YYYY-MM-DD'
    this.lastModified = lastModified; // Optional, same format
    this.featured = featured;
    this.paperUrl = paperUrl; // URL to the research paper PDF or external link
    this.githubUrl = githubUrl; // URL to the GitHub repository
    this.authorId = authorId;
    this.author = authorId ? getAuthor(authorId) : null;
    this.type = type; // 'research' or 'experiment'
  }

  // Get research paper preview data
  truncateSummary(length = 140) {
    if (!this.summary) return '';
    if (this.summary.length <= length) return this.summary;
    return this.summary.slice(0, length).trim() + '...';
  }

  getPreviewData() {
    return {
      id: this.id,
      title: this.title,
      summary: this.truncateSummary(),
      tags: this.tags,
      publishDate: this.getFormattedDate(this.publishDate),
      paperUrl: this.paperUrl,
      githubUrl: this.githubUrl,
      featured: this.featured,
      author: this.author ? {
        name: this.author.name,
        avatar: this.author.avatar
      } : null
    };
  }

  // Get full research paper data
  getFullData() {
    return {
      ...this,
      formattedPublishDate: this.getFormattedDate(this.publishDate),
      formattedLastModified: this.lastModified ? this.getFormattedDate(this.lastModified) : null
    };
  }

  // Helper method to format date as Pacific Time
  getFormattedDate(dateString) {
    if (!dateString) return '';

    const [year, month, day] = dateString.split('-');
    const pacificDate = new Date(
      Date.UTC(year, month - 1, day, 0, 0, 0)
    );

    return pacificDate.toLocaleDateString('en-US', {
      timeZone: 'America/Los_Angeles',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Method to create a featured research paper
  static createFeatured(paperData) {
    return new ResearchPaper({ ...paperData, featured: true });
  }

  // Method to check if research paper matches search criteria
  matchesSearch(searchTerm) {
    const searchLower = searchTerm.toLowerCase();
    return (
      this.title.toLowerCase().includes(searchLower) ||
      this.content.toLowerCase().includes(searchLower) ||
      this.summary.toLowerCase().includes(searchLower) ||
      (this.author && this.author.name.toLowerCase().includes(searchLower)) ||
      this.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  // Validate research paper data
  validate() {
    const requiredFields = ['id', 'title', 'content', 'summary', 'publishDate', 'authorId'];
    const missingFields = requiredFields.filter(field => !this[field]);

    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    if (this.tags.length === 0) {
      throw new Error('Research paper must have at least one tag');
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(this.publishDate)) {
      throw new Error('Invalid publish date format. Use YYYY-MM-DD');
    }
    if (this.lastModified && !dateRegex.test(this.lastModified)) {
      throw new Error('Invalid last modified date format. Use YYYY-MM-DD');
    }

    // Validate URLs if provided
    if (this.paperUrl && !this.validateUrl(this.paperUrl)) {
      throw new Error('Invalid paper URL format');
    }
    if (this.githubUrl && !this.validateUrl(this.githubUrl)) {
      throw new Error('Invalid GitHub URL format');
    }

    // Author validation is handled by getAuthor function

    return true;
  }

  // Helper method to validate URLs
  validateUrl(url) {
    if (!url) return true; // Empty URLs are allowed
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default ResearchPaper;
