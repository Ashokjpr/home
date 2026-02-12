"use client";
import TopNavbar from '../../TopNavbar'
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md  w-full z-50">
        <TopNavbar />
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Image
          src="/arise-logo.png"
          alt="Logo"
          width={150}
          height={50}
          className="object-contain"
        />

        <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Courses</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </nav>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Buy Now
        </button>
      </div>
    </header>
  );
}
