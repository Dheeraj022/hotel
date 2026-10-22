import { Hotel } from "@/lib/data/hotels";


export default function HotelReviews({ hotel }: { hotel: Hotel }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-primary mb-4">Guest Reviews</h3>
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">

        
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
