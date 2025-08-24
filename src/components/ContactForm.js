import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/components/contact-form.css';

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ✅ Replace with your actual EmailJS credentials
  const SERVICE_ID = 'service_594fapq';
  const TEMPLATE_ID = 'template_oi12l8d';
  const USER_ID = 'Q5jBNxMc3U-VGiZMn';

  // ✅ Replace with your Telegram bot token and chat ID
  const TELEGRAM_TOKEN = '7667450657:AAF1yJdnS2cGEGbysvrYAieZIqaWy3UXTNU';
  const CHAT_ID = '6016965862';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getCurrentTime = () => {
    return new Date().toLocaleString(); // e.g., "6/11/2025, 2:34:56 PM"
  };

  const sendTelegramNotification = async () => {
    const text = `📩 *New Contact Form Submission:*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n🕒 *Time:* ${getCurrentTime()}\n💬 *Message:* ${formData.message}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: 'Markdown'
        })
      });
    } catch (err) {
      console.error('Telegram error:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ Inject time as hidden input for EmailJS
    const timeInput = document.createElement('input');
    timeInput.type = 'hidden';
    timeInput.name = 'time';
    timeInput.value = getCurrentTime();
    formRef.current.appendChild(timeInput);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(() => {
        setSubmitStatus('success');
        sendTelegramNotification();
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error); // Detailed error output
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
        formRef.current.removeChild(timeInput);
      });
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      method="POST"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="contact-form"
    >
      <motion.div className="form-group" whileHover={{ scale: 1.02 }}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </motion.div>

      <motion.div className="form-group" whileHover={{ scale: 1.02 }}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </motion.div>

      <motion.div className="form-group" whileHover={{ scale: 1.02 }}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
      </motion.div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="submit-btn"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="success-message"
        >
          ✅ Message sent successfully!
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="error-message"
        >
          ❌ Failed to send message. Please try again.
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
