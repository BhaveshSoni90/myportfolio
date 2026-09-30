import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Services from './Services';
import ExperienceComponent from './exper';
import Projects from './Project';
import SkillsPage from './skills';
import Education from './Education';
import CV from './CV';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
        <Home />
      </section>
      <section id="services" className="section">
        <Services />
      </section>
      <section id="exp" className="section">
        <ExperienceComponent />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <section id="skills" className="section">
        <SkillsPage />
      </section>
      <section id="education" className="section">
        <Education />
      </section>
      <section id="download" className="section">
        <CV />
      </section>
    </div>
  );
};

export default App;
