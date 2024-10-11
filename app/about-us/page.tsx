import AboutUsHeader from '@/components/About/about-us-hero'
import ContactSection from '@/components/About/contact-banner'
import CoreValues from '@/components/About/CoreValues'
import IdeaSection from '@/components/About/Idea'
import OfficeLocation from '@/components/About/office-location'
import OurTeam from '@/components/About/our-team'
import VisionMissionSection from '@/components/About/vision-mission'
import WhyChooseUs from '@/components/About/why-choose-us'
import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div>
       <div className="bg-blue-600">
        <Navbar />
       </div>
        <AboutUsHeader/>
        <IdeaSection/>
        <VisionMissionSection/>
        <CoreValues/>
        {/* <OfficeLocation/> */}
        <WhyChooseUs/>
        {/* <OurTeam/> */}
        <ContactSection/>
    </div>
  )
}

export default Page