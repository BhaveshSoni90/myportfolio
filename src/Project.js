import React from 'react';

// Inline CSS Styles
const styles = {
  section: {
    padding: '50px 20px',
    backgroundColor: '#e0f7fa', // Light cyan background
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5em',
    marginBottom: '40px',
    color: '#00796b', // Dark teal color for the title
  },
  card: {
    backgroundColor: '#ffffff', // White background for cards
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '30px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer', // Indicate that the card is interactive
  },
  cardHover: {
    transform: 'scale(1.05)', // Slight zoom effect
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
    zIndex: 1, // Ensure the card appears on top
  },
  projectTitle: {
    fontSize: '1.8em',
    marginBottom: '15px',
    color: '#007bff', // Blue color for project titles
  },
  description: {
    fontSize: '1.2em',
    marginBottom: '15px',
    color: '#333333', // Dark grey color for description
  },
  features: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    color: '#555555', // Medium grey for list items
    marginBottom: '15px',
  },
  tech: {
    fontSize: '1.1em',
    marginBottom: '20px',
    color: '#666666', // Lighter grey for technology description
  },
  link: {
    display: 'inline-block',
    padding: '12px 24px',
    fontSize: '1.1em',
    color: '#ffffff',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  linkHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  },
};

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Projects</h2>
        <div
          style={styles.card}
          onMouseOver={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'scale(1.05)';
            target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            target.style.zIndex = '1'; // Ensure the card stays on top
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'scale(1)';
            target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            target.style.zIndex = '0'; // Reset z-index
          }}
        >
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
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor;
              e.currentTarget.style.transform = styles.linkHover.transform;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = styles.link.backgroundColor;
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
