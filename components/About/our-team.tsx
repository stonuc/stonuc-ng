"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const teamMembers = [
  {
    name: "Chris Emeka",
    role: "Project manager",
    image: "/user.png?height=200&width=200",
  },
  { name: "Samuel Ajayi", role: "CTO", image: "/user.png?height=200&width=200" },
  {
    name: "Joshua Bamidele",
    role: "Frontend Developer",
    image: "/user.png?height=200&width=200",
  },
  {
    name: "Caleb Jimmy",
    role: "Lead Developer",
    image: "/user.png?height=200&width=200",
  },
];

export default function OurTeam() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  const imageVariants = {
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
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="w-full flex flex-col items-center">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-blue-500 mb-4"
            >
              Our Team
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-lg mb-12"
            >
              We hire skilled professionals who are dedicated to solving
              problems and delivering great results. Our team is focused on
              being innovative and efficient in everything we do.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <motion.div
                  variants={imageVariants}
                  className="w-40 h-40 rounded-full border-2 border-blue-500 overflow-hidden mb-4"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </motion.div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
