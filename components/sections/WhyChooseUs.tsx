"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const features = [
  {
    title: "Agile Delivery",
    description: "In today's digital disrupted world, if you are not agile enough, you won't survive. Here at Hyperlink Infosystem, we make sure that you are ahead. We at Hyperlink can deliver the MVP for your idea in just seven weeks.",
    icon: "/w0.png?height=80&width=80",
  },
  {
    title: "Quality",
    description: "Quality is part of our DNA. Quality is not a marketing word we use to please our clients; quality is part of each step in our process. We follow best practices for software development and have multiple levels of quality checks and deliverables. Our testing starts with writing unit tests of each small function of code to automated functional testing and manual QA. We follow CI/CD process to automate our release process to eliminate human errors.",
    icon: "/w1.png?height=80&width=80",
  },
  {
    title: "Security",
    description: "The threat of cyber-attacks and data loss is growing everyday; a security breach will cost you much more than you think. At Hyperlink, our cybersecurity partners do a full security audit of our products before releasing them. We use certified secure cloud services to ensure that the deliveblue service or product continues to be secure.",
    icon: "/w2.png?height=80&width=80",
  },
  {
    title: "Best Value for Money",
    description: "Our engineering office is located in Skopje, the capital of North Macedonia. With a wide pool of young talented IT engineers and low operation costs, this gives us the advantage to deliver high quality products with comparably low cost.",
    icon: "/w3.png?height=80&width=80",
  },
]

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

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
    <section id="whychooseus" ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-2"
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-blue-500 mx-auto mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <img src={feature.icon} alt="" className="w-20 h-20 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* <motion.div variants={itemVariants} className="text-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Read More
            </button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}