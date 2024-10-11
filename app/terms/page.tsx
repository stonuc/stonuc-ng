import Navbar from "@/components/Navbar";
import TermsAndConditions from "@/components/TermsAndConditions";


const TermsAndConditionsPage = () => {
  return (
    <div className="">
      <div className="bg-blue-500">
        <Navbar />
      </div>
      <div className=" flex my-10 items-center justify-center">
        <TermsAndConditions />
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
