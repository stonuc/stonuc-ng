'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ContactSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const router = useRouter()

  return (
    <div className="flex justify-center items-center py-20 bg-gray-100" id="contact-section">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg"
      >
        <div className="flex flex-col md:flex-row items-center">
          <h2 className="text-3xl font-bold text-blue-600 md:mr-4">
            Contact Us Today
          </h2>
          <span className="text-gray-700 text-xl">to Talk About Your Needs</span>
        </div>
        <p className="mt-4 text-gray-600">
          Send us a brief about your needs and we will get back to you within 48 hours!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
          onClick={() => router.push("/contact")}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ContactSection;
