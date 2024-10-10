import ContactSection from "@/components/About/contact-banner";
import Navbar from "@/components/Navbar";
import Services from "@/components/our-service/services";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <Navbar />
      </div>
      <Services/>
      <ContactSection/>
    </div>
  );
};

export default Page;
