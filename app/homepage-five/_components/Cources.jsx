"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    title: "FMGE Offline Regular Batch",
    author: "John Doe",
    rating: "4.5",
    reviews: 250,
    link: "/about",
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    title: "FMGE Online Regular Batch",
    author: "John Doe",
    rating: "4.5",
    reviews: 250,
    link: "#",
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    title: "FMGE Semi Regular Offline",
    author: "John Doe",
    rating: "4.5",
    reviews: 250,
    link: "#",
  },
  {
    id: 4,
    image: "/images/slide1.jpg",
    title: "FMGE Semi Regular Online",
    author: "John Doe",
    rating: "4.5",
    reviews: 250,
    link: "/about",
  },
  {
    id: 5,
    image: "/images/slide2.jpg",
    title: "FMGE Test and Discussion",
    author: "John Doe",
    rating: "4.5",
    reviews: 250,
    link: "#",
  },
  {
    id: 6,
    image: "/images/slide3.jpg",
    title: "FMGE Rapid Revision",
    author: "John Doe",
    rating: "4.5",
    reviews: 250,
    link: "#",
  },
];

export default function CoursesSection() {
  return (
    <section className="p-2 md:p-10 bg-white ">
      {/* Heading */}
        <div className="mb-10 mx-auto text-center max-w-3xl">
          <h2 className="text-blue-950 text-4xl lg:text-5xl font-semibold mb-4 hover-text">
            Our Courses
          </h2>
          <p className="text-gray max-w-3xl">
            We offer the most effective programs to prepare you for FMGE exams
            here at Arise Medical Academy. From full subject coverage to rapid
            review, we have prepared the best-in-class programs for you.
          </p>
        </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto md:px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <Link href={course.link} className="relative group overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={300}
                  className="w-full mt-10 transition-all duration-500 group-hover:mt-0"
                />

                <div
                  className="absolute inset-0 flex flex-col justify-end items-center
                             bg-gradient-to-b from-transparent to-[#120f2d]
                             h-[calc(100%+86px)] transition-all duration-500
                             group-hover:h-[calc(100%+30px)]"
                >
                  <h4 className="text-white text-2xl text-center px-4 mb-18 md:mb-8 font-semibold">
                    {course.title}
                  </h4>

                  {/* <div className="w-full border-t border-white/20">
                    <div className="flex justify-between p-4 text-white text-sm">
                      <span>👤 {course.author}</span>
                      <span>⭐ {course.rating} ({course.reviews})</span>
                    </div>
                  </div> */}

                  <div className="w-full bg-gradient-to-r from-[#0b0b7c] to-[#06066d]  text-center pt-3 pb-4">
                    <span
                      className="md:inline-block bg-primary text-blue-950 font-bold px-6 py-2 rounded bg-white hover:bg-red-500 transition cursor-pointer"
                    >
                      Course Detail
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
    </section>
  );
}
