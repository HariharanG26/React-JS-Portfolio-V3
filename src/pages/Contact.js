import React, { useRef, useEffect, useMemo } from 'react'; // 👈 Added useMemo
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/components/contact.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Contact = () => {
  const mapRef = useRef(null);

  // ✅ Memoize position to ensure stable reference
  const position = useMemo(() => [12.958567, 80.193120], []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(position, 13);
    }
  }, [position]); // ✅ Now safe — position won't change between renders

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="page-container contact-page"
    >
      <motion.div variants={itemVariants} className="contact-header">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>
      </motion.div>

      <div className="contact-content">
        <motion.div variants={itemVariants} className="contact-form-container">
          <h2>Send Me a Message</h2>
          <ContactForm />
        </motion.div>

        <motion.div variants={itemVariants} className="contact-info-container">
          <div className="contact-details">
            <motion.div whileHover={{ scale: 1.03 }} className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>Dr. Ramamurthy Nagar, Gandhi St, Keelkattalai, Chennai 117</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+91 78240 31201</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>hariharanmadhav@gmail.com</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="contact-card">
              <div className="contact-icon">
                <FaClock />
              </div>
              <div className="contact-text">
                <h3>Working Hours</h3>
                <p>Mon-Fri: 9:30 AM – 6:30 PM</p>
                <p>Weekends: Closed</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="map-container"
          >
            <h3>Find Me Here</h3>
            <div className="map-wrapper">
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%', borderRadius: '15px' }}
                ref={mapRef}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>My Office Location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;