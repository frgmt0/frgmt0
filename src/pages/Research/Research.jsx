import React, { useState } from "react";
import { Link } from "react-router-dom";
import researchProjects from "../../data/researchProjects";
import SearchBar from "../../components/SearchBar";

const Research = () => {
  const [displayedProjects, setDisplayedProjects] = useState(researchProjects);

  const handleSearchResults = (results) => {
    setDisplayedProjects(results);
  };

  return (
    <div className="page-background">
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
          Research & Experiments
        </h1>

        <SearchBar posts={researchProjects} onSearchResults={handleSearchResults} />

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
