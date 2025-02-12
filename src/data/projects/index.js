import arxDiscordBot from './arxDiscordBot';
import soFragment from './soFragment';
import prismResearch from './prismResearch';
import loanCalculator from './loanCalculator';

// Export all projects in an array, sorted by date (newest first)
const allProjects = [
  arxDiscordBot,
  soFragment,
  prismResearch,
  loanCalculator
].sort((a, b) => {
  if (!b.completionDate) return -1;
  if (!a.completionDate) return 1;
  return new Date(b.completionDate) - new Date(a.completionDate);
});

export default allProjects;
