import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Calendar, Ship, Users, Anchor, Map, Bed, Utensils, Baby, Star } from "lucide-react";
import { Cruise } from "@/lib/data/cruises";

export default function CruiseHero({ cruise }: { cruise: Cruise }) {
  // Map highlights to specific icons for the translucent bar
  const highlightIcons = [
    { label: "World-Class Ships", icon: Anchor },
    { label: "Exciting Destinations", icon: Map },
    { label: "Luxurious Accommodation", icon: Bed },
    { label: "Dining & Entertainment", icon: Utensils },
    { label: "Family Friendly", icon: Baby },
    { label: "Unforgettable Experiences", icon: Star },
  ];

  return (
    <div className="relative min-h-[70vh] md:min-h-[85vh] w-full flex flex-col justify-between bg-primary overflow-hidden pt-24 md:pt-32 pb-0">
      <div className="absolute inset-0 z-0">
        <Image 
          src={cruise.heroImage} 
          alt={cruise.name} 
          fill 
          className="object-cover"
          priority
        />
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031b4e]/90 via-[#031b4e]/60 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031b4e]/90 via-[#031b4e]/20 to-transparent opacity-80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white flex-1 flex flex-col justify-end md:justify-center mt-4 md:mt-8 pb-8 md:pb-0">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center text-[11px] sm:text-xs font-medium gap-x-1 gap-y-2 text-gray-300 mb-6 md:mb-8">
          <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">Home</Link>
          <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
          <Link href="/cruises" className="hover:text-white transition-colors whitespace-nowrap">Cruises</Link>
          <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
          <Link href="/cruises" className="hover:text-white transition-colors whitespace-nowrap">{cruise.category}</Link>
          <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
          <span className="text-white truncate max-w-[150px] sm:max-w-[250px] md:max-w-none" title={cruise.name}>{cruise.name}</span>
        </div>
        
        {/* Split Title if it contains 'Spectrum of the Seas' for better styling */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 tracking-tight drop-shadow-md leading-tight">
          {cruise.name.replace(' Spectrum of the Seas', '')} {cruise.name.includes('Spectrum of the Seas') && <br className="hidden md:block" />}
          {cruise.name.includes('Spectrum of the Seas') ? 'Spectrum of the Seas' : ''}
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-200 mb-6 font-serif italic">
          Sail Beyond Ordinary
        </h2>
        
        {/* Quick Info Badges */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <span>{cruise.departure}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            <span>{cruise.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ship className="w-5 h-5 text-accent" />
            <span>{cruise.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            <span>{cruise.bestFor}</span>
          </div>
        </div>

        <p className="text-base md:text-lg text-gray-100 max-w-2xl mb-10 leading-relaxed drop-shadow">
          {cruise.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#enquiry" className="bg-accent text-white px-8 py-3.5 rounded font-bold hover:bg-accent-light transition-colors shadow-lg uppercase text-sm tracking-wide">
            GET CRUISE QUOTE
          </a>
          <a href="https://wa.me/919876543210" className="bg-[#25D366] text-white px-8 py-3.5 rounded font-bold hover:bg-[#20b858] transition-colors shadow-lg flex items-center gap-2 uppercase text-sm tracking-wide">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="w-full relative z-10 bg-[#031b4e]/80 backdrop-blur-md border-t border-white/10 mt-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center divide-x divide-white/10">
            {highlightIcons.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center px-2">
                <item.icon className="w-6 h-6 text-white mb-2 opacity-80" strokeWidth={1.5} />
                <span className="text-[10px] md:text-xs text-white font-medium uppercase tracking-wider opacity-90">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}