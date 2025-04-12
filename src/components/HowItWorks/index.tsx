"use client";

import SectionTitle from "../Common/SectionTitle";
import Image from "next/image"; // Still potentially useful if you revert to image icons

// Define the structure for each step (Icon path is removed as we use inline SVGs now)
interface Step {
  id: number;
  // icon: string; // Removed - using inline SVG based on index
  stepLabel: string;
  title: string;
  description: string;
}

// Data for the steps based on the image
const stepsData: Step[] = [
  {
    id: 1,
    stepLabel: "STEP 1",
    title: "Audit operations",
    description: "Creating visual representations of your systems and workflows.",
  },
  {
    id: 2,
    stepLabel: "STEP 2",
    title: "Spot bottlenecks",
    description: "We target operational bottlenecks where automation results in high-ROI.",
  },
  {
    id: 3,
    stepLabel: "STEP 3",
    title: "Build and test",
    description: "We combine custom code, AI tools, and automation software along with your existing technology.",
  },
  {
    id: 4,
    stepLabel: "STEP 4",
    title: "Implement and manage",
    description: "We can maintain and add more automation as new opportunites arise with your growth.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[140px] lg:pt-[120px]">
      <div className="container">
        <div className="mb-24"> {/* Added margin bottom here */}
          <SectionTitle
            title="Audit > Target > Build > Manage"
            paragraph="We dive deep into your company's operations to identify and eliminate the most time-consuming, repetitive, and cost-intensive bottlenecks through automation solutions. Our approach is pragmatic. We implement AI technology only when it delivers tangible business value."
            center
            width="900px"
          />
        </div>

        <div className="relative grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Animated Dashed Line - Positioned behind the steps */}
          {/* (Keep the dashed line SVG as it was) */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[50px] -z-10 hidden h-px lg:block" aria-hidden="true">
            <svg width="100%" height="2" preserveAspectRatio="none" viewBox="0 0 700 2"> {/* Adjusted viewBox based on typical grid gap */}
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="url(#dash-gradient)"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="animated-dash"
              />
              <defs>
                <linearGradient id="dash-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E5E7EB" /> {/* Adjust gradient colors if needed */}
                  <stop offset="100%" stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
            </svg>
          </div>


          {stepsData.map((step, index) => (
            <div key={step.id} className="wow fadeInUp relative z-10 text-center" data-wow-delay={`.${1 + index}s`}>
              {/* Outer Icon Container (with border/shadow) */}
              <div className="relative mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-md dark:border-dark-3 dark:bg-dark"> {/* Changed dark background to dark instead of dark-2 for better contrast */}

                 {/* Inner Icon Background Box - THIS GETS THE PRIMARY COLOR */}
                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white"> {/* CHANGED: bg-primary, text-white (for icon inside) */}
                   {/* Icon SVG - Inherits text-white from parent above */}
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6"> {/* Adjusted strokewidth */}
                     {/* Icons based on index */}
                     {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />}
                     {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />}
                     {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />}
                     {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L1.875 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM18.259 15.715 18 16.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 12l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 8.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 12l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />}
                   </svg>
                 </div>
              </div>
              {/* Step Label - Uses adaptive text color */}
              <span className="mb-3 block text-sm font-semibold uppercase tracking-wide text-dark dark:text-white"> {/* CHANGED: text-dark dark:text-white */}
                {step.stepLabel}
              </span>
              {/* Title - Already adaptive */}
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                {step.title}
              </h3>
              {/* Description - Already adaptive */}
              <p className="text-base text-body-color dark:text-dark-6">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* (Keep the CSS style block as it was) */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -16; /* Should be double the strokeDasharray value */
          }
        }
        .animated-dash {
          stroke-dashoffset: 0;
          animation: dash 1s linear infinite;
        }
        /* Ensure the line is visually centered relative to the icons */
        .absolute.top-\\[50px\\] {
           top: 50px; /* Corresponds to half the icon container height */
        }
      `}</style>

    </section>
  );
};

export default HowItWorks;