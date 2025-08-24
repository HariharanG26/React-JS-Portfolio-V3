import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return React.createElement(
    motion.button,
    {
      className: 'theme-toggle',
      onClick: toggleTheme,
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      'aria-label': `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`
    },
    theme === 'light' ? (
      React.createElement(
        motion.div,
        {
          key: 'moon',
          initial: { rotate: -30, opacity: 0 },
          animate: { rotate: 0, opacity: 1 },
          exit: { rotate: 30, opacity: 0 },
          transition: { duration: 0.2 }
        },
        React.createElement(FaMoon, null)
      )
    ) : (
      React.createElement(
        motion.div,
        {
          key: 'sun',
          initial: { rotate: 30, opacity: 0 },
          animate: { rotate: 0, opacity: 1 },
          exit: { rotate: -30, opacity: 0 },
          transition: { duration: 0.2 }
        },
        React.createElement(FaSun, null)
      )
    )
  );
};

export default ThemeToggle;