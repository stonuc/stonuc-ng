"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Agile Delivery",
    description:
      "Agile Approach Our agile methodologies ensure rapid development and adaptability to market changes. Your MVP can be ready in weeks, not months, ensuring you stay ahead of the competition.",
    icon: "/w0.png?height=80&width=80",
  },
  {
    title: "Quality",
    description:
      "Uncompromised Quality At Stonuc, quality is embedded into every phase of our process. From writing unit tests to functional testing and manual QA, we ensure a flawless final product.",
    icon: "/w1.png?height=80&width=80",
  },
  {
    title: "Security",
    description:
      "Strong Security Protocols Security is a top priority at Stonuc. We conduct rigorous security audits and use certified secure cloud services to keep your data safe from breaches. Our team holds certifications in advanced cybersecurity measures, ensuring that your product is always protected.",
    icon: "/w2.png?height=80&width=80",
  },
  {
    title: "Best Value for Money",
    description:
      "Stonuc offers premium solutions at competitive rates. By leveraging our global talent pool, we provide high-quality service while maintaining cost-efficiency.  We give you the best value for your money while meeting deadlines.",
    icon: "/w3.png?height=80&width=80",
  },
  {
    title: "Seamless Communication",
    description:
      "We assign a dedicated project manager to every client to ensure clear and consistent communication throughout your project. You’ll always know your project's progress and can easily contact our team for updates.",
    icon: "/seamless.webp?height=80&width=80",
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
            className="w-24 h-1 bg-primary mx-auto mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex space-x-4"
              >
                <div className="flex-shrink-0">
                  <img
                    src={feature.icon}
                    alt=""
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* <motion.div variants={itemVariants} className="text-center">
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary transition-colors">
              Read More
            </button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
