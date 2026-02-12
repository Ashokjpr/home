"use client";

import { Mail } from "lucide-react";

export default function NewsletterBanner() {
  return (
    <section className="bg-[#e9ecf7] ">
      <div className=" mx-auto">
        <div className="h-[100px] z-0 bg-white"></div>
        <div className="max-w-7xl  z-5 bg-blue-500 rounded-[30px] px-16 py-16 -mt-25 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-white shadow-xl">

          {/* LEFT SIDE */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold leading-tight">
              Empowering minds to unlock
              <br />
              <span className="font-bold text-black">
                Full Potential
              </span>
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-auto flex flex-col gap-3">

            <p className="text-sm font-medium">
              Enter Your Email
            </p>

            <div className="flex items-center gap-4">

              {/* Input Container */}
              <div className="flex items-center bg-orange-400 rounded-full px-6 py-3 w-full md:w-[420px]">
                <Mail size={18} className="mr-3 text-white" />
                <input
                  type="email"
                  placeholder="demo@mentoria.com"
                  className="bg-transparent outline-none w-full text-white placeholder-white text-sm"
                />
              </div>

              {/* Button */}
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300">
                Submit
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
