const fs = require("fs");
const path = require("path");

const componentsDir = path.join(process.cwd(), "components/cruises");

const components = {
  "CruiseHero.tsx": `import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Cruise } from "@/lib/data/cruises";

export default function CruiseHero({ cruise }: { cruise: Cruise }) {
  return (
    <div className="relative h-[65vh] min-h-[550px] w-full flex flex-col justify-end bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={cruise.heroImage} 
          alt={cruise.name} 
          fill 
          className="object-cover opacity-80"
          priority
        />
        {/* Softer gradient for a more premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/60 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm font-medium space-x-2 text-gray-300 mb-6 backdrop-blur-sm bg-black/20 inline-flex px-4 py-2 rounded-full">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/cruises" className="hover:text-white transition-colors">Cruises</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-white">{cruise.name}</span>
        </div>

        <div className="mb-4">
          <span className="inline-block bg-accent/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg border border-white/10">
            {cruise.category}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-md">{cruise.name}</h1>
        
        <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-10 leading-relaxed drop-shadow">
          {cruise.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-4 md:hidden">
          <a href="#enquiry" className="bg-accent text-white px-8 py-3.5 rounded-md font-semibold hover:bg-accent-light transition-colors shadow-lg">
            ENQUIRE NOW
          </a>
        </div>
      </div>
    </div>
  );
}`,

  "CruiseQuickInfo.tsx": `import { Clock, MapPin, Users, IndianRupee } from "lucide-react";
import { Cruise } from "@/lib/data/cruises";

export default function CruiseQuickInfo({ cruise }: { cruise: Cruise }) {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 -mt-16 relative z-20 mx-4 md:mx-auto max-w-5xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 text-primary">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Duration</span>
            <span className="font-bold text-primary text-lg leading-none">{cruise.duration}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:pl-8">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 text-primary">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Destination</span>
            <span className="font-bold text-primary text-lg leading-none">{cruise.destination}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:pl-8">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 text-primary">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Best For</span>
            <span className="font-bold text-primary text-base leading-none">{cruise.bestFor}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:pl-8">
          <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0 text-accent">
            <IndianRupee className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Starting From</span>
            <span className="font-bold text-accent text-lg leading-none">{cruise.startingPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  "CruiseOverview.tsx": `import { Cruise } from "@/lib/data/cruises";
import { CheckCircle2 } from "lucide-react";

export default function CruiseOverview({ cruise }: { cruise: Cruise }) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-6">About the Cruise</h2>
        <div className="prose prose-lg text-gray-600 max-w-none leading-relaxed">
          <p>{cruise.description}</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">✨</span>
          Cruise Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          {cruise.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,

  "CruiseItinerary.tsx": `import { Cruise } from "@/lib/data/cruises";
import { MapPin } from "lucide-react";

export default function CruiseItinerary({ cruise }: { cruise: Cruise }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-10">Popular Itinerary</h2>
      <div className="relative border-l-2 border-gray-200 ml-6 md:ml-8 space-y-10">
        {cruise.itineraries.map((item, idx) => (
          <div key={idx} className="relative pl-10 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[21px] top-1 w-10 h-10 bg-white border-4 border-primary rounded-full flex flex-col items-center justify-center shadow-sm z-10">
              <span className="text-[10px] font-bold uppercase leading-none text-primary mt-0.5">Day</span>
              <span className="text-sm font-black leading-none text-primary">{item.day}</span>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                {item.location}
              </h4>
              <p className="text-gray-600 pl-7">{item.activity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,

  "CruiseCabins.tsx": `import { Cruise } from "@/lib/data/cruises";
import { Check } from "lucide-react";

export default function CruiseCabins({ cruise }: { cruise: Cruise }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-8">Cabin Options</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cruise.cabins.map((cabin, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{cabin.name}</h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">{cabin.description}</p>
              <ul className="space-y-3 mb-6">
                {cabin.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50/80 p-6 border-t border-gray-100 flex items-center justify-between mt-auto">
              <div>
                <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Starting From</span>
                <span className="font-bold text-primary text-lg">{cabin.price || "On Request"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,

  "CruiseIncluded.tsx": `import { Cruise } from "@/lib/data/cruises";
import { Check, X } from "lucide-react";

export default function CruiseIncluded({ cruise }: { cruise: Cruise }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold text-primary mb-8 flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <Check className="w-5 h-5" />
          </span>
          What's Included
        </h3>
        <ul className="space-y-4">
          {cruise.included.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold text-primary mb-8 flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center">
            <X className="w-5 h-5" />
          </span>
          Not Included
        </h3>
        <ul className="space-y-4">
          {cruise.excluded.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
              <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}`,

  "CruiseEnquiryForm.tsx": `"use client";
import { useState } from "react";
import { Cruise } from "@/lib/data/cruises";

export default function CruiseEnquiryForm({ cruise }: { cruise: Cruise }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1000);
  };

  if (success) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-lg">
        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
        <p className="text-gray-500 px-6">Our cruise expert will contact you shortly to plan your voyage on {cruise.name}.</p>
      </div>
    );
  }

  return (
    <div id="enquiry" className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden scroll-mt-24 sticky top-24">
      {/* Form Header */}
      <div className="bg-primary p-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-1">Plan Your Cruise</h2>
        <p className="text-primary-light text-sm">Get a free quote for {cruise.name}</p>
      </div>
      
      <div className="p-6 sm:p-8">
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Full Name *</label>
            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Mobile Number *</label>
            <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800" placeholder="+91 98765 43210" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Travellers *</label>
              <input required type="number" min="1" defaultValue="2" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800" />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Month</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800">
                <option>Any Month</option>
                <option>Jan - Mar</option>
                <option>Apr - Jun</option>
                <option>Jul - Sep</option>
                <option>Oct - Dec</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Cabin Preference</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800">
              <option value="">Any Cabin Type</option>
              {cruise.cabins.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)}
            </select>
          </div>
          
          <button type="submit" disabled={isSubmitting} className="w-full bg-accent text-white rounded-lg py-4 font-bold text-lg hover:bg-accent-light transition-colors disabled:opacity-70 mt-2 shadow-lg shadow-accent/30">
            {isSubmitting ? "SENDING..." : "GET FREE QUOTE"}
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-4">We'll get back to you within 24 hours.</p>
        </form>
      </div>
    </div>
  );
}`,

  "CruiseGallery.tsx": `import Image from "next/image";

export default function CruiseGallery() {
  // Using placeholders for the gallery since we don't have actual cruise images yet.
  const images = [
    "/images/hero-maldives.jpg",
    "/images/travel-luggage.jpg",
    "/images/cta-mountain.jpg",
    "/hotels-cruises/leela.jpg"
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-8">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className={\`relative overflow-hidden rounded-xl \${i === 0 ? 'col-span-2 row-span-2 h-64 md:h-auto' : 'h-32 md:h-48'}\`}>
            <Image 
              src={img} 
              alt="Cruise Gallery Image" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}`
};

for (const [filename, content] of Object.entries(components)) {
  fs.writeFileSync(path.join(componentsDir, filename), content);
}
console.log("UI upgraded.");
