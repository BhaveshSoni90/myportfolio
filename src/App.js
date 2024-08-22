// App.js
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './App.css'; // Your other styles
import Home from './Home';
import Education from './Education';
import Projects from './Project';
import CV from './CV';
import SkillsPage from './skills';
const App = () => {
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
    <div>
      <Navbar className={scrolled ? 'scrolled' : ''} />
      <section id="home" className="section">
        
        <Home/>
      </section>
      <section id="projects" className="section">
        
        <Projects/>
      </section>
      <section id="skills" className="section">
        <SkillsPage/>
      </section>
      <section id="education" className="section">
        
        <Education/>
      </section>
      
      
      <section id="download" className="section">
        
        <CV/>
      </section>
    </div>
  );
};

export default App;
