import React from 'react';

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#0f172a',
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
  card: {
    backgroundColor: 'rgba(30, 41, 59, 0.6)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    padding: '40px',
    marginBottom: '30px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    borderLeft: '4px solid #3b82f6',
  },
  roleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '25px',
  },
  roleTitle: {
    fontSize: '1.5em',
    fontWeight: '700',
    color: '#f8fafc',
    margin: '0 0 6px 0',
  },
  company: {
    fontSize: '1.1em',
    fontWeight: '600',
    color: '#60a5fa',
  },
  dateLocation: {
    fontSize: '0.95em',
    color: '#94a3b8',
    fontWeight: '500',
    textAlign: 'right',
  },
  label: {
    fontSize: '1.05em',
    fontWeight: '600',
    color: '#e2e8f0',
    marginTop: '20px',
    marginBottom: '10px',
  },
  list: {
    marginLeft: '20px',
    color: '#94a3b8',
    fontSize: '1.02em',
    lineHeight: '1.7',
  },
  skillsText: {
    fontSize: '0.95em',
    color: '#cbd5e1',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '10px 16px',
    borderRadius: '8px',
    display: 'inline-block',
    marginTop: '12px',
  },
};

const ExperienceComponent = () => {
  const handleMouseOver = (e) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(-6px)';
    target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.15)';
    target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
  };

  const handleMouseOut = (e) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(0)';
    target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
  };

  return (
    <section id="experience" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Professional Experience</h2>
        <p style={styles.subtitle}>My career journey and professional milestones</p>

        {/* MoveTech Consultancy */}
        <div style={styles.card} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div style={styles.roleHeader}>
            <div>
              <h3 style={styles.roleTitle}>Software Developer</h3>
              <div style={styles.company}>MoveTech Consultancy · Full-time</div>
            </div>
            <div style={styles.dateLocation}>
              <div>02/2025 – Present</div>
              <div style={{ fontSize: '0.9em', color: '#94a3b8' }}>Melbourne, Australia · Remote</div>
            </div>
          </div>

          <div style={styles.label}>Responsibilities:</div>
          <ul style={styles.list}>
            <li>Working on both frontend and backend with a focus on performance and clean architecture.</li>
            <li>Leading full-stack feature development and system design.</li>
            <li>Conducting technical research and contributing to system improvements.</li>
            <li>Collaborating with product managers and engineers to ship high-quality features.</li>
            <li>Practicing agile methodologies including sprint planning and CI/CD.</li>
          </ul>

          <div style={styles.label}>Skills & Tech:</div>
          <div style={styles.skillsText}>
            MERN Stack · React.js · Node.js · API Development · PostgreSQL · Postman · CSS · Responsive Design · MariaDB
          </div>
        </div>

        {/* Freelancer & Self-Learner */}
        <div style={styles.card} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div style={styles.roleHeader}>
            <div>
              <h3 style={styles.roleTitle}>Freelancer & Self-Learner</h3>
              <div style={styles.company}>Independent Contractor · Part-Time</div>
            </div>
            <div style={styles.dateLocation}>
              <div>06/2024 – Present</div>
            </div>
          </div>

          <div style={styles.label}>Key Highlights:</div>
          <ul style={styles.list}>
            <li>Delivered freelance web projects for small businesses using React and Node.js.</li>
            <li>Designed responsive UIs, built REST APIs, and deployed apps using Netlify and Vercel.</li>
            <li>Deepened skills in authentication, performance optimization, and state management.</li>
            <li>Completed hands-on projects like portfolio websites, mini e-commerce, and dashboards.</li>
            <li>Contributed to open-source and built a consistent GitHub commit streak.</li>
          </ul>

          <div style={styles.label}>Technologies & Tools:</div>
          <div style={styles.skillsText}>
            React.js · Express.js · MongoDB · Tailwind CSS · JWT · GitHub · Netlify · Vercel · UI/UX Best Practices
          </div>
        </div>

        {/* Unified Mentor Internship */}
        <div style={styles.card} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div style={styles.roleHeader}>
            <div>
              <h3 style={styles.roleTitle}>Web Developer Intern</h3>
              <div style={styles.company}>Unified Mentor Private Limited · Internship</div>
            </div>
            <div style={styles.dateLocation}>
              <div>08/2024 – 10/2024</div>
              <div style={{ fontSize: '0.9em', color: '#94a3b8' }}>Gurugram, India · Remote</div>
            </div>
          </div>

          <div style={styles.label}>Responsibilities:</div>
          <ul style={styles.list}>
            <li>Contributed to frontend development using React and modern UI libraries.</li>
            <li>Collaborated with teams to develop responsive, accessible, and high-performance applications.</li>
            <li>Built landing pages and integrated APIs in live production websites.</li>
          </ul>

          <div style={styles.label}>Skills:</div>
          <div style={styles.skillsText}>
            JavaScript · HTML5 · CSS · React.js · Next.js · Vue.js · Landing Page Optimization
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
