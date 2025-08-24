import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaGithub, FaGitlab } from 'react-icons/fa';
import { SiTypescript, } from 'react-icons/si';
import './AnimatedSquare.css';

const AnimatedCube = () => {
  const techItems = [
    { icon: <FaReact size={50} />, color: '#61DAFB', name: 'React' },
    { icon: <FaNodeJs size={50} />, color: '#68A063', name: 'Node.js' },
    { icon: <FaJs size={50} />, color: '#F7DF1E', name: 'JavaScript' },
    { icon: <SiTypescript size={50} />, color: '#3178C6', name: 'TypeScript' },
    { icon: <FaGithub size={50} />, color: '#181717', name: 'GitHub' },
    { icon: <FaGitlab size={50} />, color: '#FC6D26', name: 'GitLab' }
  ];

  // Split into groups of 4 for each cube face
  const cubeFaces = [];
  for (let i = 0; i < techItems.length; i += 4) {
    cubeFaces.push(techItems.slice(i, i + 4));
  }

  return (
    <div className="cube-scene">
      <motion.div
        className="cube"
        animate={{
          rotateY: 360,
          rotateX: 20
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear"
        }}
        whileHover={{
          rotateX: 30,
          scale: 1.05,
          transition: { duration: 0.5 }
        }}
      >
        {cubeFaces.map((face, faceIndex) => (
          <motion.div
            key={faceIndex}
            className={`cube-face cube-face-${faceIndex + 1}`}
            initial={{ opacity: 0.8 }}
            whileHover={{ 
              opacity: 1,
              transition: { duration: 0.2 }
            }}
          >
            {face.map((tech, techIndex) => (
              <motion.div
                key={`${faceIndex}-${techIndex}`}
                className="tech-item"
                style={{ backgroundColor: tech.color }}
                whileHover={{ 
                  scale: 1.2,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
              >
                {tech.icon}
                <motion.span 
                  className="tech-tooltip"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ 
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2 }
                  }}
                >
                  {tech.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedCube; 