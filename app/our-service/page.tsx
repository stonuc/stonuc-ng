import ContactSection from "@/components/About/contact-banner";
import Navbar from "@/components/Navbar";
import Services from "@/components/our-service/services";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="bg-blue-600">
        <Navbar />
      </div>
      <Services/>
      <ContactSection isService/>
    </div>
  );
};

export default Page;
