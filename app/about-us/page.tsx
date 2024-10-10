import AboutUsHeader from '@/components/About/about-us-hero'
import ContactSection from '@/components/About/contact-banner'
import IdeaSection from '@/components/About/Idea'
import OfficeLocation from '@/components/About/office-location'
import OurTeam from '@/components/About/our-team'
import PhilosophyOfOurName from '@/components/About/philosophy'
import VisionMissionSection from '@/components/About/vision-mission'
import WhyChooseUs from '@/components/About/why-choose-us'
import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div>
       <div className="bg-gray-800">
        <Navbar />
       </div>
        <AboutUsHeader/>
        <IdeaSection/>
        <VisionMissionSection/>
        <PhilosophyOfOurName/>
        <OfficeLocation/>
        <WhyChooseUs/>
        <OurTeam/>
        <ContactSection/>
    </div>
  )
}

export default Page