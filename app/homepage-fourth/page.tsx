'use client'
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import StatsSection from "./_components/StatsSection";
import CoursesSection from "./_components/CoursesSection";
import FeaturesSection from "./_components/FeaturesSection";
import AboutUs from "./_components/AboutUs";
import OurStudents from "./_components/OurStudents";
import Faqs from "./_components/FAQSection";

function page() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <StatsSection />
      <CoursesSection />
      <FeaturesSection />
      <OurStudents />
      <Faqs />
      <Footer />

    </div>
  )
}

export default page
