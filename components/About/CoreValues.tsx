"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function CoreValues() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        duration: 0.8,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
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
          className="relative flex"
        >
          <motion.div
            variants={lineVariants}
            className="absolute left-0 top-0 bottom-0 w-px bg-primary origin-top"
          />
          <div className="pl-8 flex-1">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-semibold text-primary mb-4"
            >
              CORE VALUES
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 max-w-lg p-2 rounded"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-xl md:text-2xl font-bold"
                >
                  Quality Work
                  <hr className="border-primary/10 mb-3" />
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-gray-600 mb-4"
                >
                  We focus on delivering high-quality solutions that meet our
                  client&apos;s needs.
                </motion.p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50 max-w-lg p-2 rounded"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-xl md:text-2xl font-bold"
                >
                  Timely Delivery
                  <hr className="border-primary/10 mb-3" />
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-gray-600 mb-4"
                >
                  We make sure to meet deadlines and keep projects on track.
                </motion.p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50 max-w-lg p-2 rounded"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-xl md:text-2xl font-bold"
                >
                  Effective Communication
                  <hr className="border-primary/10 mb-3" />
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-gray-600 mb-4"
                >
                  We believe in clear and honest communication with our clients.
                </motion.p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50 max-w-lg p-2 rounded"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-xl md:text-2xl font-bold"
                >
                  Passion for Change
                  <hr className="border-primary/10 mb-3" />
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-gray-600 mb-4"
                >
                  We are committed to using technology to make a positive impact in the world.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
