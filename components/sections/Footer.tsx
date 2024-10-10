"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

const footerLinks = [
  {
    title: "Our Services",
    items: [
      {
        title: "Digital Product Implementation",
        subitems: ["Startups", "E-commerce"],
      },
      {
        title: "Customer Experience Engineering",
        subitems: [
          "Experience Engineering",
          "Process Re-Engineering & Automation",
          "Customers Data Governance",
        ],
      },
      {
        title: "Technology & Engineering Outsourcing",
        subitems: ["Data Scientists", "UI/UX Designers", "Software Engineers"],
      },
    ],
  },
]

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

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
  }

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-gray-900 text-white py-12"
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
                        <Link href="#" className="text-gray-400 hover:text-white text-sm">
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
        <motion.hr variants={itemVariants} className="border-t border-blue-600 my-8" />
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <p>© {new Date().getFullYear()} Stonuc • All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-white mt-4 md:mt-0">
            Privacy Policy
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  )
}