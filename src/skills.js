import React from 'react';

// Define basic button styles using JavaScript object
const buttonStyle = {
  padding: '12px 24px',
  fontSize: '16px',
  fontFamily: 'Arial, sans-serif',
  border: '2px solid #007bff',
  backgroundColor: '#ffffff',
  color: '#007bff',
  cursor: 'pointer',
  borderRadius: '6px',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
};

const buttonHoverStyle = {
  backgroundColor: '#007bff',
  color: '#ffffff',
  borderColor: '#007bff',
};

const buttonContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
  justifyContent: 'center',
  marginTop: '10px',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 20px',
  backgroundColor: '#f0f4f8', // Light gray background
  minHeight: '100vh',
};

const headingStyle = {
  fontSize: '2.5em',
  color: '#007bff', // Blue color for the heading
  marginBottom: '30px',
};

const sectionStyle = {
  margin: '20px 0',
  width: '100%',
};

const sectionTitleStyle = {
  fontSize: '1.8em',
  marginBottom: '15px',
  color: '#333333', // Dark gray color for section titles
};

const SkillsPage = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Skills</h1>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Languages:</h2>
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://developer.mozilla.org/en-US/docs/Web/HTML')}
          >
            HTML5
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://developer.mozilla.org/en-US/docs/Web/CSS')}
          >
            CSS
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}
          >
            JavaScript
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://cplusplus.com/doc/tutorial/')}
          >
            C++
          </button>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Frameworks:</h2>
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://reactjs.org/docs/getting-started.html')}
          >
            React
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://nodejs.org/en/docs/')}
          >
            Node.js
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://www.mongodb.com/docs/')}
          >
            MongoDB
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://expressjs.com/en/starter/installing.html')}
          >
            Express
          </button>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Tools and Platforms:</h2>
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://code.visualstudio.com/docs')}
          >
            VSCode
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://github.com/docs')}
          >
            GitHub
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://canvas.instructure.com/')}
          >
            Canvas
          </button>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Operating Systems:</h2>
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://www.microsoft.com/en-us/windows')}
          >
            Windows
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleClick('https://www.linux.org/docs/')}
          >
            Linux
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
