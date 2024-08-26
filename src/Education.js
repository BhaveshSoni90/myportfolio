import React from 'react';

// Define basic styles for the page
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#e0f7fa', // Light cyan background
  minHeight: '1vh',
};

const sectionStyle = {
  margin: '20px 0',
  textAlign: 'center',
  backgroundColor: '#ffffff', // White background for each section
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '600px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer', // Indicate that the section is interactive
};

const sectionHoverStyle = {
  transform: 'scale(1.05)', // Slight zoom effect
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
  zIndex: 1, // Ensure the section appears on top
};

const headingStyle = {
  marginBottom: '10px',
  color: '#00796b', // Dark teal for headings
};

const textStyle = {
  color: '#004d40', // Darker teal for text
};

const linkStyle = {
  color: '#004d40', // Darker teal for links
  textDecoration: 'none',
  fontWeight: 'bold',
};

const Education = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Education</h1>

      <div
        style={sectionStyle}
        onMouseOver={(e) => {
          const target = e.currentTarget;
          target.style.transform = 'scale(1.05)';
          target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
          target.style.zIndex = '1'; // Ensure the section stays on top
        }}
        onMouseOut={(e) => {
          const target = e.currentTarget;
          target.style.transform = 'scale(1)';
          target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
          target.style.zIndex = '0'; // Reset z-index
        }}
      >
        <h2 style={headingStyle}>Bachelor's in Computer Applications</h2>
        <p style={textStyle}>
          <a
            href="https://www.mgsubikaner.ac.in/"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            Maharaja Ganga Singh University
          </a><br />
          2022
        </p>
      </div>

      <div
        style={sectionStyle}
        onMouseOver={(e) => {
          const target = e.currentTarget;
          target.style.transform = 'scale(1.05)';
          target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
          target.style.zIndex = '1'; // Ensure the section stays on top
        }}
        onMouseOut={(e) => {
          const target = e.currentTarget;
          target.style.transform = 'scale(1)';
          target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
          target.style.zIndex = '0'; // Reset z-index
        }}
      >
        <h2 style={headingStyle}>Master's In Computer Applications</h2>
        <p style={textStyle}>
          <a
            href="https://www.lpu.in/"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            Lovely Professional University, Jalandhar
          </a><br />
          2024
        </p>
      </div>
    </div>
  );
};

export default Education;
