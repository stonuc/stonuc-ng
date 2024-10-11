"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function PhilosophyOfOurName() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        duration: 0.8,
      },
    },
  }

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
      },
    },
  }

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative flex"
        >
          <motion.div
            variants={lineVariants}
            className="absolute left-0 top-0 bottom-0 w-px bg-primary origin-top"
          />
          <div className="pl-8 flex-1">
            <motion.h2 variants={itemVariants} className="text-4xl font-light text-gray-800 mb-4">
              The Philosophy of <span className="text-primary font-normal">Our Name</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 mb-4">
              Our name Stonuc describes our core values. Our name comes from the English word Reactive which is linked
              to the concept of Reactive Systems in software engineering. A Reactive system is a system that is
              Responsive in a timely manner if at all possible, Resilient which means staying responsive in the face of
              failure, and Elastic System that stays responsive under varying workload. Check the{" "}
              <Link href="#" className="text-primary hover:underline">
                link
              </Link>{" "}
              for more information on reactive concept.
            </motion.p>
            <motion.div variants={itemVariants} className="flex items-center justify-center my-8">
              <span className="text-primary text-6xl">[</span>
              <span className="text-black text-8xl font-bold">S</span>
              <span className="text-primary text-6xl">]</span>
            </motion.div>
            <motion.p variants={itemVariants} className="text-gray-600 mb-4">
              In Stonuc, the letter <span className="font-bold">e</span> became{" "}
              <span className="font-bold">y</span> which shows our agile nature and lack of hesitation to make any
              change to meet our clients&apos; business needs. The letter <span className="font-bold">c</span> became{" "}
              <span className="font-bold">k</span> in Stonuc which is how the c is pronounced /k/ in the word
              Reactive, and this reflects our transparency nature, we show the reality to our clients whatever it is,
              which is the foundation of the trust in our business relationship; so here is{" "}
              <span className="text-primary">[Stonuc]</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}