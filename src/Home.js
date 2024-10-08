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
          As an MCA graduate with a keen interest in full-stack web development, I have cultivated a solid skill set in HTML, CSS, and JavaScript. My expertise extends to frameworks such as React, Node.js, and MongoDB, and I am also proficient in C++. I excel at creating user-centric websites that are both dynamic and responsive. Alongside my technical skills, I possess strong soft skills including effective communication, team leadership, and collaborative work. These attributes enable me to work seamlessly with teams and drive projects to successful completion. For an in-depth look at my work, please refer to the project section of my portfolio.
        </p>
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
