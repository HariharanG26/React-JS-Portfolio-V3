import React from 'react';
import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import skills  from '../constants/skills';
import '../styles/components/about.css';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container about-page"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-header"
      >
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">Get to know me better</p>
      </motion.div>

      <div className="about-content">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="about-text"
        >
          <h2>Who I Am</h2>
          <p>
            Front-end developer with a track record of success who can build and manage a better code base for reuse. 
            Eager to use abilities on a larger development team and has a strong passion for learning and development. 
            Passionate to take on more challenging issues and keep looking for methods to optimize user productivity in
            accordance with the needs of the product's users.
          </p>
          <p>
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
          </p>
          <p>
            As a programmer assigned to the Computer Consultancy Department at Tata Consultancy
            Services, May 2022–August 2023 (about one year and four months), I programmed,
            collaborated on projects, coded, debugged, and tested software solutions for clients. I also
            provided technical support and communicated with clients to meet their needs, enhancing my
            programming skills and emphasizing teamwork and communication. 
          </p>
          {/* <p>Currently Working as a IT & Operations Executive in a company known as Solvecorp from March - 2025 to present.</p> */}
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="skills-section"
        >
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillBadge key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;