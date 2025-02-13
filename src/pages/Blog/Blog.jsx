import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.location.href = "https://blog.frgmt.xyz";
  }, []);

  return (
    <div className="page-container">
      <section className="content-section">
        <h1>Redirecting to Blog...</h1>
        <p>
          If you are not redirected automatically, please click{" "}
          <a href="https://blog.frgmt.xyz">here</a>.
        </p>
      </section>
    </div>
  );
};

export default Blog;
