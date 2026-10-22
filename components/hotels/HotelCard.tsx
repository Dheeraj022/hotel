import Image from "next/image";
import Link from "next/link";
import { Hotel } from "@/lib/data/hotels";
import { MapPin, Waves, Flower2, Dumbbell, Utensils, Umbrella, Baby, Wifi, Bell } from "lucide-react";

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  const iconMap: Record<string, any> = {
    pool: Waves, spa: Flower2, fitness: Dumbbell, restaurant: Utensils,
    beach: Umbrella, kids: Baby, wifi: Wifi, concierge: Bell,
    business: Bell, golf: Waves
  };

  return (
    <Link href={`/hotels/${hotel.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-border-color block hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image src={hotel.heroImage} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-primary text-base mb-1 group-hover:text-accent transition-colors">{hotel.name}</h3>
        <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
          <MapPin className="w-3 h-3 text-accent" /> {hotel.location.split(",")[0]}
        </p>
        <p className="text-xs text-gray-600 line-clamp-2 mb-4 flex-1">{hotel.tagline}</p>
        
        {hotel.amenities && hotel.amenities.length > 0 && (
          <div className="flex items-center gap-3 mb-4 pt-4 border-t border-gray-100">
            {hotel.amenities.slice(0, 4).map((amenity, idx) => {
              const Icon = iconMap[amenity.icon] || Waves;
              return (
                <div key={idx} title={amenity.name} className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              );
            })}
            {hotel.amenities.length > 4 && (
              <span className="text-[10px] font-bold text-gray-400">+{hotel.amenities.length - 4}</span>
            )}
          </div>
        )}

        <div className="w-full py-2 text-center text-xs font-bold text-primary border border-gray-200 rounded hover:bg-gray-50 transition-colors">
          VIEW DETAILS
        </div>
      </div>
    </Link>
  );
}
