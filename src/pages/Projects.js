import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projects from '../constants/projects';
import '../styles/pages/projects.css';

const Projects = () => {
  const githubUsername = 'HariharanG26';

  // Works with both CRA and Vite builds
  const token =
    (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GITHUB_TOKEN) ||
    (typeof process !== 'undefined' && process.env && process.env.REACT_APP_GITHUB_TOKEN) ||
    '';

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&count_private=true&cache_seconds=86400${token ? `&token=${token}` : ''}`;

  // Stable contributions heatmap image (doesn't depend on GitHub API rate at 3rd-party server)
  const contributionsUrl = `https://ghchart.rshah.org/${githubUsername}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container projects-page"
    >
      {/* Page Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="page-title"
      >
        My Projects
      </motion.h1>

      {/* Project Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="projects-grid"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {/* GitHub Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="github-stats"
      >
        <h3>My GitHub Contributions</h3>
        <div className="stats-container">
          {/* Stats Card (token-aware, cached) */}
          <motion.img
            src={statsUrl}
            alt="GitHub Stats"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            whileHover={{ scale: 1.02 }}
            onError={(e) => {
              // Local fallback image (put one in /public)
              e.currentTarget.src = '/fallback-stats.png';
            }}
          />

          {/* Contributions Heatmap (stable endpoint) */}
          <motion.img
            src={contributionsUrl}
            alt="GitHub Contributions Heatmap"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            whileHover={{ scale: 1.02 }}
            onError={(e) => {
              // Local fallback image (put one in /public)
              e.currentTarget.src = '/fallback-contribs.png';
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
