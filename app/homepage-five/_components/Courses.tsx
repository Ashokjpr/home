"use client";

import { 
  BookOpen, 
  GraduationCap, 
  Monitor, 
  Stethoscope, 
  ClipboardCheck, 
  CalendarDays 
} from "lucide-react";

const categories = [
  { name: "FMGE Rapid Revision", icon: BookOpen, active: false},
  { name: "FMGE Regular Course", icon: GraduationCap },
  { name: "FMGE Regular Online Course", icon: Monitor },
  { name: "FMGE Semi Regular Course", icon: Stethoscope },
  { name: "FMGE Semi Regular Online Course", icon: Monitor },
  { name: "FMGE Test Discussion Course", icon: ClipboardCheck },
  { name: "FMGE Vacational Course", icon: CalendarDays },
];


export default function CourseCategories() {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
          🌟 Our Courses
        </div>

        {/* Heading */}
       <h2 className="text-3xl md:text-4xl font-bold mb-10">
  Explore Our <span className="text-orange-500">Expert FMGE Programs</span> and Start Your Medical Journey
</h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 text-sm md:text-base
                ${
                  category.active
                    ? "bg-orange-500 text-white border-orange-500 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-400"
                }`}
              >
                <Icon size={18} />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
