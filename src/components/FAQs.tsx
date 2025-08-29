import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Where is Moonglade located?",
    answer:
      "Moonglade is located in Kokapet, just 10 minutes from the Financial District via ORR Exit 18A.",
  },
  {
    question: "What types of apartments are available?",
    answer: "Premium 3 BHK and 4 BHK residences designed for modern living.",
  },
  {
    question: "What is the current price per square foot?",
    answer:
      "Pricing varies by configuration. Contact us to receive the latest price sheet.",
  },
  {
    question: "How many floors and towers are there?",
    answer: "7 towers with 2 Basements + Stilt + 4 Podium Levels + 40 floors.",
  },
  {
    question: "What makes Moonglade different from other projects in Kokapet?",
    answer:
      "Thoughtfully planned 14-acre development with expansive landscapes and a 135,000 sq. ft. clubhouse.",
  },
  {
    question: "Is this a RERA-approved project?",
    answer:
      "Yes, we are RERA-approved. Our RERA Registration Number is P02400009267.",
  },
  {
    question: "What amenities are available?",
    answer:
      "Zen Zone, Tree House, Forest Trail, Water Bridge, and many more curated lifestyle features.",
  },
  {
    question: "Who is this project by?",
    answer: "This project is by E-Infra and IRA.",
  },
];

function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="container bg-bgSecondaryLight py-10 md:py-[72px] ">
      <div className="md:w-4/5  mx-auto">
        {/* Title */}
        <h2 className="text-center font-medium text-[24px]    font-['Prata'] text-primaryText    lg:leading-[55px]   lg:text-[50px] leading-[30px] ">
          Frequently Asked Questions
        </h2>

        {/* List */}
        <div className="mt-6   sm:mt-12 md:mt-16 space-y-4 md:space-y-6">
          {faqs.map((item, index) => {
            const isOpen = index === activeIndex;
            return (
              <div
                key={item.question}
                className={
                  isOpen
                    ? " border-secondaryText border-[1.25px] md:border-[2.5px] rounded-lg bg-white"
                    : "rounded-lg bg-white"
                }
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className={
                    "w-full flex items-center justify-between gap-4 text-left px-4 py-4 sm:px-6 sm:py-5"
                  }
                >
                  <span
                    className={`font-['Prata']  ${
                      isOpen
                        ? "text-secondaryText font-medium "
                        : "text-primaryText font-normal"
                    }  text-[12px] leading-5 sm:text-[18px] lg:text-[24px] `}
                  >
                    {item.question}
                  </span>

                  {/* Toggle Icon */}
                  <span
                    className={
                      (isOpen
                        ? "bg-secondaryText text-white"
                        : "bg-[#DEAF97] text-white") +
                      " inline-flex items-center justify-center rounded-full w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0"
                    }
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="7.25"
                          width="10"
                          height="1.5"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="7.25"
                          y="3"
                          width="1.5"
                          height="10"
                          fill="currentColor"
                        />
                        <rect
                          x="3"
                          y="7.25"
                          width="10"
                          height="1.5"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                      <p className="font-['Prata'] font-normal leading-[14px] text-[10px] sm:text-[16px] lg:font-[24px] sm:leading-[20px] lg:leading-[34px] text-[#43474E]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
