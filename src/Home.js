import React from 'react';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaCode, FaServer } from 'react-icons/fa';
import bhavesh from './bhavesh.jpeg';
import './home.css';

const Home = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="home" style={styles.heroSection}>
      <div style={styles.ambientGlow1}></div>
      <div style={styles.ambientGlow2}></div>
      <div className="hero-grid-container">
        
        {/* Right Bento Box - Profile & Stats (Comes first on mobile via CSS order) */}
        <div className="side-column" style={styles.sideColumn}>
          <div style={styles.profileCard}>
            <div style={styles.imgContainer}>
              <img src={bhavesh} alt="Bhavesh Soni" style={styles.avatar} />
            </div>
          </div>

          <div style={styles.statsGrid}>
            <div style={styles.statBox}>
              <FaCode style={styles.statIcon} />
              <div style={styles.statNumber}>Full-Stack</div>
              <div style={styles.statLabel}>MERN & React Expert</div>
            </div>
            <div style={styles.statBox}>
              <FaServer style={styles.statIcon} />
              <div style={styles.statNumber}>Clean Code</div>
              <div style={styles.statLabel}>Performance & Scale</div>
            </div>
          </div>
        </div>

        {/* Left Bento Box - Intro */}
        <div style={styles.mainCard}>
          <div style={styles.statusBadge}>
            <span style={styles.statusDot}></span> Available for Full-Stack & Frontend Roles
          </div>
          <h1 style={styles.heading}>
            Hi, I'm <span style={styles.gradientText}>Bhavesh Soni</span>
          </h1>
          <h2 style={styles.subheading}>Software Developer & Full-Stack Engineer</h2>
          <p style={styles.description}>
            Full-stack web developer with hands-on experience in building responsive and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Proficient in both frontend and backend development, with a strong understanding of clean code practices, API integration, and UI/UX principles. Experienced in working with agile teams to deliver high-quality features and maintain production-ready systems. Strong communication and collaboration skills with the ability to lead and contribute effectively in team environments.
          </p>

          <div style={styles.actionRow}>
            <a href="#projects" style={styles.primaryBtn}>Explore Projects</a>
            <a href="#download" style={styles.secondaryBtn}>View Resume</a>
          </div>

          <div style={styles.socialRow}>
            <div style={styles.socialIcon} onClick={() => handleIconClick('https://linkedin.com/in/bhaveshsoni90')} title="LinkedIn">
              <FaLinkedin />
            </div>
            <div style={styles.socialIcon} onClick={() => handleIconClick('https://github.com/BhaveshSoni90/')} title="GitHub">
              <FaGithub />
            </div>
            <div style={styles.socialIcon} onClick={() => handleIconClick('tel:+919079165109')} title="Phone">
              <FaPhone />
            </div>
            <div style={styles.socialIcon} onClick={() => handleIconClick('mailto:bhaveshsoni9079@gmail.com')} title="Email">
              <FaEnvelope />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    padding: '160px 20px 80px 20px',
    backgroundColor: '#030712',
    color: '#f8fafc',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  ambientGlow1: {
    position: 'absolute',
    top: '15%',
    left: '10%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  ambientGlow2: {
    position: 'absolute',
    bottom: '10%',
    right: '10%',
    width: '450px',
    height: '450px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  mainCard: {
    background: 'rgba(15, 23, 42, 0.65)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: '50px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(6, 182, 212, 0.1)',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    padding: '8px 16px',
    borderRadius: '30px',
    fontSize: '0.85rem',
    color: '#06b6d4',
    marginBottom: '25px',
    fontWeight: '600',
    width: 'fit-content',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#06b6d4',
    borderRadius: '50%',
    boxShadow: '0 0 12px #06b6d4',
  },
  heading: {
    fontSize: '3.2rem',
    fontWeight: '800',
    lineHeight: '1.1',
    margin: '0 0 15px 0',
    letterSpacing: '-1.5px',
    color: '#f8fafc',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subheading: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#94a3b8',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.05rem',
    color: '#94a3b8',
    lineHeight: '1.8',
    marginBottom: '35px',
  },
  actionRow: {
    display: 'flex',
    gap: '15px',
    marginBottom: '35px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    color: '#fff',
    padding: '14px 28px',
    borderRadius: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(6, 182, 212, 0.3)',
    transition: 'transform 0.2s ease',
  },
  secondaryBtn: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#f8fafc',
    padding: '14px 28px',
    borderRadius: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'background 0.2s ease',
  },
  socialRow: {
    display: 'flex',
    gap: '12px',
  },
  socialIcon: {
    width: '45px',
    height: '45px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f8fafc',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  sideColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  profileCard: {
    background: 'rgba(15, 23, 42, 0.65)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
    flex: 1,
  },
  imgContainer: {
    padding: '4px',
    background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    borderRadius: '20px',
    boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
  },
  avatar: {
    width: '200px',
    height: '240px',
    borderRadius: '16px',
    objectFit: 'cover',
    display: 'block',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  statBox: {
    background: 'rgba(15, 23, 42, 0.65)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '25px 20px',
    textAlign: 'center',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
  },
  statIcon: {
    fontSize: '1.5rem',
    color: '#06b6d4',
    marginBottom: '10px',
  },
  statNumber: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#94a3b8',
  },
};

export default Home;
