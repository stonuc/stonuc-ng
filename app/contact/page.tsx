import ContactFormPgae from '@/components/contact/contact-form'
import ContactHeader from '@/components/contact/contact-hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div>
        <div className="bg-gray-800">
        <Navbar />
       </div>
       <ContactHeader/>
       <ContactFormPgae/>
    </div>
  )
}

export default Page