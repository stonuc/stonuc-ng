"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.div variants={itemVariants} className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold text-blue-500 mb-2"
              >
                Contact Us Today
              </motion.h2>
              <motion.h3
                variants={itemVariants}
                className="text-xl text-gray-700 mb-4"
              >
                Tell us about your project, and we&apos;ll connect with you
                within 48 hours to discuss how Stonuc can help bring your vision
                to life.
              </motion.h3>
              <motion.p variants={itemVariants} className="text-gray-600 mb-6">
                Share a brief description of your needs, and our team will
                tailor the right solution for you.
              </motion.p>
              <motion.a
                href="/contact"
                variants={itemVariants}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Get in Touch

              </motion.a>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-blue-100 rounded-full" />
              <img
                src="/av.png?height=256&width=256"
                alt="Team member"
                className="absolute inset-2 rounded-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
