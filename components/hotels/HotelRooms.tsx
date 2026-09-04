import { Hotel } from "@/lib/data/hotels";
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
              <h3 className="font-bold text-lg text-primary mb-2">{room.name}</h3>
              {room.description && (
                <p className="text-xs text-gray-500 mb-4">{room.description}</p>
              )}
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
