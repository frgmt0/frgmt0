import React, { useState } from "react";
import { Link } from "react-router-dom";
import researchProjects from "../../data/researchProjects";
import SearchBar from "../../components/SearchBar";

const Research = () => {
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('Research component mounted');
    console.log('Research projects:', researchProjects);
    setDisplayedProjects(researchProjects);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    console.log('Research still loading');
    return <LoadingScreen />;
  }

  console.log('Research component fully loaded');

  const handleSearchResults = (results) => {
    setDisplayedProjects(results);
  };

  return (
    <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
          Research & Experiments
        </h1>

        <SearchBar posts={researchProjects} onSearchResults={handleSearchResults} />

        <div className="research-grid">
          {displayedProjects.length === 0 ? (
            <div className="empty-state">
              <h2>No research projects yet</h2>
              <p>Check back soon for updates on my latest research and experiments!</p>
            </div>
          ) : (
            displayedProjects.map((project) => {
            const projectData = project.getPreviewData();
            return (
              <div key={projectData.id} className="research-card">
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
                    {project.type === 'research' ? 'Read Paper →' : 'View Project →'}
                  </Link>
                </div>
              </div>
            );
            })
          )}
        </div>
    </div>
  );
};

export default Research;
