import ResearchPaper from '../../models/ResearchPaper';

/*
Instructions:
1. Copy this template
2. Rename it to your-paper-id.js (use kebab-case)
3. Fill in the details below
4. Import and add to index.js
*/

export default new ResearchPaper({
  id: 'paper-id-here', // Use kebab-case, e.g., 'quantum-ml-2025'
  title: 'Your Paper Title',
  content: `# Your Paper Title

## Abstract

Brief overview of your research.

## Introduction

Background and context of the problem.

## Methodology

Your approach and methods used.

## Results

Your findings and outcomes.

## Conclusion

Summary and implications of your research.`,
  summary: 'A brief one-sentence summary of your research paper.',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  publishDate: '2025-02-05', // Format: YYYY-MM-DD
  lastModified: '2025-02-05', // Optional, same format
  featured: false,
  paperUrl: 'https://arxiv.org/abs/your-paper', // Optional
  githubUrl: 'https://github.com/your-username/your-repo', // Optional
  authorId: 'frgmt0', // Must match an ID in authors.js
  type: 'research' // 'research' or 'experiment'
});
