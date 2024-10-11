"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function ContactHeader() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gray-900"
      >
        <Image
          src="/workspace.jpg?height=1080&width=1920"
          alt="Office team working"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay opacity-50"
        />
      </motion.div>
      <div className="absolute inset-0 " />
      <div className="container mx-auto px-4 h-full flex items-end pb-12">
        <div className="relative">
          <motion.div
            variants={itemVariants}
            className="absolute -top-12 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary"
          />
          <motion.h1
            variants={itemVariants}
            className="text-2xl capitalize md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Let&apos;s build something amazing together
          </motion.h1>
        </div>
      </div>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)",
        }}
      />
    </motion.section>
  )
}