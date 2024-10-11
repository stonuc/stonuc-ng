"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function VisionMissionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
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
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  return (
    <section ref={ref} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              variants={lineVariants}
              className="absolute top-0 left-0 w-1/3 h-px bg-primary origin-left"
            />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              OUR VISION
            </h2>
            <p className="text-xl text-gray-600">
              To empower businesses by providing top-quality software solutions
              that drive innovation and success.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              OUR MISSION
            </h2>
            <p className="text-xl text-gray-600">
              We work closely with our clients to help them achieve their goals
              through technology. We hire skilled professionals and support
              their growth to ensure excellent service.
            </p>
            <motion.div
              variants={lineVariants}
              className="absolute bottom-0 right-0 w-1/3 h-px bg-primary origin-right"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
