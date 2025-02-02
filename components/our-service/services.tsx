"use client";
import { servicesData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { Dot } from "lucide-react";
import { useRef } from "react";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col overflow-hidden items-center py-16 bg-white"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={lineVariants}
        className="absolute left-[15%] transform -translate-x-1/2 w-[7px] bg-primary"
      />

      <div className="mb-12">
        <motion.h2
          className="text-primary text-3xl ml-10 pl-10 md:pl-0 md:ml-0 text-left font-bold mb-8"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg max-w-xs md:max-w-xl ml-10 pl-10 md:pl-0 md:ml-0 text-left"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          At Stonuc, we are committed to delivering quality software solutions
          on time. We combine user experience with data analytics to create
          engaging web and mobile applications tailored to your needs.
        </motion.p>
      </div>

      <div className="flex flex-col items-center space-y-12">
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="flex items-center flex-col md:flex-row gap-4 justify-between w-full max-w-4xl p-6 bg-gray-100 shadow-lg rounded-md relative"
          >
            <div className="absolute left-[15%] md:-left-6 -top-5 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full">
              {service.id}
            </div>

            <div className="w-full md:w-1/3 relative flex items-center justify-center bg-primary rounded-md  h-40">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover h-full w-full opacity-70"
              />
              <div className="absolute inset-2 -bottom-2 -right-2 flex  p-3 bg-primary/30">
                <p className="font-bold text-white mt-auto">{service.title}</p>
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="">
                {
                  service.subitem.map((sub, i) =>  (
                    <div className="ml-4 mt-2">
                      <h4 className="text-md inline-flex text-primary font-semibold">
                        <Dot/>
                        {sub.title}
                      </h4>
                      <p className="text-black ml-7">{sub.describtion}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
