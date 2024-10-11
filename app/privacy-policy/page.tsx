import Navbar from "@/components/Navbar";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className=" overflow-hidden">
      <div className="bg-blue-500">
        <Navbar />
      </div>
      <div className="overflow-hidden flex my-10 items-center justify-center">
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
