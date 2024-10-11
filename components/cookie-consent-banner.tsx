"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent")
    if (!hasConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const handleDecline = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-primary/70 text-white p-4 shadow-lg z-50"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 mr-4 flex-grow">
              <p className="text-sm">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
                traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Link href="/privacy-policy" className="text-sm underline hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm underline hover:text-primary">
                Terms of Service
              </Link>
              <Button variant="outline" size="sm" onClick={handleDecline} className="w-full text-primary sm:w-auto">
                Decline
              </Button>
              <Button size="sm" onClick={handleAccept} className="w-full sm:w-auto">
                Accept All
              </Button>
            </div>
            <button
              onClick={handleDecline}
              className="absolute top-2 right-2 text-white  transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsentBanner