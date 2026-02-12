"use client";
import Link from "next/link";

function AboutUs() {
  return (
    <section id="about-us" className="py-10 bg-gray-100 w-full">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="text-center mx-auto max-w-6xl mb-12">
          
          <h2
            className="inline-block text-3xl md:text-5xl font-bold mb-4 text-blue-950 hover-text"
            data-aos="zoom-in-down"
          >
            About Us
          </h2>

          <p
            className="text-sm md:text-lg text-gray-700"
            data-aos="zoom-in-up"
          >
            Arise Medical Academy is established in the year 2010, with a vision of providing innovative medical coaching with an associate degree and utmost dedication in encouraging learner-centered education. As the best fmge coaching centre in Kerala, we tend to make sure that every student is able to achieve and fulfill their career goals and guarantees that students develop the skills, compassion and professionalism in the medical field and to practice medicine.With an aim to provide the best quality of education we offer topmost support to every students who are unable to develop skills and shapes them into finest medical practitioner.Arise has delivered the best result over past years making it one of the most preferred coaching centre in Kerala.
          </p>
        </div>

        <div className="flex justify-center">
          <Link href="/register" className="text-white bg-green-500 px-8 py-2 rounded text-lg font-medium hover:bg-green-900 transition duration-300">
            Apply Now
          </Link>
        </div>
      </div>

      
    </section>
  );
}

export default AboutUs;
