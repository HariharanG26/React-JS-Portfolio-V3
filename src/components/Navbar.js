import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/components/navbar.css';

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/experience', name: 'Experience' },
  { path: '/education', name: 'Education' },
  { path: '/projects', name: 'Projects' },
  { path: '/resume', name: 'Resume' },
  { path: '/contact', name: 'Contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return React.createElement(
    motion.nav,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.5 },
      className: 'navbar'
    },
    React.createElement(
      'div',
      { className: 'navbar-container' },
      React.createElement(
        motion.div,
        {
          className: 'logo',
          whileHover: { scale: 1.1 }
        },
        React.createElement(NavLink, { to: '/' }, 'Hariharan G')
      ),
      
      // Mobile menu button
      React.createElement(
        'button',
        {
          className: 'mobile-menu-button',
          onClick: toggleMobileMenu,
          'aria-label': isMobileMenuOpen ? 'Close menu' : 'Open menu'
        },
        isMobileMenuOpen 
          ? React.createElement(FaTimes, { className: 'menu-icon' })
          : React.createElement(FaBars, { className: 'menu-icon' })
      ),
      
      // Navigation links (desktop and mobile)
      React.createElement(
        'div',
        { 
          className: `nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}` 
        },
        navItems.map((item, index) => (
          React.createElement(
            motion.div,
            {
              key: item.path,
              initial: { y: -20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 0.3, delay: 0.1 * index },
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 }
            },
            React.createElement(
              NavLink,
              {
                to: item.path,
                className: ({ isActive }) => isActive ? 'nav-link active' : 'nav-link',
                onClick: () => setIsMobileMenuOpen(false)
              },
              item.name
            )
          )
        )),
        // Theme toggle in mobile menu
        React.createElement(
          'div',
          { className: 'mobile-theme-toggle' },
          React.createElement(ThemeToggle, null)
        )
      ),
      
      // Theme toggle (desktop)
      React.createElement(
        'div',
        { className: 'nav-actions' },
        React.createElement(ThemeToggle, null)
      )
    )
  );
};

export default Navbar;