import React from 'react';

const styles = {
  section: {
    padding: '50px 20px',
    backgroundColor: '#f1f8e9',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5em',
    marginBottom: '40px',
    color: '#004d40',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '30px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  label: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#00796b',
    marginTop: '10px',
  },
  detail: {
    fontSize: '1.1em',
    marginBottom: '15px',
    color: '#555555',
  },
  date: {
    fontSize: '1.1em',
    marginBottom: '20px',
    color: '#666666',
  },
  list: {
    marginLeft: '20px',
    color: '#555555',
    fontSize: '1.05em',
    lineHeight: '1.6',
  },
};

const ExperienceComponent = () => {
  const handleMouseOver = (e) => {
    const target = e.currentTarget;
    target.style.transform = 'scale(1.05)';
    target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    target.style.zIndex = '1';
  };

  const handleMouseOut = (e) => {
    const target = e.currentTarget;
    target.style.transform = 'scale(1)';
    target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    target.style.zIndex = '0';
  };

  return (
    <section id="experience" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Professional Experience</h2>

        {/* MoveTech Consultancy */}
        <div style={styles.card} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div style={styles.label}>Role:</div>
          <div style={styles.detail}>Software Developer</div>

          <div style={styles.label}>Company:</div>
          <div style={styles.detail}>MoveTech Consultancy · Full-time</div>

          <div style={styles.label}>Duration:</div>
          <div style={styles.date}>Feb 2025 – Present</div>

          <div style={styles.label}>Location:</div>
          <div style={styles.detail}>Melbourne, Victoria, Australia · Remote</div>

          <div style={styles.label}>Responsibilities:</div>
          <ul style={styles.list}>
            <li>Working on both frontend and backend with a focus on performance and clean architecture.</li>
            <li>Leading full-stack feature development and system design.</li>
            <li>Conducting technical research and contributing to system improvements.</li>
            <li>Collaborating with product managers and engineers to ship high-quality features.</li>
            <li>Practicing agile methodologies including sprint planning and CI/CD.</li>
          </ul>

          <div style={styles.label}>Skills:</div>
          <div style={styles.detail}>
            MERN Stack · React.js · Node.js · API Development · PostgreSQL · Postman · CSS · Responsive Design · MariaDB
          </div>
        </div>

        {/* Freelancer + Self-Learning */}
        <div style={styles.card} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div style={styles.label}>Role:</div>
          <div style={styles.detail}>Freelancer & Self-Learner (Part-Time)</div>

          <div style={styles.label}>Duration:</div>
          <div style={styles.date}>June 2024 – Present</div>

          <div style={styles.label}>Overview:</div>
          <ul style={styles.list}>
            <li>Delivered freelance web projects for small businesses using React and Node.js.</li>
            <li>Designed responsive UIs, built REST APIs, and deployed apps using Netlify and Vercel.</li>
            <li>Deepened skills in authentication, performance optimization, and state management.</li>
            <li>Completed hands-on projects like portfolio websites, mini e-commerce, and dashboards.</li>
            <li>Contributed to open-source and built a consistent GitHub commit streak.</li>
          </ul>

          <div style={styles.label}>Technologies & Tools:</div>
          <div style={styles.detail}>
            React.js · Express.js · MongoDB · Tailwind CSS · JWT · GitHub · Netlify · Vercel · UI/UX Best Practices
          </div>
        </div>

        {/* Unified Mentor Internship */}
        <div style={styles.card} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div style={styles.label}>Role:</div>
          <div style={styles.detail}>Web Developer</div>

          <div style={styles.label}>Company:</div>
          <div style={styles.detail}>Unified Mentor Private Limited · Internship</div>

          <div style={styles.label}>Duration:</div>
          <div style={styles.date}>Aug 2024 – Oct 2024</div>

          <div style={styles.label}>Location:</div>
          <div style={styles.detail}>Gurugram, Haryana, India · Remote</div>

          <div style={styles.label}>Responsibilities:</div>
          <ul style={styles.list}>
            <li>Contributed to frontend development using React and modern UI libraries.</li>
            <li>Collaborated with teams to develop responsive, accessible, and high-performance applications.</li>
            <li>Built landing pages and integrated APIs in live production websites.</li>
          </ul>

          <div style={styles.label}>Skills:</div>
          <div style={styles.detail}>
            JavaScript · HTML5 · CSS · React.js · Next.js · Vue.js · Landing Page Optimization
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
