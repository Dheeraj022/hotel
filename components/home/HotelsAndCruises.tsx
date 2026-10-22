import Image from "next/image";
import Link from "next/link";
import { Building2, Anchor, Star, Bed } from "lucide-react";

export default function HotelsAndCruises() {
  const hotels = [
    { name: "The Leela Palace", location: "Luxury Hotel", img: "/hotels-cruises/leela.jpg" },
    { name: "Radisson Blu", location: "City Center", img: "/hotels-cruises/raddison.jpg" },
    { name: "Taj Exotica Resort", location: "Goa", img: "/hotels-cruises/taj.jpg" },
    { name: "The St. Regis", location: "Mumbai", img: "/hotels-cruises/stregis.jpg" },
  ];

  const cruises = [
    { name: "Royal Caribbean", type: "Ocean Cruise", img: "/cruise/royal.webp" },
    { name: "Cordelia Cruises", type: "India Cruise", img: "/cruise/cordella.jpg" },
    { name: "Norwegian Cruise", type: "Line", img: "/cruise/norwegian.avif" },
    { name: "Celebrity Cruises", type: "Premium Cruise", img: "/cruise/celebrity.jpg" },
  ];

  return (
    <section className="py-16 bg-white border-t border-border-color">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Hotels Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2 inline-flex items-center gap-4">
              <span className="h-px w-8 bg-border-color hidden sm:block"></span>
              HOTELS & RESORTS
              <span className="h-px w-8 bg-border-color hidden sm:block"></span>
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mb-4 font-medium">
              Verified stay information and accommodation reservation assistance
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-text-secondary">
              <span className="flex items-center gap-1 text-primary"><Star className="w-4 h-4"/> Luxury Hotels</span>
              <span className="flex items-center gap-1"><Bed className="w-4 h-4"/> Budget Hotels</span>
              <span className="flex items-center gap-1"><Building2 className="w-4 h-4"/> Resorts & Villas</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {hotels.map((hotel, i) => {
              let slug = "";
              if (hotel.name === "The Leela Palace") slug = "the-leela-palace";
              if (hotel.name === "Radisson Blu") slug = "radisson-blu";
              if (hotel.name === "Taj Exotica Resort") slug = "taj-exotica";
              if (hotel.name === "The St. Regis") slug = "st-regis";
              
              return (
                <Link href={`/hotels/${slug}`} key={i} className="block rounded-xl overflow-hidden border border-border-color group shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-32 overflow-hidden">
                    <Image src={hotel.img} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-primary text-sm group-hover:text-accent transition-colors">{hotel.name}</h4>
                    <p className="text-xs text-text-secondary mt-0.5">{hotel.location}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <Link href="/hotels" className="bg-primary text-white px-6 py-2.5 rounded-md font-semibold text-xs inline-block hover:bg-primary-light transition-colors">
              EXPLORE HOTELS & RESORTS
            </Link>
          </div>
        </div>

        {/* Cruises Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2 inline-flex items-center gap-4">
              <span className="h-px w-8 bg-border-color hidden sm:block"></span>
              CRUISE EXPERIENCES
              <span className="h-px w-8 bg-border-color hidden sm:block"></span>
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mb-4 font-medium">
              Sailing information, itinerary insights, and cruise planning assistance
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-text-secondary">
              <span className="flex items-center gap-1 text-primary"><Anchor className="w-4 h-4"/> Ocean Cruises</span>
              <span className="flex items-center gap-1"><Anchor className="w-4 h-4"/> River Cruises</span>
              <span className="flex items-center gap-1"><Anchor className="w-4 h-4"/> Family Cruises</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {cruises.map((cruise, i) => {
              // Map the hardcoded names to the new slugs
              let slug = "";
              if (cruise.name === "Royal Caribbean") slug = "royal-caribbean";
              if (cruise.name === "Cordelia Cruises") slug = "cordelia-cruises";
              if (cruise.name === "Norwegian Cruise") slug = "norwegian-cruise";
              if (cruise.name === "Celebrity Cruises") slug = "celebrity-cruises";

              return (
                <Link key={i} href={`/cruises/${slug}`} className="block group">
                  <div className="rounded-xl overflow-hidden border border-border-color shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="relative h-32 overflow-hidden">
                      <Image src={cruise.img} alt={cruise.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-3">
                      <h4 className="font-bold text-primary text-sm group-hover:text-accent transition-colors">{cruise.name}</h4>
                      <p className="text-xs text-text-secondary mt-0.5">{cruise.type}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <Link href="/cruises" className="bg-primary text-white px-6 py-2.5 rounded-md font-semibold text-xs inline-block hover:bg-primary-light transition-colors">
              EXPLORE CRUISES
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
