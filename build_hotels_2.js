const fs = require("fs");

// HotelRooms
fs.writeFileSync("components/hotels/HotelRooms.tsx", `import { Hotel } from "@/lib/data/hotels";
import Image from "next/image";
import { BedDouble, Eye, Users } from "lucide-react";

export default function HotelRooms({ hotel }: { hotel: Hotel }) {
  if (!hotel.rooms || hotel.rooms.length === 0) return null;

  return (
    <div id="rooms" className="scroll-mt-24">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-primary">Room Categories</h2>
        <a href="#" className="text-sm font-bold text-primary hover:text-accent flex items-center gap-1">View All Rooms &rarr;</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hotel.rooms.map((room, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src={room.image} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-primary mb-4">{room.name}</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <BedDouble className="w-4 h-4 text-blue-500" /> {room.features[0]}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Eye className="w-4 h-4 text-blue-500" /> {room.features[1]}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Users className="w-4 h-4 text-blue-500" /> {room.features[2]}
                </div>
              </div>
              <button className="w-full py-2.5 border border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-colors text-sm">
                GET ENQUIRY
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`);

// HotelAmenities
fs.writeFileSync("components/hotels/HotelAmenities.tsx", `import { Hotel } from "@/lib/data/hotels";
import { Waves, Flower2, Dumbbell, Utensils, Umbrella, Baby, Wifi, BellConcierge } from "lucide-react";

export default function HotelAmenities({ hotel }: { hotel: Hotel }) {
  if (!hotel.amenities || hotel.amenities.length === 0) return null;

  const iconMap: Record<string, any> = {
    pool: Waves, spa: Flower2, fitness: Dumbbell, restaurant: Utensils,
    beach: Umbrella, kids: Baby, wifi: Wifi, concierge: BellConcierge,
    business: BellConcierge, golf: Waves
  };

  return (
    <div id="amenities" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-primary mb-6">Hotel Amenities</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {hotel.amenities.map((amenity, idx) => {
          const Icon = iconMap[amenity.icon] || Waves;
          return (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-2 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors text-gray-500">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-600">{amenity.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`);

// HotelSidebarForm
fs.writeFileSync("components/hotels/HotelSidebarForm.tsx", `"use client";
import { useState } from "react";
import { Hotel } from "@/lib/data/hotels";

export default function HotelSidebarForm({ hotel }: { hotel: Hotel }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div id="enquiry" className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden sticky top-24">
      <div className="bg-[#0f284c] p-5 text-white">
        <h3 className="text-lg font-bold">Plan Your Stay at {hotel.name.replace(" Goa", "")}</h3>
        <p className="text-xs text-gray-300 mt-1">Get the best rates and customized offers from our travel experts.</p>
      </div>
      
      <div className="p-5">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="Full Name*" className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent" required />
            <input type="tel" placeholder="Mobile Number*" className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent" required />
          </div>
          <input type="email" placeholder="Email Address*" className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent" required />
          
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <input type="date" className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent text-gray-500" required />
            </div>
            <div className="relative">
              <input type="date" className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent text-gray-500" required />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <select className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent bg-white">
              <option>Number of Guests*</option>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
            </select>
            <select className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent bg-white">
              <option>Room Preference</option>
              {hotel.rooms.map(r => <option key={r.name}>{r.name}</option>)}
            </select>
          </div>
          
          <textarea placeholder="Your Requirements / Message (Optional)" rows={3} className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent"></textarea>
          
          <button type="submit" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 rounded transition-colors text-sm">
            SUBMIT ENQUIRY
          </button>
          
          <p className="text-[10px] text-center text-gray-400 mt-2">This is an enquiry form. Submission does not confirm a booking.</p>
        </form>
      </div>
    </div>
  );
}
`);

