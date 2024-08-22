// ProjectSection.jsx
import React from 'react';

// Inline CSS Styles
const styles = {
  section: {
    padding: '50px 20px',
    backgroundColor: '#0d6daa',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
  },
  projectTitle: {
    fontSize: '2em',
    marginBottom: '10px',
    color: '#007bff',
  },
  description: {
    fontSize: '1.1em',
    marginBottom: '15px',
    color: '#555',
  },
  features: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    color: '#555',
    marginBottom: '15px',
  },
  tech: {
    fontSize: '1em',
    marginBottom: '15px',
    color: '#666',
  },
  link: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1.1em',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '4px',
    textDecoration: 'none',
    textAlign: 'center',
  },
  linkHover: {
    backgroundColor: '#0056b3',
  },
};

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Projects</h2>
        <div style={styles.card}>
          <h3 style={styles.projectTitle}>CareCrew</h3>
          <p style={styles.description}>
            CareCrew is a comprehensive platform designed to bridge the gap between pet owners and service providers. It allows users to easily connect with professionals offering a variety of pet services, including:
          </p>
          <ul style={styles.features}>
            <li>Pet grooming</li>
            <li>Daycare services for pets</li>
            <li>Training and behavioral support</li>
            <li>And more tailored pet care services</li>
          </ul>
          <p style={styles.tech}>
            Built using the MERN stack (MongoDB, Express.js, React, Node.js), CareCrew ensures a robust and scalable platform for both pet owners and service providers.
          </p>
          <a
            href="https://frontendofcarecrew.vercel.app/"
            style={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.link.backgroundColor}
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
