import { Hotel } from "@/lib/data/hotels";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function HotelLocation({ hotel }: { hotel: Hotel }) {
  return (
    <div id="location" className="scroll-mt-24">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Location</h2>
        <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
          <MapPin className="w-4 h-4 text-blue-500" /> {hotel.address}
        </p>
      </div>
    </div>
  );
}
