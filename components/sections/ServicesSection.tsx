"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Digital Product Implementation",
    description: "From ideation to implementation, we build your product using the latest technology and design practices, delivering it fast and efficiently.",
    icon: "/dg0.png?height=100&width=100",
  },
  {
    title: "Customer Experience Engineering",
    description: "Creating intuitive, user-friendly designs that boost customer satisfaction and product engagement. Our UX designs are backed by data-driven insights to optimize user interaction.",
    icon: "/dg1.png?height=100&width=100",
  },
  {
    title: "Technology & Engineering Outsourcing",
    description: "Access a global pool of tech talent to meet your development needs without compromising quality or budget.",
    icon: "/dg2.png?height=100&width=100",
  },
];

export default function OurServices() {
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
  const router = useRouter();
  return (
    <section id="service" ref={ref} className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
          <div className="pl-8">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-blue-500 mb-6"
            >
              Our Services
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-700 mb-4">
              At Stonuc, we deliver premium software solutions with a strong
              focus on user engagement and data-driven insights.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-700 mb-8">
              Whether you're an entrepreneur looking for a technology partner or
              a business aiming to scale, our team is here to provide innovative
              solutions.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex items-center flex-col">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm ">{service.description}</p>
                </div>
              ))}
            </motion.div>
            <motion.div variants={itemVariants} className="text-right">
              <button
                onClick={() => router.push("/our-service")}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Read More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
