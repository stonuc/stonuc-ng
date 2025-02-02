"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const footerLinks = [
  {
    title: "Our Services",
    items: [
      {
        title: "Digital Product Development",
        subitems: [
          "E-commerce",
          "Fintech",
          "Healthtech",
          "E-Learning",
          "Retail",
          "Real estate",
          "Artificial Intelligence",
        ],
      },
      {
        title: "User Experience and Design",
        subitems: ["Customer Experience", "Engineering", "UI/UX Design"],
      },
      {
        title: "Engineering and Data Solutions",
        subitems: [
          "Process Automation",
          "Data Governance",
          "Technology Outsourcing",
          "Data Scientists",
          "Software Engineers",
        ],
      },
    ],
  },
  {
    title: "Career",
    items: [
      {
        title: "Join Our Team",
        subitems: [
          "Software Developer",
          "Product Manager",
          "UX/UI Designer",
          "Quality Assurance (QA) Engineer",
          "Data Analyst",
          "DevOps Engineer",
          "Project Manager",
        ],
      },
    ],
    link: "/career",
  },
];

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-gray-900 text-white py-12"
      id="footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              {column.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-4">
                  <h4 className="text-sm font-medium mb-2">{item.title}</h4>
                  <ul className="space-y-1">
                    {item.subitems?.map((subitem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={column.link || "#footer"}
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          {subitem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
        <motion.hr
          variants={itemVariants}
          className="border-t border-primary my-8"
        />
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <Link href={"/"} className="text-white font-bold text-xl">
            Stonuc Technologies
          </Link>
          <p>
            &copy; {new Date().getFullYear()} Stonuc or its affiliate. All
            rights reserved.
          </p>
          <div className="gap-2 flex items-center">
            <Link
              href="/privacy-policy"
              className="hover:text-white mt-4 md:mt-0"
            >
              Privacy Policy
            </Link>
            <span className="mt-3 md:mt-0">|</span>
            <Link href="/terms" className="hover:text-white mt-4 md:mt-0">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
