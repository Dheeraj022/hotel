"use client";

import { Cruise } from "@/lib/data/cruises";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CruiseItinerary({ cruise }: { cruise: Cruise }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!cruise.itineraryOptions || cruise.itineraryOptions.length === 0) return null;

  const currentItinerary = cruise.itineraryOptions[activeTab];

  return (
    <section id="itinerary" className="scroll-mt-[120px]">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#031b4e]">Popular Itineraries</h2>
        <Link href="#enquiry" className="text-sm font-semibold text-[#031b4e] flex items-center gap-1 hover:text-accent transition-colors">
          View All Itineraries <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 pb-2">
        {cruise.itineraryOptions.map((option, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`whitespace-nowrap px-6 py-3 text-sm font-bold rounded-md transition-colors border ${
              activeTab === idx
                ? "bg-[#031b4e] text-white border-[#031b4e]"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#031b4e] hover:text-[#031b4e]"
            }`}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {currentItinerary.days.map((day, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col group">
            {/* Image */}
            <div className="relative h-32 w-full overflow-hidden bg-gray-100">
              {day.image ? (
                <Image
                  src={day.image}
                  alt={day.location}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">No Image</div>
              )}
            </div>
            
            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-center text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Day {day.day}</span>
              <h4 className="text-base font-bold text-[#031b4e] mb-2 leading-tight">{day.location}</h4>
              <p className="text-xs text-gray-500 line-clamp-2">{day.activity}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}