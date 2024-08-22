import React from 'react';
import bhavesh from './bhavesh.jpeg'; 

const Home = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Change to space-between for left and right alignment
    height: '56vh',
    backgroundColor: '#534646',
    padding: '6% 20px',
  };

  const textStyle = {
    flex: 2,
    
    fontFamily: 'Arial, sans-serif',
    color: '#fff', 
    justifyContent: 'center'
  };

  const imageStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  };

  const imgStyle = {
    maxWidth: '34%', // Adjusted to ensure image scales well within the container
    borderRadius: '9%',
  };

  return (
    <div style={containerStyle}>
      <div style={imageStyle}>
        <img
          src={bhavesh}
          alt="Bhavesh"
          style={imgStyle}
        />
      </div>
      <div style={textStyle}>
        <h1>Hello I'm Bhavesh,</h1>
        <p>
          As an MCA graduate with a keen interest in full-stack web development, I have cultivated a solid skill set in HTML, CSS, and JavaScript. My expertise extends to frameworks such as React, Node.js, and MongoDB, and I am also proficient in C++. I excel at creating user-centric websites that are both dynamic and responsive. Alongside my technical skills, I possess strong soft skills including effective communication, team leadership, and collaborative work. These attributes enable me to work seamlessly with teams and drive projects to successful completion. For an in-depth look at my work, please refer to the project section of my portfolio.
        </p>
        {/* <h3>Some quick bits about me:- </h3>
        <ul>
          <li>BCA</li>
          <li>MCA</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Home;
