"use client"

import { motion, useAnimationControls, useDragControls, PanInfo } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const testimonials = [
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
]

type Testimonial = typeof testimonials[0]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
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

const TestimonialsCarousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const controls = useAnimationControls()
  const dragControls = useDragControls()
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const cardWidth = 300
  const cardGap = 24
  const totalWidth = testimonials.length * (cardWidth + cardGap)

  const animate = async () => {
    await controls.start({
      x: -totalWidth,
      transition: { duration: 30, ease: "linear" }
    })
    controls.set({ x: 0 })
    animate()
  }

  useEffect(() => {
    if (!isPaused) {
      animate()
    } else {
      controls.stop()
    }
  }, [isPaused])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const change = info.offset.x
    const velocity = info.velocity.x
    
    if (Math.abs(change) > cardWidth / 4 || Math.abs(velocity) > 200) {
      const direction = change < 0 ? 1 : -1
      const newIndex = (currentIndex + direction + testimonials.length) % testimonials.length
      setCurrentIndex(newIndex)
      controls.start({ x: -newIndex * (cardWidth + cardGap) })
    } else {
      controls.start({ x: -currentIndex * (cardWidth + cardGap) })
    }
  }

  return (
    <div 
      ref={containerRef}
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-6"
        style={{ width: `${totalWidth * 2}px` }}
        animate={controls}
        drag="x"
        dragControls={dragControls}
        dragConstraints={containerRef}
        onDragEnd={handleDragEnd}
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
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  )
}