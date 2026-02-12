"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of courses do you offer?",
    answer:
      "We offer a wide range of professional and medical entrance coaching programs including FMGE preparation courses.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply select your preferred course, complete the registration, and proceed with secure payment.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Most courses are open to eligible medical graduates. Specific requirements are mentioned in each course.",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer:
      "Yes, our courses are accessible on desktops, tablets, and smartphones.",
  },
  {
    question: "Are the courses self-paced or scheduled?",
    answer:
      "We offer both structured live classes and self-paced learning modules.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(4);

  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden">
            <Image
              src="/homepage-five/our-journey-img.jpg"
              alt="Student"
              fill
              className="object-cover"
            />
          </div>

          {/* Student Badge */}
          <div className="absolute bottom-0 left-0 bg-orange-500 text-white px-8 py-6 rounded-full shadow-xl">
            <p className="font-semibold">Our Students</p>
            <div className="flex items-center mt-3">
              <div className="flex -space-x-3">
                <Image
                  src="/homepage-five/team-1.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/homepage-five/team-2.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/homepage-five/team-3.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <span className="bg-white text-orange-500 text-sm px-3 py-1 rounded-full ml-3 font-medium">
                500+
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Badge */}
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
            ✨ We Are Here to Answer
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-8">
            Expert answers for your FMGE{" "}
            <span className="text-orange-500">Learning Journey</span>
          </h2>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4 cursor-pointer"
                onClick={() => setActive(active === index ? -1 : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">
                    {String(index + 1).padStart(2, "0")}. {faq.question}
                  </h3>
                  <ChevronDown
                    className={`transition-transform ${
                      active === index ? "rotate-180 text-orange-500" : ""
                    }`}
                  />
                </div>

                {active === index && (
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
