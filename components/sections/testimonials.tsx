"use client"

import { motion, useAnimationControls } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

const testimonials = [
  [
    {
      name: "Michael A.",
      role: "CEO of FinTech Innovators",
      image: "/user.png?height=100&width=100",
      text: "Working with Stonuc was a game-changer for our startup. They not only understood our vision but also helped us refine it into a scalable product. Their agile approach allowed us to launch our MVP in record time, and their continuous support has been invaluable as we grow. I can't recommend them highly enough!"
    },
    {
      name: "Gift Lewis.",
      role: "Founder of EnoShop",
      image: "/user.png?height=100&width=100",
      text: "Stonuc exceeded our expectations at every stage of the project. Their focus on user experience transformed our online platform into a seamless shopping experience for our customers. The team was communicative and proactive, making the entire development process enjoyable and efficient. We're thrilled with the results!",
    },
    {
      name: "David T.",
      role: "CTO of HealthTech Solutions",
      image: "/user.png?height=100&width=100",
      text: "The collaboration with Stonuc was exceptional. They brought a wealth of expertise in software development and UI/UX design, helping us create a health management app that users love. Their attention to detail and commitment to quality are unmatched. We look forward to continuing our partnership!",
    },
  ],
]

type Testimonials = typeof testimonials[0]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonials[0] }) => (
  <div className="bg-blue-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
    <div className="flex items-center mb-4">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={50}
        height={50}
        className="rounded-full mr-4"
      />
      <div>
        <h3 className="text-white font-semibold">{testimonial.name}</h3>
        <p className="text-gray-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-200 flex-grow">{testimonial.text}</p>
    <div className="text-gray-500 text-right mt-4">
        <Quote />
    </div>
  </div>
)

const MarqueeRow = ({ testimonials, direction, speed }: { testimonials: Testimonials, direction: 1 | -1, speed: number }) => {
  const controls = useAnimationControls()
  const totalWidth = testimonials.length * 320 // 320px is the width of each card plus gap

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: direction * -totalWidth,
        transition: { duration: speed, ease: "linear" }
      })
      controls.set({ x: 0 })
      animate()
    }
    animate()
  }, [controls, direction, speed, totalWidth])

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={controls}
        style={{ width: `${totalWidth * 2}px` }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="w-[300px] flex-shrink-0">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-4">Testimonials</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            What our customers have to say about us.
        </p>
        <div className="space-y-12">
          <MarqueeRow testimonials={testimonials[0]} direction={1} speed={60} />
        </div>
      </div>
    </section>
  )
}