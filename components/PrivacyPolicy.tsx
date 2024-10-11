"use client";
import { motion } from "framer-motion";

const privacyPolicyData = [
  {
    title: "What Personal Data We Collect",
    description: "",
    listItems: [
      "Contact Information: Name, email address, phone number, and postal address.",
      "Account Information: Username, password, and preferences.",
      "Payment Information: Credit card details and billing address for processing transactions.",
      "Usage Data: Information about how you use our website and services, such as IP address, browser type, and pages visited.",
    ],
  },
  {
    title: "Why We Collect Personal Data",
    description: "We collect personal data for the following purposes:",
    listItems: [
      "Service Provision: To provide and maintain our services.",
      "Communication: To communicate with you about your account and respond to inquiries.",
      "Marketing: To send you promotional materials and updates about our services.",
      "Analysis: To analyze usage trends and improve our services.",
    ],
  },
  {
    title: "Why We Share Personal Data",
    description: "We may share your personal data with the following parties",
    listItems: [
      "Service Providers: Third-party vendors who assist us in operating our services and conducting our business (e.g., payment processors, hosting providers).",
      "Compliance: To comply with applicable laws, regulations, or legal requests.",
      "Business Transfers: In connection with a merger, sale, or acquisition of all or a portion of our assets.",
    ],
  },
  {
    title: "Cookies",
    description:
      "We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us recognize you and improve our services.",
    listItems: [
      "You can manage your cookie preferences through your browser settings. For more information about our cookie usage, please see our Cookie Policy.",
    ],
  },
  {
    title: "Your Rights",
    description: "You have rights regarding your personal data, including",
    listItems: [
      "Access: Request to see your personal data.",
      "Correction: Ask us to update or correct your information if it’s wrong.",
      "Deletion: Request that we delete your personal data.",
      "Opt-Out: Unsubscribe from marketing communications at any time.",
      "Consent Withdrawal: You can withdraw consent for data processing when applicable.",
    ],
  },
  {
    title:
      "To exercise your rights, please email us at contact@stonuc.atoovis.com. We aim to respond within 30 days.",
    description: "",
    listItems: [],
    fontSize: "!text-[14px]",
  },
  {
    title: "Data Retention",
    description:
      "We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. If you request the deletion of your data, we will remove it unless we have a legitimate reason to retain it.",
    listItems: [],
  },
  {
    title: "Changes to This Privacy Policy",
    description:
      "We may update this Privacy Policy from time to time. We will notify you of any significant changes via email or through a notice on our website. Your continued use of our services after any changes indicates your acceptance of the new Privacy Policy.",
    listItems: [],
  },
  {
    title: " Contact Us",
    description:
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at",
    listItems: ["Email: contact@stonuc.atoovis.com"],
  },
  {
    title: "Thank you for trusting Stonuc with your personal data.",
    description: "",
    listItems: [],
  },
];

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">Last Updated: October 10, 2024</p>
      <p className="text-gray-800 mb-4">
        This Privacy Policy outlines how Stonuc collects, uses, and protects
        your personal information when you use our services. We are committed to
        safeguarding your privacy and ensuring that your personal data is
        handled responsibly.
      </p>
      {privacyPolicyData.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 * (index + 1), duration: 0.5 }}
          className="mb-6"
        >
          <h2
            className={`text-lg md:text-2xl text-primary font-semibold mb-2 ${
              section.fontSize || ""
            }`}
          >
            {section.title}
          </h2>
          {section.description && (
            <p className="text-gray-600 mb-2 text-wrap max-w-sm md:max-w-xl">
              {section.description}
            </p>
          )}
          {section.listItems && (
            <ul className="list-disc list-inside mb-4">
              {section.listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="max-w-xs md:max-w-xl">
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

export default PrivacyPolicy;
