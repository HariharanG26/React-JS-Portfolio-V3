import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import '../styles/components/footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/HariharanG26' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/hari-haran-a937371b2/' },
    { icon: <FaYoutube />, url: 'https://www.youtube.com/@RoronoaHari99' },
    { icon: <FaEnvelope />, url: 'mailto:hariharanmadhav@gmail.com' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="footer"
    >
      <div className="footer-container">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Social link ${index + 1}`}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <div className="footer-text">
          <p>© {new Date().getFullYear()} Hariharan G. All rights reserved.</p>
          <p>Built with React and ❤️</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;