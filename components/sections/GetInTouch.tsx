"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Linkedin, Twitter } from "lucide-react"

export default function Component() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
    <section 
      ref={ref} 
      className="bg-gray-900 text-white py-16 relative"
      style={{
        backgroundImage: "url('/map.png?height=1080&width=1920')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">
              Get in touch
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8">
              Our engineering office is in Skopje, the capital of North Macedonia. Skopje became an IT outsourcing
              destination for many of European companies due to the availability of high talented IT human resources
              with very competitive rates and low operation costs.
            </motion.p>
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Our Address</h3>
              <p>
                North Macedonia, Skopje,
                <br />
                City Centre, City Trade Centre, River Bank,
                <br />
                13th November St., Building 8, Entrance 1, Floor 9.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Twitter size={24} />
                </a>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="mb-2">hello@ryaktive.com</p>
              <p className="mb-2">(+971) 55 404 7444</p>
              <p>(+389) 71 286 273</p>
            </motion.div>
          </div>
          <motion.form variants={itemVariants} className="space-y-4">
            <motion.input
              variants={itemVariants}
              type="text"
              placeholder="Your Name"
              className="w-full p-2 bg-gray-800 bg-opacity-70 rounded"
            />
            <motion.input
              variants={itemVariants}
              type="email"
              placeholder="Your Email"
              className="w-full p-2 bg-gray-800 bg-opacity-70 rounded"
            />
            <motion.input
              variants={itemVariants}
              type="tel"
              placeholder="Your Phone number"
              className="w-full p-2 bg-gray-800 bg-opacity-70 rounded"
            />
            <motion.textarea
              variants={itemVariants}
              placeholder="Tell us what are you looking for ..."
              rows={4}
              className="w-full p-2 bg-gray-800 bg-opacity-70 rounded"
            />
            <motion.button
              variants={itemVariants}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Send
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}