"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function OurProcess() {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section id="process" ref={ref} className="relative h-screen">
      <div className="absolute inset-0 bg-gray-800">
        <img
          src="/office.webp?height=1080&width=1920"
          alt="Office chair"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-transparent backdrop-blur-lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="h-full flex flex-col justify-center p-8 md:p-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-6">
            Our Process
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white mb-8">
            In today's digitally disrupted world, if you are not agile enough to implement your idea in weeks instead of
            months, then you are behind. In Ryaktive, we use agile methodologies to deliver the business value as soon
            as possible. Agile methodology is all about delivering the business value instead of just following the
            agreed requirements in the signed contract. We believe that the nature of our customers' business is
            dynamic, and we chose to be agile when working with our customers and respond positively to our customers'
            dynamic requirements.
          </motion.p>
          <motion.button
            variants={itemVariants}
            className="self-start bg-transparent border-2 border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-600 backdrop-blur-lg transition-colors"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}