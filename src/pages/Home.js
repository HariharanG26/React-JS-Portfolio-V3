import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSquare from '../components/AnimatedSquare';
import '../styles/pages/home.css';

const Home = () => {
    // Simplified animation variants
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
        transition: {
          duration: 0.5
        }
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
            <motion.h1
              variants={itemVariants}
              className="home-title"
            >
              Hi, I'm <span className="highlight">Hariharan G</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="home-subtitle"
            >
              Programmer | Digital Infrastructure Services | Internal IT
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="home-description"
            >
              <p>
                With over 1.4 years of experience in TCS as IT support Network Engineer designated as programmer...
              </p>
            </motion.div>
  
            <motion.div
              variants={itemVariants}
              className="home-cta"
            >
            </motion.div>
          </div>
          {/* <br></br> */}
          <motion.div
            variants={itemVariants}
            className="home-animation"
          >
            <AnimatedSquare />  
          </motion.div>
        </div>
      </motion.div>
    );
  };
  
  export default Home;