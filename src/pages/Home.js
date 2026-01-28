import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';   // ✅ ADDED
import AnimatedSquare from '../components/AnimatedSquare';
import '../styles/pages/home.css';

const Home = () => {
  const navigate = useNavigate();   // ✅ ADDED

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="page-container home-page"
    >
      <div className="home-container">
        <div className="home-content">

          {/* ===== HERO ===== */}
          <motion.h1 variants={itemVariants} className="home-title">
            Hi, I'm <span className="highlight">Hariharan G</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="home-subtitle">
            React JS Web App Developer | Freelance | Real-Time Business Applications
          </motion.p>

          {/* ===== MAIN DESCRIPTION ===== */}
          <motion.div variants={itemVariants} className="home-description">
            <p>
              I’m a <strong>React JS Web Application Developer</strong> specializing in building
              modern, high-performance, and scalable web apps for real-time business needs.
            </p>
            <p>
              I help startups, small businesses, and enterprises transform ideas into
              <strong> production-ready web applications</strong> using React, Firebase,
              REST APIs, and modern UI/UX practices.
            </p>
          </motion.div>

          {/* ===== SKILLS / SERVICES ===== */}
          <motion.div variants={itemVariants} className="home-services">
            <ul>
              <li>⚡ Real-time Web Apps (Firebase / APIs)</li>
              <li>⚡ Custom React Dashboards & Admin Panels</li>
              <li>⚡ Business Automation Web Tools</li>
              <li>⚡ Responsive UI with Modern UX</li>
              <li>⚡ Freelance React JS Development</li>
            </ul>
          </motion.div>

          {/* ===== CTA ===== */}
          <motion.div variants={itemVariants} className="home-cta">
            <button
              className="primary-btn"
              onClick={() => navigate('/contact')}   // ✅ ADDED
            >
              Hire Me for React Development
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate('/projects')} // ✅ ADDED
            >
              View My Projects
            </button>
          </motion.div>

          {/* ===== EXPERIENCE (BOTTOM) ===== */}
          <motion.div variants={itemVariants} className="home-experience">
            <h3>Professional Experience</h3>
            <p>
              <strong>Neurealm Formly Known as GAVS</strong> — IT Helpdesk Engineer (Infrastructure Services)
            </p>
            <p>
              Currently supporting enterprise IT Helpdesk infrastructure, networks,
              and internal systems while building strong foundations in
              troubleshooting, system reliability, and enterprise workflows 
              for US clients realated to support end users to resolve issues.
            </p>    
            
            <p>
              <strong>Tata Consultancy Services (TCS)</strong> — IT Support Network Engineer (Programmer)
            </p>
            <p>
              1.4+ years of experience supporting enterprise IT infrastructure, networks,
              and internal systems while building strong foundations in
              troubleshooting, system reliability, and enterprise workflows.
            </p>
          </motion.div>

        </div>

        {/* ===== ANIMATION ===== */}
        <motion.div variants={itemVariants} className="home-animation">
          <AnimatedSquare />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
