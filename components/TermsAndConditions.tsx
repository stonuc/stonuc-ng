"use client"
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-4"
      >
        Welcome to Stonuc! Please read these Terms of Use carefully before using our website. By using this Site, you agree to the following terms. If you disagree, please do not use the Site.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Overview of Services</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Filling out the contact form on the Site</li>
          <li>Chatting with us live</li>
          <li>Emailing us at contact@stonuc.atoovis.com</li>
          <li>Calling our mobile number</li>
        </ul>
      </motion.div>

      {/* Add more sections as needed, following the same structure */}
    </motion.div>
  );
};

export default TermsAndConditions;
