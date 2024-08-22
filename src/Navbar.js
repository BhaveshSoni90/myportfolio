import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Ensure this CSS file is properly created
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h1 className="portfolio-name">Bhavesh Soni</h1>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={handleLinkClick}>Introduction</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
          <li><a href="#download" className="download-cv" onClick={handleLinkClick}>Download CV</a></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
