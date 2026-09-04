"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DestinationsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "international">("all");

  const destinations = [
    { name: "Goa", type: "Beaches & Nightlife", img: "/destinations/goa.png", category: "domestic" },
    { name: "Manali", type: "Snow & Mountains", img: "/destinations/manali.png", category: "domestic" },
    { name: "Kerala", type: "Backwaters & Nature", img: "/destinations/kerala.png", category: "domestic" },
    { name: "Rajasthan", type: "Royal Heritage", img: "/destinations/rajasthan.png", category: "domestic" },
    { name: "Dubai", type: "Luxury & Adventure", img: "/destinations/dubai.png", category: "international" },
    { name: "Bali", type: "Island of Gods", img: "/destinations/bali.png", category: "international" },
    { name: "Singapore", type: "Beaches & Culture", img: "/destinations/singapore.png", category: "international" },
    { name: "New Zealand", type: "Nature & Adventure", img: "/destinations/new zealand.png", category: "international" },
  ];

  const filteredDestinations = activeTab === "all" 
    ? destinations 
    : destinations.filter(d => d.category === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            POPULAR DESTINATIONS
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'all' ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-transparent text-text-secondary border border-border-color hover:bg-page-bg'}`}
            >
              ALL DESTINATIONS
            </button>
            <button 
              onClick={() => setActiveTab("international")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'international' ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-transparent text-text-secondary border border-border-color hover:bg-page-bg'}`}
            >
              INTERNATIONAL DESTINATIONS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredDestinations.map((dest, i) => (
            <Link href={`/destinations/${dest.name.toLowerCase().replace(' ', '-')}`} key={i} className="group rounded-xl overflow-hidden shadow-sm border border-border-color block">
              <div className="relative h-48 overflow-hidden">
                <Image src={dest.img} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-primary">{dest.name}</h3>
                <p className="text-xs text-text-secondary mt-1">{dest.type}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/destinations" className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors inline-block text-sm">
            EXPLORE ALL DESTINATIONS
          </Link>
        </div>
      </div>
    </section>
  );
}
