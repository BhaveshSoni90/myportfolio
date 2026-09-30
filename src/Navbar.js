import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaTerminal } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <div className="logo-badge">
            <FaTerminal />
          </div>
          <span className="logo-text">Bhavesh Soni</span>
        </a>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleLinkClick} className="nav-link">Home</a>
          <a href="#services" onClick={handleLinkClick} className="nav-link">Services</a>
          <a href="#exp" onClick={handleLinkClick} className="nav-link">Experience</a>
          <a href="#projects" onClick={handleLinkClick} className="nav-link">Projects</a>
          <a href="#skills" onClick={handleLinkClick} className="nav-link">Skills</a>
          <a href="#education" onClick={handleLinkClick} className="nav-link">Education</a>
          <a href="#download" onClick={handleLinkClick} className="nav-cta">Resume</a>
        </nav>

        <div className="mobile-toggle" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
