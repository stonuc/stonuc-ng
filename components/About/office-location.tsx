"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function OfficeLocation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section ref={ref} className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="w-full max-w-3xl mb-8">
            <Image
              src="/location.jpg?height=400&width=800"
              alt="office"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="text-center max-w-2xl">
            <p className="text-xl mb-4">
              Our engineering office is located in Lagos, former capital of Nigeria.
            </p>
            <p className="text-lg">
              Lagos became an IT outsourcing destination for many of European IT companies due to the availability of
              highly talented IT human resources with very competitive rates and low operation costs
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}