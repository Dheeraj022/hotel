import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Destination } from "@/lib/data/destinations";

export default function DestinationHero({ destination }: { destination: Destination }) {
  return (
    <div className="relative h-[60vh] min-h-[500px] w-full flex flex-col justify-end bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={destination.heroImage} alt={destination.name} fill className="object-cover opacity-80" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/50 to-transparent mix-blend-multiply" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white pb-20">
        <div className="flex items-center text-sm font-medium space-x-2 text-gray-300 mb-6 backdrop-blur-sm bg-black/20 inline-flex px-4 py-2 rounded-full">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-white">{destination.name}</span>
        </div>

        <div className="mb-4">
          <span className="inline-block bg-accent/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
            {destination.category}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-md">{destination.name}</h1>
        
        <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-10 leading-relaxed drop-shadow">
          {destination.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#enquiry" className="bg-accent text-white px-8 py-3.5 rounded-md font-semibold hover:bg-accent-light transition-colors shadow-lg">
            ENQUIRE NOW
          </a>
          <a href="#" className="bg-green-500 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-green-600 transition-colors shadow-lg flex items-center gap-2">
            WHATSAPP US
          </a>
        </div>
      </div>
    </div>
  );
}
