import React from 'react';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Frontend & Languages",
      icon: <FaCode style={{ color: '#06b6d4' }} />,
      skills: ["JavaScript", "HTML5", "CSS", "React.js", "Next.js", "Vue.js", "Tailwind CSS", "C++"]
    },
    {
      title: "Backend & Databases",
      icon: <FaServer style={{ color: '#3b82f6' }} />,
      skills: ["Node.js", "Express.js", "PHP", "MongoDB", "PostgreSQL", "MariaDB", "JWT", "REST APIs"]
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools style={{ color: '#8b5cf6' }} />,
      skills: ["GitHub", "VS Code", "Vercel", "Netlify", "Postman", "Git", "Agile / CI/CD"]
    }
  ];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headerBox}>
          <span style={styles.badge}>Expertise</span>
          <h2 style={styles.title}>Skills & Technologies</h2>
          <p style={styles.subtitle}>Modern tools and technologies I use to build scalable products</p>
        </div>

        <div style={styles.bentoGrid}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} style={styles.bentoCard}>
              <div style={styles.cardHeader}>
                <div style={styles.iconWrap}>{cat.icon}</div>
                <h3 style={styles.cardTitle}>{cat.title}</h3>
              </div>
              <div style={styles.pillContainer}>
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
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
    background: 'rgba(6, 182, 212, 0.1)',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    color: '#06b6d4',
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
  bentoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '30px',
  },
  bentoCard: {
    background: 'rgba(15, 23, 42, 0.65)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '25px',
  },
  iconWrap: {
    width: '45px',
    height: '45px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.3rem',
  },
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#f8fafc',
    margin: 0,
  },
  pillContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  skillPill: {
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    color: '#cbd5e1',
    padding: '10px 18px',
    borderRadius: '12px',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    cursor: 'default',
  },
};

export default SkillsPage;
