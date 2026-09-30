import React from 'react';
import { FaLaptopCode, FaServer, FaMobileAlt, FaRocket } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      icon: <FaLaptopCode className="service-icon" />,
      title: "Full-Stack Web Development",
      description: "Building robust, scalable end-to-end web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with clean architecture and optimal performance."
    },
    {
      icon: <FaMobileAlt className="service-icon" />,
      title: "Frontend & UI/UX Engineering",
      description: "Crafting responsive, accessible, and high-performance user interfaces using React.js, Tailwind CSS, modern UI libraries, and landing page optimization."
    },
    {
      icon: <FaServer className="service-icon" />,
      title: "Backend & API Integration",
      description: "Developing secure RESTful APIs, database management (PostgreSQL, MongoDB, MariaDB), authentication (JWT), and system integration."
    },
    {
      icon: <FaRocket className="service-icon" />,
      title: "Freelance & Deployment Solutions",
      description: "Delivering custom freelance web projects for businesses, performance optimization, state management, and seamless deployments on Vercel and Netlify."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <p className="services-subtitle">What I can do for your projects and business</p>
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
