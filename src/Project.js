import React from 'react';

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#0a0f1d',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.8rem',
    fontWeight: '800',
    marginBottom: '10px',
    background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#94a3b8',
    marginBottom: '60px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '30px',
  },
  card: {
    backgroundColor: 'rgba(30, 41, 59, 0.6)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    padding: '40px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTop: '4px solid #3b82f6',
  },
  projectTitle: {
    fontSize: '1.6em',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#f8fafc',
  },
  description: {
    fontSize: '1.02em',
    marginBottom: '20px',
    color: '#94a3b8',
    lineHeight: '1.7',
  },
  features: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    color: '#94a3b8',
    marginBottom: '25px',
    lineHeight: '1.6',
  },
  tech: {
    fontSize: '0.92em',
    marginBottom: '30px',
    color: '#60a5fa',
    fontWeight: '600',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '10px 14px',
    borderRadius: '8px',
    display: 'inline-block',
  },
  link: {
    display: 'inline-block',
    padding: '12px 24px',
    fontSize: '1em',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '8px',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
  },
};

const Projects = () => {
  const handleMouseOver = (e) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(-6px)';
    target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.2)';
    target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
  };

  const handleMouseOut = (e) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(0)';
    target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
  };

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Projects</h2>
        <p style={styles.subtitle}>Showcasing my technical work and platforms built</p>
        
        <div style={styles.grid}>
          {/* CareCrew Project */}
          <div style={styles.card} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div>
              <h3 style={styles.projectTitle}>CareCrew</h3>
              <p style={styles.description}>
                CareCrew is a comprehensive platform designed to bridge the gap between pet owners and service providers. It connects users with professionals offering tailored pet care services:
              </p>
              <ul style={styles.features}>
                <li>Pet grooming & daycare services</li>
                <li>Training and behavioral support</li>
                <li>Robust MERN stack architecture</li>
              </ul>
              <div style={styles.tech}>
                Tech: MongoDB · Express.js · React · Node.js
              </div>
            </div>
            <a
              href="https://frontendofcarecrew.vercel.app/"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Project
            </a>
          </div>

          {/* Personal Portfolio Project */}
          <div style={styles.card} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div>
              <h3 style={styles.projectTitle}>Personal Portfolio</h3>
              <p style={styles.description}>
                Designed and implemented a dynamic personal portfolio to showcase professional projects, skills, and experience with a modern responsive UI.
              </p>
              <ul style={styles.features}>
                <li>Interactive user interface & smooth transitions</li>
                <li>Reusable components and state management with React hooks</li>
                <li>Optimized for cross-browser compatibility and performance</li>
              </ul>
              <div style={styles.tech}>
                Tech: React.js · CSS3 · JavaScript · HTML5
              </div>
            </div>
            <a
              href="https://github.com/BhaveshSoni90/"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
