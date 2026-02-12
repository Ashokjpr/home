import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-blue-50 pt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className= "md:ps-10 pb-10 text-center md:text-left" data-aos="fade-up">
          <h3 className="inline-block py-1 px-3 rounded-full bg-[var(--accent-light)] text-[var(--primary-green)] text-xl font-semibold md:mb-6 tracking-wide uppercase" data-aos="fade-up">
            Welcome to <span className='text-red-700 hover-text '>Arise</span>
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 md:mb-6 hover-text" data-aos="fade-up" data-aos-delay="100">
            Best Medical <span className='text-blue-950'>Academy</span>
          </h1>
          <p className="text-sm  md:text-xl text-blue-900  max-w-3xl">
            Achieve Your Medical Dreams with
          </p>
          <p className='text-2xl  text-green-700 font-semibold mb-4 md:mb-8 hover-text'>
            ARISE Medical Academy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto" >

            <Link href="/courses" className="bg-white text-green-600 px-6 py-2 md:py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition duration-300 flex items-center justify-center gap-2" data-aos="fade-left" data-aos-delay="300">
              View Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/register" className="bg-green-600 text-white px-6 py-2 md:py-3 rounded-md text-lg font-medium hover:bg-green-700 transition duration-300 flex items-center justify-center gap-2" data-aos="fade-right" data-aos-delay="300">
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className=' md:text-2xl mt-5  font-semibold'>
            Start Your <span className='text-green-600 hover-text'>FMGE Journey Today!</span>
          </p>


        </div>
  

      <Image
        src="/homepage-five/hero-img.png"
        alt="Hero"
        width={500}
        height={500}
      />
    </div>
    </section >
  );
}
