import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import resumePDF from '../assets/resume.pdf';
import '../styles/pages/resume.css';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'HariharanResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillsCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'Redux' , 'ReactNative', 'Figma']
    },
    {
      title: 'Backend',
      skills: ['Python', 'MongoDB', 'PHP & MySQL', 'REST APIs', 'Firebase']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Gitlab', 'Zoho catalyst', 'CI/CD', 'EmailJS', 'Telegram BOT API', 'Vercel']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container resume-page"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="resume-container"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="page-title"
        >
          My Resume
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="resume-content"
        >
          <div className="resume-preview">
            <div className="pdf-icon">
              <FaFilePdf size={80} />
            </div>
            <h3>Professional Resume</h3>
            <p>Download my complete resume in PDF format</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="download-button"
          >
            <FaDownload className="download-icon" />
            Download Resume
          </motion.button>

          <div className="resume-skills">
            <h3>Skills Overview</h3>
            <div className="skills-categories">
              {skillsCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="skills-category"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <h4>{category.title}</h4>
                  <ul>
                    {category.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;