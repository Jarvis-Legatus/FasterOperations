import HowItWorks from "@/components/HowItWorks";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Our AI & Automation Agency Works | Faster Operations",
  description: "Learn about the process we follow to deliver AI and automation solutions for your business.",
  // other metadata
};

const HowItWorksPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="How It Works"
      />
      <HowItWorks />
    </>
  );
};

export default HowItWorksPage;