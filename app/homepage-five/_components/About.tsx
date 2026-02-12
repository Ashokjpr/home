import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";


export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT IMAGES */}
          <div className="flex gap-6">
            <div>
                <div className="w-[260px] h-[350px] rounded-full overflow-hidden">
              <Image
                src="/homepage-five/about-img-1.jpg"
                alt="Students learning"
                width={260}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
            <Link href="tel:+1234567890" className="flex items-center text-white gap-2 px-5 py-3 mt-4 rounded-full bg-blue-400  text-orange-500 font-medium ">
              <span className="bg-orange-500 text-white p-2 ms-6 rounded-full">
                <Phone size={16} />
              </span>
              <span><p>Online Support</p><p>+91 9929113115</p></span>
            </Link>
            </div>

            <div className="w-[260px] h-[400px] rounded-full overflow-hidden mt-10">
              <Image
                src="/homepage-five/about-img-2.jpg"
                alt="Online education"
                width={260}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-block mb-4 px-4 py-1 text-sm text-orange-500 bg-orange-100 rounded-full">
              ✨ Get to Know Us More
            </span>

            <h2 className="text-4xl font-bold leading-snug mb-6">
              About Our Learning {" "}
              <span className="text-blue-500">Platform</span>
            </h2>

            <p className="text-gray-600 mb-8">
             Arise Medical Academy is established in the year 2010, with a vision of providing innovative medical coaching with an associate degree and utmost dedication in encouraging learner-centered education. As the best fmge coaching centre in Kerala, we tend to make sure that every student is able to achieve and fulfill their career goals and guarantees that students develop the skills, compassion and professionalism in the medical field and to practice medicine.With an aim to provide the best quality of education we offer topmost support to every students who are unable to develop skills and shapes them into finest medical practitioner.Arise has delivered the best result over past years making it one of the most preferred coaching centre in Kerala.
            </p>

            {/* STATS */}
            <div className="flex justify-center lg:justify-start gap-12 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-800">7+</h3>
                <p className="text-sm text-gray-500">Unique Courses</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-800">5000+</h3>
                <p className="text-sm text-gray-500">Excellent Students</p>
              </div>
            </div>

            <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition">
              Start Your Journey
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
