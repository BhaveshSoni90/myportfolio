// components/ThemeToggle.js
import React, { useState, useEffect } from 'react';
import './ThemeToggle.css'; // Create this CSS file for styling

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => 
    localStorage.getItem('theme') === 'dark' || false
  );

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <button 
      className="theme-toggle"
      onClick={() => setDarkMode(prevMode => !prevMode)}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
