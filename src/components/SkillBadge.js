import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill, index }) => {
  return (
    <motion.div
      className="skill-badge"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="skill-icon">
        {skill.icon}
      </div>
      <span className="skill-name">{skill.name}</span>
      <div className="skill-level">
        <div 
          className="skill-level-bar"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

export default SkillBadge;