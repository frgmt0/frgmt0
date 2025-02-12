import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  useEffect(() => {
    // Redirect to the new blog URL with the same post ID
    window.location.href = `https://blog.frgmt.xyz/${id}`;
  }, [id]);

  return (
    <div className="container">
      <section className="content-section">
        <h1>Redirecting to Blog Post...</h1>
        <p>If you are not redirected automatically, please click <a href={`https://blog.frgmt.xyz/${id}`}>here</a>.</p>
      </section>
    </div>
  );
};

export default BlogPost;
