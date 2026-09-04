import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Star, PlayCircle, Image as ImageIcon } from "lucide-react";
import { Hotel } from "@/lib/data/hotels";

export default function HotelHero({ hotel }: { hotel: Hotel }) {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full flex flex-col justify-between bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={hotel.heroImage} alt={hotel.name} fill className="object-cover opacity-90" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/80 to-transparent w-2/3" />
      </div>
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 relative z-10 pt-6">
        <div className="flex items-center text-xs font-semibold space-x-2 text-white/90">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-white/50" />
          <Link href="/hotels" className="hover:text-accent transition-colors">Hotels & Resorts</Link>
          <ChevronRight className="w-3 h-3 text-white/50" />
          <span className="text-white">{hotel.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pb-16 flex flex-col md:flex-row justify-between items-end">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">{hotel.name}</h1>
            <div className="flex gap-1 mt-2">
              {[...Array(hotel.stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <div className="flex items-center text-gray-200 mb-6">
            <MapPin className="w-4 h-4 mr-1 text-accent" />
            <span className="text-sm font-medium">{hotel.location}</span>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">{hotel.tagline}</h2>
          <p className="text-sm md:text-base text-gray-200 mb-8 max-w-2xl leading-relaxed">
            {hotel.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#enquiry" className="bg-accent text-white px-8 py-3.5 rounded-md font-bold hover:bg-accent-light transition-colors shadow-lg">
              GET ENQUIRY
            </a>
            <a href="#" className="bg-green-600 text-white px-8 py-3.5 rounded-md font-bold hover:bg-green-700 transition-colors shadow-lg flex items-center gap-2">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448-.002 9.873-4.428 9.874-9.877-.001-5.448-4.425-9.872-9.873-9.873-5.45.002-9.873 4.428-9.874 9.876-.002 2.115.597 3.714 1.59 5.39l-1.044 3.811 3.935-1.039zm8.82-6.505c-.486-.244-2.873-1.417-3.318-1.58-.444-.162-.768-.244-1.092.244-.324.487-1.255 1.58-1.538 1.905-.283.324-.567.365-1.053.122-.486-.244-2.05-7.57-3.905-4.832-.325.487.324 1.58 2.378 4.628.243.366.121.731-.06.974-.183.244-1.093 2.637-1.498 3.612-.395.952-.795.823-1.092.837-.282.013-.604.014-.928.014-.324 0-.85-.122-1.295-.609-.445-.488-1.699-1.664-1.699-4.06s1.74-4.708 1.983-5.033c.243-.324 3.428-5.234 8.3-7.227 4.872-1.993 4.872-1.328 5.762-1.246.89.082 2.873 1.173 3.277 2.309.404 1.136.404 2.112.283 2.316-.122.203-.445.325-.93.568z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right side floating images */}
        <div className="hidden lg:flex flex-col gap-3">
          {hotel.gallery.slice(1, 4).map((img, i) => (
            <div key={i} className="w-48 h-32 relative rounded-lg overflow-hidden border-2 border-white/20 shadow-lg cursor-pointer group">
              <Image src={img} alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform" />
              {i === 2 && (
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white font-bold backdrop-blur-sm">
                  <ImageIcon className="w-6 h-6 mb-1" />
                  +25 Photos
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
