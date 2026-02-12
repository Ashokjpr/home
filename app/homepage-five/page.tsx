'use client'
import Navbar from "./_components/Navbar"
import About from "./_components/About"
import Hero from "./_components/Hero"
import Courses from "./_components/Courses"
import HowWeOperate from "./_components/HowWeOperate"
import CoursesSection from "./_components/Cources"
import StatsSection from "./_components/StatsSection"
import FAQSection from "./_components/FAQSection"
import Testimonials from "./_components/TestimonialSection"
import ContactSection from "./_components/ContactSection"
import FooterSection from "./_components/NewsletterBanner"
import LatestPhotos from "./_components/LatestPhotos"
import Footer from "./_components/Footer"
function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <HowWeOperate />
      <StatsSection />
      <CoursesSection />
      <FAQSection />
      <Testimonials />
      <ContactSection />
      <LatestPhotos />
      <FooterSection />
      <Footer />
    </div>
  )
}

export default page
