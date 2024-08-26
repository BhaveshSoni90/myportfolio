import React from 'react';

// Inline CSS Styles
const styles = {
  section: {
    padding: '50px 20px',
    backgroundColor: '#f1f8e9', // Light green background
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5em',
    marginBottom: '40px',
    color: '#004d40', // Dark green color for the title
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
  label: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#00796b', // Dark teal color for labels
  },
  detail: {
    fontSize: '1.1em',
    marginBottom: '15px',
    color: '#555555', // Medium grey for details
  },
  date: {
    fontSize: '1.1em',
    marginBottom: '20px',
    color: '#666666', // Lighter grey for date range
  },
};

const ExperienceComponent = () => {
  return (
    <section id="experience" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Professional Experience</h2>
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
          <div style={styles.label}>Role:</div>
          <div style={styles.detail}>Web Development Intern</div>
          <div style={styles.label}>Company:</div>
          <div style={styles.detail}>Unified Mentor Pvt Ltd</div>
          <div style={styles.label}>Duration:</div>
          <div style={styles.date}>August 25, 2024 - Present</div>
          <div style={styles.label}>Location:</div>
          <div style={styles.detail}>Remote</div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
