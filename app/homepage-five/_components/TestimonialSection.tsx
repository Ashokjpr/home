"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    imgSrc: "/images/DrKhaleel.png",
    profession: "MBBS Graduate",
    comment:
      "Arise Kerala provided excellent guidance and structured preparation that helped me clear FMGE confidently.",
    name: "Dr. Ananya S",
    rating: 4.5,
  },
  {
    imgSrc: "/images/DrKhaleel.png",
    profession: "Medical Intern",
    comment:
      "The faculty and study materials are top-notch. Highly recommended for FMGE aspirants.",
    name: "Dr. Rahul M",
    rating: 5,
  },
  {
    imgSrc: "/images/DrKhaleel.png",
    profession: "FMGE Aspirant",
    comment:
      "Daily tests and doubt sessions made all the difference in my preparation.",
    name: "Dr. Neha K",
    rating: 4,
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
            ✨ Learn What Others Have to Say
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-6 leading-snug">
            Join thousands who’ve transformed{" "}
            <span className="text-orange-500">Their Futures</span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-md">
            Our students have successfully advanced their careers through
            expert mentorship and structured learning.
          </p>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="min-w-[98%] bg-[#bdd9e9] rounded-2xl mx-2 p-8 shadow-sm"
              >
                {/* Rating */}
                <div className="flex items-center text-orange-500 mb-4">
                  {[...Array(Math.floor(item.rating))].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                  <span className="text-gray-700 ml-2">
                    ({item.rating})
                  </span>
                </div>

                {/* Comment */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  “{item.comment}”
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      {item.profession}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-orange-500 hover:text-white transition"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white shadow-md p-3 rounded-full hover:opacity-90 transition"
          >
            <ArrowRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}
