import { useEffect } from "react";

const Research = () => {
  useEffect(() => {
    window.location.href = "https://research.frgmt.xyz";
  }, []);

  return (
    <div className="page-container">
      <section className="content-section">
        <h1>Redirecting to Research...</h1>
        <p>
          If you are not redirected automatically, please click{" "}
          <a href="https://research.frgmt.xyz">here</a>.
        </p>
      </section>
    </div>
  );
};

export default Research;
