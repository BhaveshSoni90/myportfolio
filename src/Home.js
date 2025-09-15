import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import bhavesh from './bhavesh.jpeg';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width on resize
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define responsive styles
  const containerStyle = {
    display: 'flex',
    flexDirection: windowWidth > 768 ? 'row' : 'column', // Use 'row' for larger screens
    alignItems: 'center',
    justifyContent: 'center',
    height: windowWidth > 768 ? '56vh' : 'auto', // Adjust height for larger screens
    backgroundColor: '#534646',
    padding: '6% 20px',
    marginTop: windowWidth <=768 ? '25%' : '0',
  };

  const textStyle = {
    flex: 2,
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const imageStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: windowWidth <= 768 ? '20px' : '0', // Add margin on small screens
  };

  const imgStyle = {
    width: windowWidth <= 768 ? '30%' : '39%', // Adjust width based on screen size
    borderRadius: '9%',
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px',
  };

  const iconStyle = {
    color: '#fff',
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={containerStyle}>
      <div style={imageStyle}>
        <img src={bhavesh} alt="Bhavesh" style={imgStyle} />
      </div>
      <div style={textStyle}>
        <h1>Hello I'm Bhavesh,</h1>
        <p>
Full-stack web developer with hands-on experience in building responsive and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Proficient in both frontend and backend development, with a strong understanding of clean code practices, API integration, and UI/UX principles. Experienced in working with agile teams to deliver high-quality features and maintain production-ready systems. Strong communication and collaboration skills with the ability to lead and contribute effectively in team environments.        </p>
        <div style={socialIconsStyle}>
          <FaLinkedin
            style={iconStyle}
            onClick={() => handleIconClick('https://linkedin.com/in/bhaveshsoni90')}
            title="LinkedIn"
          />
          <FaGithub
            style={iconStyle}
            onClick={() => handleIconClick('https://github.com/BhaveshSoni90/')}
            title="GitHub"
          />
          <FaPhone
            style={iconStyle}
            onClick={() => handleIconClick('tel:+919079165109')}
            title="Phone"
          />
          <FaEnvelope
            style={iconStyle}
            onClick={() => handleIconClick('mailto:bhaveshsoni9079@gmail.com')}
            title="Email"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
