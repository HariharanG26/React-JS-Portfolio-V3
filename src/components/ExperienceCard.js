import React from 'react';
import { motion } from 'framer-motion';
import '..//styles/components/experience-card.css';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="experience-header">
        <h3>{experience.position}</h3>
        <span className="experience-date">{experience.date}</span>
      </div>
      <div className="experience-company">
        <span className="company-name">{experience.company}</span>
        {experience.location && (
          <span className="company-location">{experience.location}</span>
        )}
      </div>
      {experience.description && (
        <p className="experience-description">{experience.description}</p>
      )}
      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <div className="experience-responsibilities">
          <strong>Key Responsibilities:</strong>
          <ul>
            {experience.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="experience-technologies">
          <strong>Technologies Used:</strong>
          <div className="tech-tags">
            {experience.technologies.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;