import React from 'react';

const filePath = '/BhaveshSoni.pdf';

const CV = () => {
  return (
    <div style={styles.container}>
      <div style={styles.intro}>
        <h2 style={styles.introTitle}>My Curriculum Vitae</h2>
        <p style={styles.introText}>
          Here you can find a detailed overview of my professional experience, skills, and accomplishments. 
          Feel free to download my CV to get more information about my background and qualifications.
        </p>
        <a
          href={filePath}
          download="Bhavesh-Soni.pdf"
          style={styles.button}
        >
          Download CV (PDF)
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 20px',
    backgroundColor: '#0a0f1d',
  },
  intro: {
    textAlign: 'center',
    padding: '50px 40px',
    backgroundColor: 'rgba(30, 41, 59, 0.6)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    maxWidth: '750px',
    width: '100%',
  },
  introTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',
  },
  introText: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    lineHeight: '1.8',
    marginBottom: '35px',
  },
  button: {
    display: 'inline-block',
    padding: '14px 32px',
    fontSize: '1.1rem',
    color: '#fff',
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    textDecoration: 'none',
    borderRadius: '10px',
    boxShadow: '0 8px 25px rgba(59,130,246,0.4)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: '700',
  },
};

export default CV;
