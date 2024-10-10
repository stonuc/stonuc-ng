"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function IdeaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row"
        >
          <motion.div
            variants={itemVariants}
            className="bg-blue-500 text-white p-8 md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-2xl font-bold mb-4">
              Ideas are very powerful, all human achievements started as an idea in someone&apos;s mind.
            </h2>
            <p className="text-xl">
              Choose the right technology partner for implementing your next big idea.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-1/2 md:pl-8">
            <p className="text-gray-700 text-lg">
              <span className="font-bold">[Stonuc]</span> is a software development agency, we help you transform your
              big idea into reality. We combine technologies, data science methods, and agile methodologies to deliver
              scalable and beautifully crafted solutions and products to our customers quickly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}