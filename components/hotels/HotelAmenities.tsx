"use client";
import { useState } from "react";
import { Hotel } from "@/lib/data/hotels";
import { 
  Waves, Flower2, Dumbbell, Utensils, Umbrella, Baby, Wifi, Bell, 
  Coffee, Car, Wine, Tv, Wind, Briefcase, Shirt, Shield, Phone, 
  Music, Map, CreditCard, Monitor, Camera, Palmtree, ChevronDown, ChevronUp
} from "lucide-react";

export default function HotelAmenities({ hotel }: { hotel: Hotel }) {
  const [showAll, setShowAll] = useState(false);

  if (!hotel.amenities || hotel.amenities.length === 0) return null;

  const iconMap: Record<string, any> = {
    pool: Waves, spa: Flower2, fitness: Dumbbell, restaurant: Utensils,
    beach: Umbrella, kids: Baby, wifi: Wifi, concierge: Bell,
    business: Briefcase, golf: Waves, coffee: Coffee, parking: Car,
    bar: Wine, tv: Tv, ac: Wind, laundry: Shirt,
    security: Shield, phone: Phone, entertainment: Music,
    tours: Map, card: CreditCard, workspace: Monitor,
    photo: Camera, garden: Palmtree
  };

  const displayedAmenities = showAll ? hotel.amenities : hotel.amenities.slice(0, 8);

  return (
    <div id="amenities" className="scroll-mt-24">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-primary">Hotel Amenities</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4 mb-6">
        {displayedAmenities.map((amenity, idx) => {
          const Icon = iconMap[amenity.icon] || Waves;
          return (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-2 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors text-gray-500 bg-white">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-600 px-1">{amenity.name}</span>
            </div>
          );
        })}
      </div>
      
      {hotel.amenities.length > 8 && (
        <div className="text-center md:text-left mt-2 border-t border-gray-100 pt-6">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full text-sm font-bold text-gray-600 hover:text-primary hover:border-primary transition-colors"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show All {hotel.amenities.length} Amenities <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
