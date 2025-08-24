import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/education-card.css';

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      className="education-card"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="education-header">
        <h3>{education.degree}</h3>
        <span className="education-date">{education.date}</span>
      </div>
      <div className="education-institution">
        <span className="institution-name">{education.institution}</span>
        {education.location && (
          <span className="institution-location">{education.location}</span>
        )}
      </div>
      {education.description && (
        <p className="education-description">{education.description}</p>
      )}
      {education.gpa && (
        <div className="education-gpa">
          <strong>GPA:</strong> {education.gpa}
        </div>
      )}
      {education.courses && education.courses.length > 0 && (
        <div className="education-courses">
          <strong>Key Courses:</strong>
          <ul>
            {education.courses.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default EducationCard;