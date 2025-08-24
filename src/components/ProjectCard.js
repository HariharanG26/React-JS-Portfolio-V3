import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return React.createElement(
    motion.div,
    {
      className: 'project-card',
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.5, delay: index * 0.1 },
      whileHover: { y: -5 }
    },
    React.createElement(
      'div',
      { className: 'project-image-container' },
      React.createElement('img', {
        src: project.image,
        alt: project.title,
        className: 'project-image'
      }),
      React.createElement(
        'div',
        { className: 'project-links' },
        project.github && React.createElement(
          'a',
          {
            href: project.github,
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': 'GitHub Repository'
          },
          React.createElement(FaGithub, null)
        ),
        project.demo && React.createElement(
          'a',
          {
            href: project.demo,
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': 'Live Demo'
          },
          React.createElement(FaExternalLinkAlt, null)
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'project-content' },
      React.createElement('h3', null, project.title),
      React.createElement('p', null, project.description),
      React.createElement(
        'div',
        { className: 'project-tech' },
        project.technologies.map((tech, i) => (
          React.createElement('span', { key: i }, tech)
        ))
      )
    )
  );
};

export default ProjectCard;