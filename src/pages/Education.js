import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from '../components/EducationCard';
import  education  from '../constants/education';
import '../styles/pages/education.css';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container education-page"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="page-title"
      >
        My Education
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="education-list"
      >
        {education.map((edu, index) => (
          <EducationCard key={edu.id} education={edu} index={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="certifications-section"
      >
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {education[0].certifications?.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
              <span>{cert.date}</span>
              {cert.credentialId && (
                <p className="credential-id">Credential ID: {cert.credentialId}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;