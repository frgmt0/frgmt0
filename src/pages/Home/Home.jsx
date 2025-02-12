import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TiltedCard from "../../components/tiltedcard/TitledCard";
import allProjects from "../../data/projects";

const Home = () => {
  return (
    <div className="page-container">
      <div className="content-section">
        <h1>Home Page</h1>
        <p>This is the home page.</p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/projects">Projects</Link>
        </p>
        <p>
          <Link to="/research">Research</Link>
        </p>
        <p>{/* <Link to="/blog">Blog</Link> */}</p>
      </div>
      <h1>Test Home Page</h1>
      <p>If you can see this, basic rendering is working.</p>
    </div>
  );
};

export default Home;
