"use client"
import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';

const WhoWeAreSection = () => {
  const [ref, isInView] = useInView(0.4); // Trigger when 10% is in view

  const fadeIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-20 bg-white relative"
    >
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-sky-600 mb-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeIn}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="text-gray-700 text-base md:text-lg mb-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeIn}
        >
          Stonuc is a software development agency. We help you transform
          your big idea into reality. We combine proven and up-to-date
          technologies, user experience (UX) design techniques, data science
          methods, and agile methodologies to quickly deliver scalable and
          beautifully crafted solutions and products to our customers.
        </motion.p>
        <motion.button
          className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition duration-200"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeIn}
        >
          Read More
        </motion.button>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-sky-600 overflow-hidden flex items-center justify-center shadow-lg">
          <img
            src="/who.png" 
            alt="Who We Are"
            className="w-full h-full object-cover scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
