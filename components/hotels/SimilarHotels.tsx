import Link from "next/link";
import { getSimilarHotels } from "@/lib/data/hotels";
import HotelCard from "./HotelCard";

export default function SimilarHotels({ currentSlug }: { currentSlug: string }) {
  const similar = getSimilarHotels(currentSlug);
  
  if (similar.length === 0) return null;

  return (
    <div className="mt-16">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-primary">Similar Hotels & Resorts</h2>
        <Link href="/hotels" className="text-sm font-bold text-primary hover:text-accent flex items-center gap-1">View All Hotels &rarr;</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {similar.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
