import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projects  from '../constants/projects';
import '../styles/pages/projects.css';

const Projects = () => {
  return React.createElement(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.5 },
      className: 'page-container projects-page'
    },
    React.createElement(
      motion.h1,
      {
        initial: { y: -50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5 },
        className: 'page-title'
      },
      'My Projects'
    ),
    React.createElement(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, delay: 0.2 },
        className: 'projects-grid'
      },
      projects.map((project, index) => (
        React.createElement(ProjectCard, {
          key: project.id,
          project: project,
          index: index
        })
      ))
    ),
    React.createElement(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, delay: 0.4 },
        className: 'github-stats'
      },
      React.createElement('h3', null, 'My GitHub Contributions'),
      React.createElement(
        'div',
        { className: 'stats-container' },
        React.createElement(
          motion.img,
          {
            src: 'https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=default',
            alt: 'GitHub Stats',
            whileHover: { scale: 1.02 }
          }
        ),
        React.createElement(
          motion.img,
          {
            src: 'https://github-readme-streak-stats.herokuapp.com/?user=yourusername&theme=default',
            alt: 'GitHub Streak',
            whileHover: { scale: 1.02 }
          }
        )
      )
    )
  );
};

export default Projects;