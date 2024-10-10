"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const services = [
  {
    title: "Digital Product Implementation",
    icon: "/dg0.png?height=100&width=100",
  },
  {
    title: "Customer Experience Engineering",
    icon: "/dg1.png?height=100&width=100",
  },
  {
    title: "Technology & Engineering Outsourcing",
    icon: "/dg2.png?height=100&width=100",
  },
]

export default function OurServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

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
  }

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
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-blue-500 mb-6">
              Our Services
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-700 mb-4">
              We build world-class software by focusing on user experience combined with data analytics to deliver
              engaging web and mobile apps.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-700 mb-8">
              If you are an entrepreneur and are looking for a technology partner to work with and implement your next
              big idea, look no further, we are the right technology partner. We are agile, and we understand the
              dynamic nature of startups. We will work with you from the very beginning and continue our partnership to
              ensure your success.
            </motion.p>
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <Image src={service.icon} alt={service.title} width={100} height={100} className="mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
              ))}
            </motion.div>
            <motion.div variants={itemVariants} className="text-right">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Read More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}