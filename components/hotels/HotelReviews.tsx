import { Hotel } from "@/lib/data/hotels";
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
