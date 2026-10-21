const fs = require("fs");

// HotelLocation
fs.writeFileSync("components/hotels/HotelLocation.tsx", `import { Hotel } from "@/lib/data/hotels";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function HotelLocation({ hotel }: { hotel: Hotel }) {
  return (
    <div id="location" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">Location & Map</h2>
          <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
            <MapPin className="w-4 h-4 text-blue-500" /> {hotel.address}
          </p>
          <div className="relative h-64 w-full rounded-xl overflow-hidden bg-blue-50 border border-blue-100 flex items-center justify-center">
            {/* Placeholder for actual Google Maps Embed */}
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-blue-500">Interactive Map</p>
              <p className="text-xs text-blue-400">Centered on {hotel.location.split(",")[0]}</p>
            </div>
            <button className="absolute bottom-4 right-4 bg-white text-blue-600 px-4 py-2 rounded shadow text-xs font-bold flex items-center gap-2 hover:bg-blue-50">
              <MapPin className="w-3 h-3" /> Get Directions
            </button>
          </div>
        </div>
        
        {hotel.nearbyPlaces && hotel.nearbyPlaces.length > 0 && (
          <div id="nearby-places" className="scroll-mt-24">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-2xl font-bold text-primary">Nearby Places</h2>
            </div>
            <div className="space-y-3">
              {hotel.nearbyPlaces.map((place, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg bg-white hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-8 rounded overflow-hidden">
                      <Image src={place.image} alt={place.name} fill className="object-cover" />
                    </div>
                    <span className="font-semibold text-sm text-primary">{place.name}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium bg-gray-50 px-2 py-1 rounded">{place.distance}</span>
                </div>
              ))}
              <div className="text-center mt-2">
                <a href="#" className="text-xs font-bold text-blue-600 hover:underline">View More Nearby Places &rarr;</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
`);

// HotelFAQs
fs.writeFileSync("components/hotels/HotelFAQs.tsx", `"use client";
import { useState } from "react";
import { Hotel } from "@/lib/data/hotels";
import { Plus, Minus } from "lucide-react";

export default function HotelFAQs({ hotel }: { hotel: Hotel }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (!hotel.faqs || hotel.faqs.length === 0) return null;

  return (
    <div id="faqs" className="scroll-mt-24">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-primary">Frequently Asked Questions</h2>
        <a href="#" className="text-sm font-bold text-primary hover:text-accent flex items-center gap-1">View All FAQs &rarr;</a>
      </div>
      
      <div className="space-y-3">
        {hotel.faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-sm text-primary hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              {faq.question}
              {openIdx === idx ? <Minus className="w-4 h-4 text-accent" /> : <Plus className="w-4 h-4 text-primary" />}
            </button>
            {openIdx === idx && (
              <div className="p-4 pt-0 text-sm text-gray-600 border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
`);

// HotelCard & HotelGrid for /hotels listing page
fs.writeFileSync("components/hotels/HotelCard.tsx", `import Image from "next/image";
import Link from "next/link";
import { Hotel } from "@/lib/data/hotels";
import { Star, MapPin } from "lucide-react";

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <Link href={\`/hotels/\${hotel.slug}\`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-border-color block hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image src={hotel.heroImage} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary flex items-center gap-1">
          {hotel.rating} <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-primary text-base mb-1 group-hover:text-accent transition-colors">{hotel.name}</h3>
        <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
          <MapPin className="w-3 h-3 text-accent" /> {hotel.location.split(",")[0]}
        </p>
        <p className="text-xs text-gray-600 line-clamp-2 mb-4 flex-1">{hotel.tagline}</p>
        <div className="w-full py-2 text-center text-xs font-bold text-primary border border-gray-200 rounded hover:bg-gray-50 transition-colors">
          VIEW DETAILS
        </div>
      </div>
    </Link>
  );
}
`);

fs.writeFileSync("components/hotels/SimilarHotels.tsx", `import { getSimilarHotels } from "@/lib/data/hotels";
import HotelCard from "./HotelCard";

export default function SimilarHotels({ currentSlug }: { currentSlug: string }) {
  const similar = getSimilarHotels(currentSlug);
  
  if (similar.length === 0) return null;

  return (
    <div className="mt-16">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-primary">Similar Hotels & Resorts</h2>
        <a href="/hotels" className="text-sm font-bold text-primary hover:text-accent flex items-center gap-1">View All Hotels &rarr;</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {similar.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
`);

// Update app/hotels/[slug]/page.tsx to include the new components
let detailPageCode = fs.readFileSync("app/hotels/[slug]/page.tsx", "utf8");
detailPageCode = detailPageCode.replace(
  'import HotelReviews from "@/components/hotels/HotelReviews";',
  'import HotelReviews from "@/components/hotels/HotelReviews";\nimport HotelLocation from "@/components/hotels/HotelLocation";\nimport HotelFAQs from "@/components/hotels/HotelFAQs";\nimport SimilarHotels from "@/components/hotels/SimilarHotels";'
);
detailPageCode = detailPageCode.replace(
  '<HotelAmenities hotel={hotel} />\n          </div>',
  '<HotelAmenities hotel={hotel} />\n            <hr className="border-gray-200" />\n            <HotelLocation hotel={hotel} />\n            <hr className="border-gray-200" />\n            <HotelFAQs hotel={hotel} />\n          </div>'
);
detailPageCode = detailPageCode.replace(
  '</div>\n      </div>\n    </main>',
  '</div>\n        <SimilarHotels currentSlug={hotel.slug} />\n      </div>\n    </main>'
);
fs.writeFileSync("app/hotels/[slug]/page.tsx", detailPageCode);

// Build app/hotels/page.tsx
fs.writeFileSync("app/hotels/page.tsx", `import InnerPageHero from "@/components/layout/InnerPageHero";
import HotelCard from "@/components/hotels/HotelCard";
import CTASection from "@/components/home/CTASection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { getHotels } from "@/lib/data/hotels";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotels & Resorts | Guest Assist",
  description: "Book the best stays globally with Guest Assist.",
};

export default function HotelsListingPage() {
  const hotels = getHotels();

  return (
    <main className="bg-gray-50">
      <InnerPageHero 
        title="Hotels & Resorts" 
        description="Discover luxury, comfort, and the perfect stay for your next adventure." 
        breadcrumb="Hotels" 
      />
      
      <div className="py-16 lg:py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <WhyChooseUs />
      </div>
      
      <CTASection />
    </main>
  );
}
`);
console.log("Hotels Phase 3 completed.");
