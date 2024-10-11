"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurProcess() {
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
      },
    },
  };

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
  };

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
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-6"
          >
            Our Process
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white mb-8">
            Stonuc&apos;s agile process focuses on delivering business value as
            quickly as possible. By collaborating with our clients, we adapt to
            changing business needs, delivering flexible and customized
            solutions efficiently.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-2">
            <motion.h3
              variants={itemVariants}
              className="text-white font-semibold"
            >
              Discovery & Planning
            </motion.h3>
            <motion.p variants={itemVariants} className="text-white">
              Understanding your business and identifying key goals.
            </motion.p>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-2">
            <motion.h3
              variants={itemVariants}
              className="text-white font-semibold"
            >
              Design & Development
            </motion.h3>
            <motion.p variants={itemVariants} className="text-white">
              Creating intuitive designs and developing efficient code.
            </motion.p>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-2">
            <motion.h3
              variants={itemVariants}
              className="text-white font-semibold"
            >
              Quality Assurance
            </motion.h3>
            <motion.p variants={itemVariants} className="text-white">
              Rigorous testing to ensure top-tier performance.
            </motion.p>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-2">
            <motion.h3
              variants={itemVariants}
              className="text-white font-semibold"
            >
              Deployment & Support
            </motion.h3>
            <motion.p variants={itemVariants} className="text-white">
              Ongoing post-launch support, security updates, and customer
              success strategies.
            </motion.p>
          </motion.div>
          {/* <motion.button
            variants={itemVariants}
            className="self-start bg-transparent border-2 border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-600 backdrop-blur-lg transition-colors"
          >
            Read More
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}
