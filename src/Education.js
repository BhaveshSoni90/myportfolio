import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const educationList = [
    {
      degree: "Master's In Computer Applications (MCA)",
      institution: "Lovely Professional University, Jalandhar",
      link: "https://www.lpu.in/",
      year: "2022 – 2024",
      icon: <FaGraduationCap style={{ color: '#06b6d4' }} />
    },
    {
      degree: "Bachelor's in Computer Applications (BCA)",
      institution: "Maharaja Ganga Singh University",
      link: "https://www.mgsubikaner.ac.in/",
      year: "2019 – 2022",
      icon: <FaUniversity style={{ color: '#3b82f6' }} />
    }
  ];

  return (
    <section id="education" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headerBox}>
          <span style={styles.badge}>Academic Background</span>
          <h2 style={styles.title}>Education & Degrees</h2>
          <p style={styles.subtitle}>My formal academic credentials and computer science foundation</p>
        </div>

        <div style={styles.grid}>
          {educationList.map((edu, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.cardTop}>
                <div style={styles.iconWrap}>{edu.icon}</div>
                <span style={styles.yearBadge}>{edu.year}</span>
              </div>
              <h3 style={styles.degreeTitle}>{edu.degree}</h3>
              <p style={styles.institution}>
                <a href={edu.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  {edu.institution} ↗
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 20px',
    backgroundColor: '#030712',
    color: '#f8fafc',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  headerBox: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  badge: {
    background: 'rgba(139, 92, 246, 0.1)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    color: '#a78bfa',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    display: 'inline-block',
    marginBottom: '15px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '800',
    letterSpacing: '-1px',
    marginBottom: '15px',
    background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#94a3b8',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '30px',
  },
  card: {
    background: 'rgba(15, 23, 42, 0.65)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px',
  },
  iconWrap: {
    width: '50px',
    height: '50px',
    borderRadius: '14px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
  },
  yearBadge: {
    background: 'rgba(6, 182, 212, 0.1)',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    color: '#06b6d4',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  degreeTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '12px',
    lineHeight: '1.4',
  },
  institution: {
    margin: 0,
    fontSize: '1.05rem',
  },
  link: {
    color: '#60a5fa',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.2s ease',
  },
};

export default Education;
