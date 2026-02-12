"use client";

import Image from "next/image";
import { MousePointerClick, CreditCard, Rocket } from "lucide-react";

export default function HowWeOperate() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow mb-6">
          ✨ How We Operate
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Learn anytime, anywhere with{" "}
          <span className="text-orange-500">Trusted Experts</span>
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 relative">

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block absolute left-1/3 top-10 bottom-10 w-[2px] bg-orange-400"></div>
          <div className="hidden md:block absolute left-2/3 top-10 bottom-10 w-[2px] bg-orange-400"></div>

          {/* Step 1 */}
          <div className="text-center relative">
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/homepage-five/team-1.jpg"
                alt="Select Course"
                fill
                className="rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow">
                <MousePointerClick className="text-orange-500" size={20} />
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6">
              Select a Suitable Course
            </h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Choose the best FMGE course tailored to your needs and begin your
              journey with structured guidance and expert mentorship.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/homepage-five/team-2.jpg"
                alt="Easy Payment"
                fill
                className="rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow">
                <CreditCard className="text-orange-500" size={20} />
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6">
              Make Easy Payment
            </h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Secure and flexible payment options to enroll quickly and start
              your preparation without any delay.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative">
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/homepage-five/team-3.jpg"
                alt="Start Journey"
                fill
                className="rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow">
                <Rocket className="text-orange-500" size={20} />
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6">
              Start Your Journey
            </h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Begin your FMGE preparation with expert faculty, structured
              modules, and continuous assessment for guaranteed success.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
