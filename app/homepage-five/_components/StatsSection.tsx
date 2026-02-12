"use client";

import { Users, Star, GraduationCap, Trophy } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="bg-blue-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center relative">

          {/* Divider Lines (Desktop) */}
          <div className="hidden md:block absolute left-1/4 top-6 bottom-6 w-[1px] bg-gray-400/40"></div>
          <div className="hidden md:block absolute left-2/4 top-6 bottom-6 w-[1px] bg-gray-400/40"></div>
          <div className="hidden md:block absolute left-3/4 top-6 bottom-6 w-[1px] bg-gray-400/40"></div>

          {/* Item 1 */}
          <div className="py-6">
            <Users className="mx-auto text-orange-500 mb-2" size={40} />
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-700 mt-1">Expert Instructors</p>
          </div>

          {/* Item 2 */}
          <div className="py-6">
            <Star className="mx-auto text-orange-500 mb-2" size={40} />
            <h3 className="text-3xl font-bold">550+</h3>
            <p className="text-gray-700 mt-1">Good Reviews</p>
          </div>

          {/* Item 3 */}
          <div className="py-6">
            <GraduationCap className="mx-auto text-orange-500 mb-2" size={40} />
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-700 mt-1">Happy Students</p>
          </div>

          {/* Item 4 */}
          <div className="py-6">
            <Trophy className="mx-auto text-orange-500 mb-2" size={40} />
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-700 mt-1">Award Winning</p>
          </div>

        </div>

      </div>
    </section>
  );
}
