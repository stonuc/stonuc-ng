"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, InstagramIcon, Linkedin, Twitter } from "lucide-react";
import { useState, useTransition } from "react";
import { submitContactForm } from "@/actions/submitForm";

type FormErrors = {
  [key: string]: string[];
};

export default function Component() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors | null>(null);

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

  const handleSubmit = async (formData: FormData) => {
    setFormErrors(null);
    setFormStatus(null);
    startTransition(async () => {
      const result = await submitContactForm(formData);
      if ("errors" in result) {
        setFormErrors(result.errors as FormErrors);
      } else {
        setFormStatus(result);
      }
    });
  };

  return (
    <section ref={ref} className="bg-gray-900 text-white py-16 relative"
      style={{
        backgroundImage: "url('/map.png?height=1080&width=1920')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-6"
            >
              Get in touch
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8">
              Our engineering office is in Skopje, the capital of North
              Macedonia. Skopje became an IT outsourcing destination for many of
              European companies due to the availability of high talented IT
              human resources with very competitive rates and low operation
              costs.
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
                <a
                  href="https://www.facebook.com/profile.php?id=61552838184028&mibextid=ZbWKwL"
                  className="text-white hover:text-gray-300"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/stonuc_technologies?igsh=ZWJtejNobDg5azdo"
                  className="text-white hover:text-gray-300"
                >
                  <InstagramIcon size={24} />
                </a>
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
              <p className="mb-2">hello@stonuc.com</p>
              <p className="mb-2">(+234) 810 409 2397</p>
              <p>(+234) 302 919 1709</p>
            </motion.div>
          </div>
          <motion.form
            variants={itemVariants}
            action={handleSubmit}
            className="space-y-4"
          >
            <div>
              <motion.input
                variants={itemVariants}
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 bg-gray-800 rounded"
                required
                minLength={2}
              />
              {formErrors?.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.name[0]}
                </p>
              )}
            </div>
            <div>
              <motion.input
                variants={itemVariants}
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 bg-gray-800 rounded"
                required
              />
              {formErrors?.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.email[0]}
                </p>
              )}
            </div>
            <div>
              <motion.input
                variants={itemVariants}
                type="tel"
                name="phone"
                placeholder="Your Phone number (e.g  +234 810 409 2397)"

                className="w-full p-2 bg-gray-800 rounded"
                required
              />
              {formErrors?.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.phone[0]}
                </p>
              )}
            </div>
            <div>
              <motion.textarea
                variants={itemVariants}
                name="message"
                placeholder="Tell us what are you looking for ..."
                rows={4}
                className="w-full p-2 bg-gray-800 rounded"
                required
              />
              {formErrors?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.message[0]}
                </p>
              )}
            </div>
            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isPending ? "Sending..." : "Send"}
            </motion.button>
            {formStatus && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-4 p-2 rounded ${
                  formStatus.success ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {formStatus.message}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
