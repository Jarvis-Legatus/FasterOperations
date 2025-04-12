"use client";

import { useState } from "react";

const SingleFaq = (props: { question: string; answer: string }) => {
  const { question, answer } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
    <div className="mb-4 border-b border-gray-200 dark:border-dark-3 last:border-b-0">
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <h3 className="text-lg font-semibold text-dark dark:text-white sm:text-xl">
          {question}
        </h3>
        <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-primary dark:bg-dark-2">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 pr-10">
          <p className="text-base text-body-color dark:text-dark-6">
            {answer}
          </p>
        </div>
      )}
    </div>
    
    </>
  );
};

export default SingleFaq;
