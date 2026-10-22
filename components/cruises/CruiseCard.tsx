import Image from "next/image";
import Link from "next/link";
import { Anchor } from "lucide-react";
import { Cruise } from "@/lib/data/cruises";

export default function CruiseCard({ cruise }: { cruise: Cruise }) {
  return (
    <Link href={`/cruises/${cruise.slug}`} className="block group">
      <div className="rounded-xl overflow-hidden border border-border-color bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        
        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <Image 
            src={cruise.heroImage} 
            alt={cruise.name} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          {/* Category Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Anchor className="w-3.5 h-3.5" />
            {cruise.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-grow flex flex-col">
          <div className="mb-2">
            <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors">{cruise.name}</h3>
            <p className="text-sm font-medium text-text-secondary mt-1">{cruise.destination}</p>
          </div>
          
          <p className="text-sm text-text-secondary line-clamp-2 mt-2 mb-4 flex-grow">
            {cruise.shortDescription}
          </p>

          <div className="pt-4 border-t border-border-color flex items-center justify-end mt-auto">
            <div className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              VIEW DETAILS
              <span aria-hidden="true">&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
