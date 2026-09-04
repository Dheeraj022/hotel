import { Hotel } from "@/lib/data/hotels";

export default function HotelAbout({ hotel }: { hotel: Hotel }) {
  return (
    <div id="overview" className="flex flex-col lg:flex-row gap-10 scroll-mt-24">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-primary mb-4">About {hotel.name}</h2>
        <p className="text-gray-600 leading-relaxed">
          {hotel.description}
        </p>
      </div>
      {hotel.quote && (
        <div className="lg:w-1/3 bg-blue-50 rounded-xl p-8 flex items-center justify-center border border-blue-100">
          <blockquote className="text-xl font-serif italic text-primary text-center">
            <span className="text-4xl text-blue-300 leading-none mr-2">"</span>
            {hotel.quote}
            <span className="text-4xl text-blue-300 leading-none ml-2">"</span>
          </blockquote>
        </div>
      )}
    </div>
  );
}
