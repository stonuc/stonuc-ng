import LandingPage from "@/components/LandingPage";
import ServicesSection from "@/components/sections/ServicesSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import Image from "next/image";

export default function Home() {
  return (
      <main className="overflow-hidden">
        <LandingPage />
        <WhoWeAreSection />
        <ServicesSection />
      </main>
  );
}
