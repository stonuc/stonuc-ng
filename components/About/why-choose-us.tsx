"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <section ref={ref} className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-blue-500 mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-center max-w-lg mb-8"
          >
            In today's fast-paced world, if you are not agile enough to
            implement your ideas quickly, you may fall behind. At Stonuc, we can
            deliver a Minimum Viable Product (MVP) for your idea in just 7
            weeks.
          </motion.p>
          {/* <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            <div className="w-48 h-48 relative">
              <Image
                src="/user.png?height=192&width=192"
                alt="Chris Emeka"
                width={192}
                height={192}
                className="rounded-full"
              />
            </div>
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold mb-2">Chris Emeka</h3>
              <p className="text-blue-500 mb-4">Founder</p>
              <p className="text-gray-600">
                Chris has been working in IT industry since 2004. He worked for
                big and prestigious organizations handling large-scale digital
                transformation projects such as Dubai Municipality. He was part
                of UAE federal level projects such as digital signature (he has
                a registered patent for digital signature using Emirates ID) and
                digital ID. Moreover, he handled complex process automation
                projects and made exceptional improvements for customer's
                journeys accessing the government services. Husam has worked in
                the private sector as well. He managed large scale data
                governance projects.
              </p>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
