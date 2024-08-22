// components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Ensure this CSS file is properly created
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h1 className="portfolio-name">Bhavesh Soni</h1>
        <ul className="nav-links">
        <li><a href="#home">Introduction</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#download" className="download-cv">Download CV</a></li>
        </ul>
      {/* Add the ThemeToggle component here */}
      </div>
    </nav>
  );
};

export default Navbar;
