"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, InstagramIcon, Linkedin, Twitter } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { submitContactForm } from "@/actions/submitForm";

type FormErrors = {
  [key: string]: string[];
};
const ContactFormPgae = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = async (formData: FormData) => {
    setFormErrors(null);
    setFormStatus(null);
    startTransition(async () => {
      const result = await submitContactForm(formData);
      if ("errors" in result) {
        setFormErrors(result.errors as FormErrors);
      } else {
        setFormStatus(result);
        formRef.current?.reset();
      }
    });
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
    <section
      ref={ref}
      className="container flex mt-16 mb-6 items-center flex-col justify-center w-full"
    >
      <div className="max-w-3xl w-full">
        <motion.form
          variants={itemVariants}
          action={handleSubmit}
          ref={formRef}
          className="space-y-4 px-2"
        >
          <div className="">
            <h2 className="text-xl md:text-3xl font-bold text-blue-500">
              Please fill up the form with your needs and we will get back to
              you​ within 48 hours
            </h2>
            <p className="text-xl font-semibold text-gray-800">
              We'd love to hear from you!
            </p>
          </div>
          <div>
            <motion.input
              variants={itemVariants}
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              required
              minLength={2}
            />
            {formErrors?.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name[0]}</p>
            )}
          </div>
          <div>
            <motion.input
              variants={itemVariants}
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
              required
            />
            {formErrors?.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email[0]}</p>
            )}
          </div>
          <div>
            <motion.input
              variants={itemVariants}
              type="tel"
              name="phone"
              placeholder="Your Phone number (e.g  +234 810 409 2397)"
              className="w-full p-2 border rounded"
              required
            />
            {formErrors?.phone && (
              <p className="text-red-500 text-sm mt-1">{formErrors.phone[0]}</p>
            )}
          </div>
          <div>
            <motion.textarea
              variants={itemVariants}
              name="message"
              placeholder="Tell us what are you looking for ..."
              rows={4}
              className="w-full p-2 border rounded"
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
        <div className="mt-12 px-3">
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-3xl font-bold mb-6"
            >
             We will be happy to meet in person
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
                  className="text-black hover:text-gray-800"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/stonuc_technologies?igsh=ZWJtejNobDg5azdo"
                  className="text-black hover:text-gray-800"
                >
                  <InstagramIcon size={24} />
                </a>
                <a href="#" className="text-black hover:text-gray-800">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-black hover:text-gray-800">
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
      </div>
    </section>
  );
};

export default ContactFormPgae;
