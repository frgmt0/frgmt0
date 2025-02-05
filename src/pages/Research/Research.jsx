import React, { useState } from "react";
import { Link } from "react-router-dom";
import researchProjects from "../../data/researchProjects";
import SearchBar from "../../components/SearchBar";

const CATEGORIES = ["All", "AI/ML", "Web3", "Systems", "Graphics"];

const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedProjects, setDisplayedProjects] = useState(researchProjects);

  const handleSearchResults = (results) => {
    setDisplayedProjects(
      selectedCategory === "All"
        ? results
        : results.filter(
            (project) => project.getPreviewData().category === selectedCategory,
          ),
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDisplayedProjects(
      category === "All"
        ? allProjects
        : allProjects.filter(
            (project) => project.getPreviewData().category === category,
          ),
    );
  };

  return (
    <div className="page-background">
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
          Research & Experiments
        </h1>

        <SearchBar posts={allProjects} onSearchResults={handleSearchResults} />

        <div className="category-filter">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`filter-button ${selectedCategory === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="research-grid">
          {displayedProjects.map((project) => {
            const projectData = project.getPreviewData();
            return (
              <div key={projectData.id} className="research-card">
                <img src={projectData.coverImage} alt={projectData.title} />
                <div className="research-card-content">
                  <div className="research-card-date">
                    {projectData.formattedPublishDate}
                  </div>
                  <h3>{projectData.title}</h3>
                  <p className="research-card-summary">{projectData.summary}</p>
                  <Link
                    to={`/${projectData.id}`}
                    className="cta-button secondary"
                    style={{ alignSelf: "flex-start" }}
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
