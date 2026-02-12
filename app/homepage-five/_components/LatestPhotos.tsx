"use client";

import Link from "next/link";
import Image from "next/image";

export default function LatestPhotos() {
  const latestPhotos = [
    {
      title: "IFTAR 2023",
      image:"/images/IFTAR 2023.jpg",
      link: "/latest-photos/iftar-2023",
    },
    {
      title: "ANESTHESIA CLASS FMGE JUNE 2023",
      image:"/images/ANESTHESIA.jpg",
      link: "/latest-photos/anesthesia-class-fmge-june-2023",
    },
    {
      title: "DERMATOLOGY CLASS FMGE JUNE 2023",
      image:"/images/DERMATOLOGY.jpg",
      link: "/latest-photos/dermatology-class-fmge-june-2023",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 hover:text-blue-700">
          Latest Photos
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:px-15">
          {latestPhotos.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="relative h-[300px] 
                         overflow-hidden rounded-xl group block"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                <Image
                  src={item.image ||  "/images/slide1.jpg" }
                  alt={item.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                 
                />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 
                              group-hover:bg-black/60 transition" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
                  {item.title}
                </h3>

                <span className="inline-flex items-center  gap-2 
                                 bg-white text-blue-900 
                                 px-4 py-2 rounded-md 
                                 text-sm font-semibold 
                                 hover:bg-blue-900 hover:text-white 
                                 transition">
                  View More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 
                       text-blue-900 font-semibold 
                       hover:text-blue-600 transition"
          >
            View More →
          </Link>
        </div>

      </div>
    </section>
  );
}
