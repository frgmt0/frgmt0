import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "Research", path: "https://research.frgmt.xyz", external: true },
  { name: "About", path: "/about" },
  { name: "Blog", path: "https://blog.frgmt.xyz", external: true },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-border"></div>
      <div className="navbar-container">
        <div className="navbar-content">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/" className="navbar-logo" data-text="frgmt_">
              frgmt_
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="navbar-links desktop">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.path} className="nav-link">
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-button"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
        }}
        transition={{ duration: 0.2 }}
      >
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.external ? (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="mobile-nav-link"
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={item.path}
                onClick={closeMobileMenu}
                className="mobile-nav-link"
              >
                {item.name}
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