// HotelTrustBadges
fs.writeFileSync("components/hotels/HotelTrustBadges.tsx", `import { ShieldCheck, CalendarCheck, Map, Clock, Star } from "lucide-react";

export default function HotelTrustBadges() {
  const badges = [
    { icon: ShieldCheck, text: "Best Available Rates" },
    { icon: CalendarCheck, text: "Personalized Travel Plans" },
    { icon: Map, text: "Expert Travel Consultants" },
    { icon: Clock, text: "24x7 Customer Support" },
    { icon: Star, text: "Hassle-Free Assistance" },
    { icon: ShieldCheck, text: "Trusted Travel Partner" }
  ];

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-primary mb-4">Why Book Through Brightspark?</h3>
      <div className="space-y-4">
        {badges.map((b, i) => {
          const Icon = b.icon;
          return (
            <div key={i} className="flex items-center gap-3">
              <div className="text-blue-600">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-700">{b.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`);

// HotelReviews
fs.writeFileSync("components/hotels/HotelReviews.tsx", `import { Hotel } from "@/lib/data/hotels";
import { Star } from "lucide-react";

export default function HotelReviews({ hotel }: { hotel: Hotel }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-primary mb-4">Guest Reviews</h3>
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-green-100 text-green-700 font-black text-2xl px-3 py-1 rounded-full">
            {hotel.rating}/5
          </div>
          <div>
            <div className="font-bold text-primary text-sm mb-1 flex items-center gap-1">
              Excellent
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_,i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-[10px] text-gray-500 mt-1">Based on {hotel.reviewsCount}+ reviews</p>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-4 relative">
          <blockquote className="text-sm text-gray-600 italic px-4">
            <span className="text-2xl text-gray-300 absolute left-0 top-3">"</span>
            An unforgettable stay! Beautiful property, amazing service and perfect location.
            <span className="text-2xl text-gray-300 absolute right-4 top-3">"</span>
          </blockquote>
          <p className="text-xs font-bold text-primary mt-2 text-right">— Priya & Karan</p>
        </div>
      </div>
    </div>
  );
}
`);

// Page Route
fs.writeFileSync("app/hotels/[slug]/page.tsx", `import { notFound } from "next/navigation";
import { getHotelBySlug } from "@/lib/data/hotels";
import HotelHero from "@/components/hotels/HotelHero";
import HotelStickyNav from "@/components/hotels/HotelStickyNav";
import HotelQuickInfo from "@/components/hotels/HotelQuickInfo";
import HotelAbout from "@/components/hotels/HotelAbout";
import HotelRooms from "@/components/hotels/HotelRooms";
import HotelAmenities from "@/components/hotels/HotelAmenities";
import HotelSidebarForm from "@/components/hotels/HotelSidebarForm";
import HotelTrustBadges from "@/components/hotels/HotelTrustBadges";
import HotelReviews from "@/components/hotels/HotelReviews";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const hotel = getHotelBySlug(p.slug);
  if (!hotel) return {};

  return {
    title: \`\${hotel.name} | Brightspark\`,
  };
}

export default async function HotelPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const hotel = getHotelBySlug(p.slug);
  
  if (!hotel) {
    notFound();
  }

  return (
    <main className="bg-gray-50 pb-0">
      <HotelHero hotel={hotel} />
      <HotelStickyNav />

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <HotelQuickInfo hotel={hotel} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10 max-w-7xl mx-auto">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-12">
            <HotelAbout hotel={hotel} />
            <hr className="border-gray-200" />
            <HotelRooms hotel={hotel} />
            <hr className="border-gray-200" />
            <HotelAmenities hotel={hotel} />
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 relative">
            <HotelSidebarForm hotel={hotel} />
            <HotelTrustBadges />
            <HotelReviews hotel={hotel} />
          </div>

        </div>
      </div>
    </main>
  );
}
`);

const homepagePath = "components/home/HotelsAndCruises.tsx";
let homeCode = fs.readFileSync(homepagePath, "utf8");
// Update hotels map to link
homeCode = homeCode.replace(
  /<div key=\{i\} className="rounded-xl overflow-hidden/g,
  '<Link href={`/hotels/${hotel.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")}`} key={i} className="block rounded-xl overflow-hidden'
);
homeCode = homeCode.replace(
  /<\/div>\n            \)\)/g,
  '</Link>\n            ))'
);

fs.writeFileSync(homepagePath, homeCode);
console.log("Hotels Phase 2 completed.");
