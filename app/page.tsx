import LandingPage from "@/components/LandingPage";
import ContactUs from "@/components/sections/ContactUs";
import GetInTouch from "@/components/sections/GetInTouch";
import OurProcess from "@/components/sections/OurProcess";
import ServicesSection from "@/components/sections/ServicesSection";
import Testimonials from "@/components/sections/testimonials";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
      <main className="overflow-hidden">
        <LandingPage />
        <WhoWeAreSection />
        <ServicesSection />
        <WhyChooseUs/>
        <Testimonials/>
        <ContactUs/> 
        <OurProcess/>
        <GetInTouch/>
      </main>
  );
}
