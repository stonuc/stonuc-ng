"use client"
import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';

const ServicesSection = () => {
  const [ref, isInView] = useInView(0.4); // Trigger when 10% is in view

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={ref}
      className="bg-white p-8 md:p-16 lg:p-20 text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-sky-600 mb-4"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeIn}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="my-4 text-gray-700 text-left md:text-lg"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeIn}
      >
        We build world-class software by focusing on user experience combined
        with data analytics to deliver engaging web and mobile apps. If you are
        an entrepreneur and are looking for a technology partner to work with
        and implement your next big idea, look no further, we are the right
        technology partner. We are agile, and we understand the dynamic nature
        of startups. We will work with you from the very beginning and continue
        our partnership to ensure your success.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="service-item p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/dg0.png"
            alt="Digital Product Implementation"
            className="mx-auto mb-2 h-16 w-16 md:h-24 md:w-24 object-cover"
          />
          <h3 className="text-lg font-semibold">Digital Product Implementation</h3>
        </div>
        <div className="service-item p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/dg1.png"
            alt="Customer Experience Engineering"
            className="mx-auto mb-2 h-16 w-16 md:h-24 md:w-24 object-cover"
          />
          <h3 className="text-lg font-semibold">Customer Experience Engineering</h3>
        </div>
        <div className="service-item p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/dg2.png"
            alt="Technology & Engineering Outsourcing"
            className="mx-auto mb-2 h-16 w-16 md:h-24 md:w-24 object-cover"
          />
          <h3 className="text-lg font-semibold">Technology & Engineering Outsourcing</h3>
        </div>
      </div>
      <motion.button
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg transition duration-200 hover:bg-blue-600"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeIn}
      >
        Read More
      </motion.button>
    </section>
  );
};

export default ServicesSection;
