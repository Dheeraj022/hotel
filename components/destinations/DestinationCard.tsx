import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/lib/data/destinations";
import { ArrowRight } from "lucide-react";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href={`/destinations/${destination.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-border-color block hover:shadow-md transition-shadow">
      <div className="relative h-56 overflow-hidden">
        <Image src={destination.heroImage} alt={destination.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {destination.country}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl text-primary group-hover:text-accent transition-colors mb-1">{destination.name}</h3>
        <p className="text-xs text-accent font-medium mb-3">{destination.category}</p>
        <p className="text-sm text-text-secondary line-clamp-2 mb-4">{destination.shortDescription}</p>
        <div className="flex items-center text-primary text-sm font-bold group-hover:text-accent transition-colors">
          VIEW DETAILS <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Link>
  );
}
