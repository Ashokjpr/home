"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative w-[500px] h-[500px]">
            <Image
              src="/homepage-five/contact-img.png"
              alt="Contact"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div>

          {/* Badge */}
          <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            ✨ Welcome to Online Education
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mt-6">
            Need help? We’re just a{" "}
            <span className="text-orange-500">Message Away</span>
          </h2>

          <p className="text-gray-700 mt-4 mb-8">
            At Arise Medical Academy, we believe education is the key to
            unlocking endless possibilities.
          </p>

          {/* Form */}
          <form className="space-y-5">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-full border border-gray-400 bg-transparent focus:outline-none focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-full border border-gray-400 bg-transparent focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 rounded-full border border-gray-400 bg-transparent focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-full border border-gray-400 bg-transparent focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Course Information"
              className="w-full px-4 py-3 rounded-full border border-gray-400 bg-transparent focus:outline-none focus:border-orange-500"
            />

            {/* Message */}
            <textarea
              rows={4}
              placeholder="Your Message Here"
              className="w-full px-4 py-3 rounded-2xl border border-gray-400 bg-transparent focus:outline-none focus:border-orange-500"
            />

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label className="text-sm text-gray-700">
                I consent to the collection and storage of my data.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
