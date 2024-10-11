import NotFound from "@/components/errors/Notfound";
import Navbar from "@/components/Navbar";
import React from "react";
const page = () => {
  return (
    <div className="">
      <div className="bg-blue-600">
      <Navbar/>
      </div>
      <NotFound />
    </div>
  );
};

export default page;
