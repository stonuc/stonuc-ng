import Navbar from "@/components/Navbar";
import TermsAndConditions from "@/components/TermsAndConditions";


const TermsAndConditionsPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-primary">
        <Navbar />
      </div>
      <div className=" flex my-10 overflow-hidden items-center justify-center">
        <TermsAndConditions />
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
