"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WhoWeAre() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const router = useRouter();

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  return (
    <section id="whoweare" ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div
            variants={circleVariants}
            className="relative  w-64 h-64 md:w-96 md:h-96 mb-8 md:mb-0"
          >
            <div className="absolute overflow-hidden inset-0 border-4 border-blue-500 rounded-full" />
            <Image
              src="/main-team.png?height=384&width=384"
              alt="Team working together"
              width={384}
              height={384}
              className=" h-full w-full object-cover rounded-full"
            />
          </motion.div>
          <div className="md:ml-12 md:w-1/2">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-blue-500 mb-4"
            >
              Who We Are
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 mb-4">
              Stonuc is a business and software consultation firm offering a
              wide range of software development and UI/UX services.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-xl font-semibold mb-4"
            >
              We bring your vision to life by combining cutting-edge technology,
              user experience design, and agile methodologies.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 mb-6">
              Our expertise lies in transforming ideas into fully functional and
              scalable software products, delivered quickly and tailored to your
              business needs. We work with clients across multiple industries,
              including e-commerce, fintech, healthcare, and artificial
              intelligence ensuring that our solutions are tailored to specific
              market demands.
            </motion.p>
            <motion.button
              variants={itemVariants}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              onClick={() => router.push("/contact")}
            >
              Get Started
            </motion.button>
          </div>
          <motion.div
            variants={itemVariants}
            className="hidden md:block absolute right-0 top-0 bottom-0 w-8 text-blue-500 text-6xl"
          >
            ]
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
