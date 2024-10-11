"use client";
import { motion } from "framer-motion";

const termsContent = [
  {
    title: "Welcome to Stonuc",
    description:
      "Please read these Terms of Use carefully before using our website (https://www.stonuc.atoovis.com/) (Site). By using this Site, you agree to the following terms. If you disagree, please do not use the Site.",
  },
  {
    title: "Overview of Services",
    list: [
      "Filling out the contact form on the Site",
      "Chatting with us live",
      "Emailing us at contact@stonuc.atoovis.com",
      "Calling our mobile number",
    ],
  },
  {
    title: "Termination of Access ",
    description:
      "We may suspend or end your access to the Site if you violate these Terms. Some sections of these Terms will continue to apply even after termination.",
  },
  {
    title: "Intellectual Property.",
    description:
      "All content on the Site, including text, images, and trademarks, is owned by Stonuc or licensed to us. You may not use, copy, or share any content without our written consent. You can use the content for personal, non-commercial purposes only.",
  },
  {
    title: "What You Can’t ",
    description: "Do You agree not to",
    list: [
      "Use the Site in ways that violate these Terms.",
      "Modify, sell, or distribute content from the Site.",
      "Use automated tools to access the Site.",
      "Engage in activities that harm or disrupt the Site.",
    ],
  },
  {
    title: "Privacy Matters",
    description:
      "By using the Site, you agree to our [Privacy Policy](https://www.stonuc.atoovis.com/privacy-policy), which explains how we collect and use your information.",
  },
  {
    title: "Third-Party Links",
    description:
      "Our Site may contain links to other websites. We do not endorse or take responsibility for their content. If you link to our Site, please ensure it’s appropriate.",
  },
  {
    title: "Changes to Terms",
    description:
      "We may update these Terms at any time without notice. Your continued use of the Site means you accept the new Terms.",
  },
  {
    title: "Disclaimers and Limitations",
    description:
      "Stonuc provides the Site and content [as-is.] We are not liable for any damages or losses from your use of the Site. Your remedy for dissatisfaction is to stop using the Site.",
  },
  {
    title: "User Responsibilities",
    description:
      "You agree to indemnify Stonuc and its affiliates from any claims or damages that arise from your use of the Site or your violation of these Terms.",
  },
  {
    title: "Governing Law",
    description:
      "These Terms are governed by the laws of the State of Delaware. Any disputes will be resolved in Delaware courts.",
  },
  {
    title: "Contact Us",
    description: "If you have questions about these Terms, please reach out",
    list: ["Email: contact@stonuc.atoovis.com", "Phone: +2348104092397"],
  },
  {
    title: "Thank you for using Stonuc!",
  },
];

const TermsAndConditions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-gray-600 mb-4">Last Updated: October 10, 2024</p>
      {termsContent.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 * (index + 1), duration: 0.5 }}
          className="mb-4"
        >
          <h2 className={`text-lg md:text-2xl text-blue-500 font-semibold mb-2 `}>
            {section.title}
          </h2>
          {section.description && (
            <p className="text-gray-600 mb-2 text-wrap max-w-sm md:max-w-xl">
              {section.description}
            </p>
          )}
          {section.list && (
            <ul className="list-disc list-inside mb-4">
              {section.list.map((item, idx) => (
                <li key={idx} className="max-w-xs md:max-w-xl">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TermsAndConditions;
