import { LoaderIcon } from "lucide-react";
import React from "react";

export default function Loader() {
  return (
    <div className="min-h-screen w-full bg-primary flex justify-center items-center ">
      <div className="" role="status">
        <LoaderIcon className="text-white animate-spin" size={100} />
      </div>
    </div>
  );
}
