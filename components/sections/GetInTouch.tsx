"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, InstagramIcon, Linkedin, Twitter } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { submitContactForm } from "@/actions/submitForm";
import { FaWhatsapp } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


type FormErrors = {
  [key: string]: string[];
};

export default function Component() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [phone, setPhone] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

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
      formData.append("phoneParsed", phone);
      const result = await submitContactForm(formData);
      if ("errors" in result) {
        setFormErrors(result.errors as FormErrors);
      } else {
        setFormStatus(result);
        formRef.current?.reset();
        setPhone("")
      }
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-gray-900 text-white py-16 relative"
      style={{
        backgroundImage: "url('/map.png?height=1080&width=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
              Ready to build the future? <br /> Let&apos;s make it happen.
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8">
              At Stonuc, we don&apos;t just offer services - we partner with you
              to create innovative digital solutions that make an impact. From
              software development to expert UI/UX design, we deliver results
              that drive growth and success.
            </motion.p>
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Contact Information
              </h3>
              <p className="mt-4">
                US 
                <br />
                701 Tillery Street, Austin, Texas
              </p>
              <p className="mt-4">
                NG
                <br />
                Ikeja, Lagos, Quarter 12.
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
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2">Let&apos;s Talk!</h3>
              <p className="mb-2">
                <a href="mailto:contact@stonuc.atoovis.com">
                  contact@stonuc.atoovis.com
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="https://wa.me/qr/GHFHB4F22BMTK1"
                  className={`flex items-start  w-full gap-3 text-white`}
                >
                  <FaWhatsapp size={22} />
                  WhatsApp
                </a>
              </p>
            </motion.div>
          </div>
          <motion.form
            variants={itemVariants}
            action={handleSubmit}
            ref={formRef}
            className="space-y-4"
          >
            <div>
              <motion.input
                variants={itemVariants}
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
                className="w-full p-2 bg-gray-800 rounded  focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              {formErrors?.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.email[0]}
                </p>
              )}
            </div>
            <div>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={setPhone}
                inputClass="!w-full !h-full !bg-gray-800 !border-none !rounded !p-2 !pl-11  focus:outline-none focus:ring-2 focus:ring-primary"
                containerClass="w-full !hover:bg-gray-700"
                buttonClass="!bg-gray-800 !border-none !hover:bg-gray-700"
                dropdownClass="!bg-gray-800  !hover:text-gray-700"
                searchClass="!bg-gray-800 !text-white"
                autoFormat
                enableSearch
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
                placeholder="Tell us what you're looking for..."
                rows={4}
                className="w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
              className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isPending ? "Sending..." : "Send"}
            </motion.button>
            {formStatus && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-4 p-2 text-white rounded ${
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
