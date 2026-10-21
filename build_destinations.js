const fs = require("fs");
const path = require("path");

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

ensureDir("lib/data");
ensureDir("components/destinations");
ensureDir("app/destinations/[slug]");

// ----------------------------------------------------
// 1. DATA LAYER
// ----------------------------------------------------
fs.writeFileSync("lib/data/destinations.ts", `export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: "Domestic" | "International";
  category: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  highlights: string[];
  thingsToDo: { title: string; desc: string; img: string }[];
  attractions: { title: string; desc: string; img: string }[];
  bestTime: string;
  idealDuration: string;
  bestFor: string;
  gallery: string[];
  faqs: { question: string; answer: string }[];
}

export const mockDestinations: Destination[] = [
  {
    id: "goa",
    slug: "goa",
    name: "Goa",
    country: "India",
    region: "Domestic",
    category: "Beaches & Nightlife",
    shortDescription: "Discover the beaches, nightlife, culture and experiences of Goa.",
    description: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area's tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
    heroImage: "/destinations/goa.png",
    bestTime: "November - February",
    idealDuration: "4-6 Days",
    bestFor: "Couples, Families & Friends",
    highlights: ["Beautiful Beaches", "Vibrant Nightlife", "Water Sports", "Portuguese Heritage", "Local Cuisine", "Relaxed Getaways"],
    thingsToDo: [
      { title: "Beach Hopping", desc: "Explore the golden sands of Baga, Calangute, and Anjuna.", img: "/images/hero-maldives.jpg" },
      { title: "Water Sports", desc: "Parasailing, jet-skiing and banana boat rides.", img: "/images/hero-maldives.jpg" },
      { title: "Sunset Cruises", desc: "Romantic evening cruises on the Mandovi river.", img: "/images/hero-maldives.jpg" },
    ],
    attractions: [
      { title: "Fort Aguada", desc: "17th-century Portuguese fort and lighthouse.", img: "/images/hero-maldives.jpg" },
      { title: "Basilica of Bom Jesus", desc: "UNESCO World Heritage Site in Old Goa.", img: "/images/hero-maldives.jpg" },
      { title: "Dudhsagar Falls", desc: "A spectacular four-tiered waterfall.", img: "/images/hero-maldives.jpg" },
    ],
    gallery: ["/destinations/goa.png", "/packages/honeymoon.jpg", "/packages/family.jpg", "/images/hero-maldives.jpg", "/images/cta-mountain.jpg", "/packages/weekend.jpg"],
    faqs: [
      { question: "Is Goa safe for tourists?", answer: "Yes, Goa is generally very safe for tourists. However, standard travel precautions should be taken." },
      { question: "Do I need a visa to visit Goa?", answer: "International travelers need a valid Indian visa to visit Goa." },
    ]
  },
  {
    id: "manali",
    slug: "manali",
    name: "Manali",
    country: "India",
    region: "Domestic",
    category: "Snow & Mountains",
    shortDescription: "A high-altitude Himalayan resort town known for backpacking and honeymoons.",
    description: "Manali is a high-altitude Himalayan resort town in India's northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it's a gateway for skiing in the Solang Valley and trekking in Parvati Valley.",
    heroImage: "/destinations/manali.png",
    bestTime: "October - June",
    idealDuration: "3-5 Days",
    bestFor: "Honeymooners & Adventure Seekers",
    highlights: ["Snow-capped Mountains", "Adventure Sports", "Pine Forests", "Cafes & Culture", "Hot Springs"],
    thingsToDo: [
      { title: "Skiing in Solang", desc: "Experience thrilling winter sports.", img: "/images/cta-mountain.jpg" },
      { title: "River Rafting", desc: "Navigate the rapids of the Beas River.", img: "/images/cta-mountain.jpg" },
    ],
    attractions: [
      { title: "Rohtang Pass", desc: "High mountain pass with stunning views.", img: "/images/cta-mountain.jpg" },
      { title: "Hadimba Temple", desc: "Ancient wooden temple in a cedar forest.", img: "/images/cta-mountain.jpg" },
    ],
    gallery: ["/destinations/manali.png", "/images/cta-mountain.jpg", "/packages/adventure.jpg", "/images/hero-maldives.jpg"],
    faqs: []
  },
  {
    id: "kerala",
    slug: "kerala",
    name: "Kerala",
    country: "India",
    region: "Domestic",
    category: "Backwaters & Nature",
    shortDescription: "God's Own Country, famous for its backwaters, beaches, and tea gardens.",
    description: "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife.",
    heroImage: "/destinations/kerala.png",
    bestTime: "September - March",
    idealDuration: "5-8 Days",
    bestFor: "Couples, Families & Nature Lovers",
    highlights: ["Houseboat Stays", "Ayurvedic Spa", "Tea Gardens", "Wildlife Sanctuaries", "Kathakali Performances"],
    thingsToDo: [], attractions: [], gallery: ["/destinations/kerala.png"], faqs: []
  },
  {
    id: "rajasthan",
    slug: "rajasthan",
    name: "Rajasthan",
    country: "India",
    region: "Domestic",
    category: "Royal Heritage",
    shortDescription: "The land of kings, known for its historic palaces, forts, and desert safaris.",
    description: "Rajasthan is a state in northern India. The state covers an area of 342,239 square kilometres or 10.4 percent of the total geographical area of India. It is the largest Indian state by area.",
    heroImage: "/destinations/rajasthan.png",
    bestTime: "October - March",
    idealDuration: "7-10 Days",
    bestFor: "History Buffs & Culture Seekers",
    highlights: ["Majestic Forts", "Desert Safari", "Colorful Culture", "Heritage Hotels", "Wildlife"],
    thingsToDo: [], attractions: [], gallery: ["/destinations/rajasthan.png"], faqs: []
  },
  {
    id: "dubai",
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    region: "International",
    category: "Luxury & Adventure",
    shortDescription: "A city of skyscrapers, luxury shopping, and ultramodern architecture.",
    description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline.",
    heroImage: "/destinations/dubai.png",
    bestTime: "November - March",
    idealDuration: "4-6 Days",
    bestFor: "Families & Luxury Shoppers",
    highlights: ["Burj Khalifa", "Desert Safari", "Luxury Shopping", "Theme Parks"],
    thingsToDo: [], attractions: [], gallery: ["/destinations/dubai.png"], faqs: []
  },
  {
    id: "bali",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "International",
    category: "Island of Gods",
    shortDescription: "Indonesian island known for its forested volcanic mountains, iconic rice paddies, and coral reefs.",
    description: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple.",
    heroImage: "/destinations/bali.png",
    bestTime: "April - October",
    idealDuration: "6-9 Days",
    bestFor: "Couples & Digital Nomads",
    highlights: ["Ubud Rice Terraces", "Surfing", "Temples", "Beach Clubs"],
    thingsToDo: [], attractions: [], gallery: ["/destinations/bali.png"], faqs: []
  },
  {
    id: "singapore",
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    region: "International",
    category: "Beaches & Culture",
    shortDescription: "A global financial center with a tropical climate and multicultural population.",
    description: "Singapore, an island city-state off southern Malaysia, is a global financial center with a tropical climate and multicultural population.",
    heroImage: "/destinations/singapore.png",
    bestTime: "February - April",
    idealDuration: "3-5 Days",
    bestFor: "Families & Foodies",
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Street Food"],
    thingsToDo: [], attractions: [], gallery: ["/destinations/singapore.png"], faqs: []
  },
  {
    id: "new-zealand",
    slug: "new-zealand",
    name: "New Zealand",
    country: "New Zealand",
    region: "International",
    category: "Nature & Adventure",
    shortDescription: "Famous for its stunning landscapes, Maori culture, and adventure sports.",
    description: "New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island—and over 700 smaller islands.",
    heroImage: "/destinations/new zealand.png",
    bestTime: "December - February",
    idealDuration: "10-14 Days",
    bestFor: "Adventure Seekers & Nature Lovers",
    highlights: ["Fjordland", "Lord of the Rings Tours", "Bungee Jumping", "Glaciers"],
    thingsToDo: [], attractions: [], gallery: ["/destinations/new zealand.png"], faqs: []
  },
];

export function getDestinations(): Destination[] {
  return mockDestinations;
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return mockDestinations.find(d => d.slug === slug);
}
`);

// ----------------------------------------------------
// 2. COMPONENTS
// ----------------------------------------------------
fs.writeFileSync("components/destinations/DestinationCard.tsx", `import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/lib/data/destinations";
import { ArrowRight } from "lucide-react";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href={\`/destinations/\${destination.slug}\`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-border-color block hover:shadow-md transition-shadow">
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
`);

fs.writeFileSync("components/destinations/DestinationGrid.tsx", `"use client";
import { useState } from "react";
import DestinationCard from "./DestinationCard";
import { Destination } from "@/lib/data/destinations";

export default function DestinationGrid({ destinations }: { destinations: Destination[] }) {
  const [filter, setFilter] = useState<"All" | "Domestic" | "International">("All");

  const filtered = filter === "All" 
    ? destinations 
    : destinations.filter(d => d.region === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["All", "Domestic", "International"].map((tab) => (
          <button 
            key={tab}
            onClick={() => setFilter(tab as any)}
            className={\`px-6 py-2 rounded-full text-sm font-semibold transition-colors \${filter === tab ? 'bg-primary text-white shadow-md' : 'bg-transparent text-text-secondary border border-border-color hover:bg-page-bg'}\`}
          >
            {tab === "All" ? "ALL DESTINATIONS" : tab.toUpperCase()}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </div>
  );
}
`);

fs.writeFileSync("components/destinations/DestinationHero.tsx", `import Image from "next/image";
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
`);

fs.writeFileSync("components/destinations/DestinationQuickInfo.tsx", `import { MapPin, Clock, Calendar, Users } from "lucide-react";
import { Destination } from "@/lib/data/destinations";

export default function DestinationQuickInfo({ destination }: { destination: Destination }) {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 -mt-12 relative z-20 mx-4 md:mx-auto max-w-5xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 text-primary">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Country</span>
            <span className="font-bold text-primary text-base leading-none">{destination.country}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:pl-8">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 text-primary">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Best For</span>
            <span className="font-bold text-primary text-base leading-none">{destination.bestFor}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:pl-8">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 text-primary">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Ideal Duration</span>
            <span className="font-bold text-primary text-base leading-none">{destination.idealDuration}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:pl-8">
          <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0 text-accent">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Best Time</span>
            <span className="font-bold text-accent text-base leading-none">{destination.bestTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
`);

fs.writeFileSync("components/destinations/DestinationOverview.tsx", `import { Destination } from "@/lib/data/destinations";
import { CheckCircle2 } from "lucide-react";

export default function DestinationOverview({ destination }: { destination: Destination }) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-6">About {destination.name}</h2>
        <div className="prose prose-lg text-gray-600 max-w-none leading-relaxed">
          <p>{destination.description}</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">✨</span>
          Why Visit {destination.name}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          {destination.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`);

fs.writeFileSync("components/destinations/DestinationEnquiryForm.tsx", `"use client";
import { useState } from "react";
import { Destination } from "@/lib/data/destinations";

export default function DestinationEnquiryForm({ destination }: { destination: Destination }) {
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
      <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-lg sticky top-24">
        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
        <p className="text-gray-500 px-6">Our travel expert will contact you shortly to plan your {destination.name} holiday.</p>
      </div>
    );
  }

  return (
    <div id="enquiry" className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden sticky top-24">
      <div className="bg-primary p-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-1">Plan Your {destination.name} Holiday</h2>
        <p className="text-primary-light text-sm">Get a free customized travel quote</p>
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
          
          <div>
            <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Destination</label>
            <input type="text" readOnly value={destination.name} className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-600 cursor-not-allowed font-medium" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Travellers *</label>
              <input required type="number" min="1" defaultValue="2" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800" />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Travel Date</label>
              <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800" />
            </div>
          </div>
          
          <button type="submit" disabled={isSubmitting} className="w-full bg-accent text-white rounded-lg py-4 font-bold text-lg hover:bg-accent-light transition-colors disabled:opacity-70 mt-2 shadow-lg shadow-accent/30">
            {isSubmitting ? "SENDING..." : "GET A FREE QUOTE"}
          </button>
        </form>
      </div>
    </div>
  );
}
`);

fs.writeFileSync("components/destinations/DestinationGallery.tsx", `import Image from "next/image";
import { Destination } from "@/lib/data/destinations";

export default function DestinationGallery({ destination }: { destination: Destination }) {
  if (!destination.gallery || destination.gallery.length === 0) return null;

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-8">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {destination.gallery.map((img, i) => (
          <div key={i} className={\`relative overflow-hidden rounded-xl \${i === 0 ? 'col-span-2 row-span-2 h-64 md:h-[400px]' : 'h-32 md:h-48'}\`}>
            <Image 
              src={img} 
              alt={\`\${destination.name} Gallery Image \${i+1}\`}
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
`);

// ----------------------------------------------------
// 3. PAGES
// ----------------------------------------------------
fs.writeFileSync("app/destinations/page.tsx", `import InnerPageHero from "@/components/layout/InnerPageHero";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import CTASection from "@/components/home/CTASection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { getDestinations } from "@/lib/data/destinations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popular Destinations | Guest Assist",
  description: "Explore our wide range of domestic and international destinations.",
};

export default function Page() {
  const destinations = getDestinations();

  return (
    <main className="bg-page-bg">
      <InnerPageHero 
        title="Explore Destinations" 
        description="Discover your next adventure from our curated list of breathtaking domestic and international destinations." 
        breadcrumb="Destinations" 
      />
      
      <div className="py-16 lg:py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <DestinationGrid destinations={destinations} />
        </div>
      </div>

      <div className="bg-white">
        <WhyChooseUs />
      </div>
      
      <CTASection />
    </main>
  );
}
`);

fs.writeFileSync("app/destinations/[slug]/page.tsx", `import { notFound } from "next/navigation";
import { getDestinationBySlug } from "@/lib/data/destinations";
import DestinationHero from "@/components/destinations/DestinationHero";
import DestinationQuickInfo from "@/components/destinations/DestinationQuickInfo";
import DestinationOverview from "@/components/destinations/DestinationOverview";
import DestinationEnquiryForm from "@/components/destinations/DestinationEnquiryForm";
import DestinationGallery from "@/components/destinations/DestinationGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const dest = getDestinationBySlug(p.slug);
  if (!dest) return {};

  return {
    title: \`\${dest.name} Holiday Packages & Travel Guide | Guest Assist\`,
    description: dest.shortDescription,
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const destination = getDestinationBySlug(p.slug);
  
  if (!destination) {
    notFound();
  }

  return (
    <main className="bg-gray-50 pb-0">
      <DestinationHero destination={destination} />
      <DestinationQuickInfo destination={destination} />

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-20">
            <DestinationOverview destination={destination} />
            <DestinationGallery destination={destination} />
          </div>

          {/* Right Column: Sticky Form */}
          <div className="lg:col-span-4 relative">
            <DestinationEnquiryForm destination={destination} />
          </div>

        </div>
      </div>

      <div className="bg-white border-t border-gray-100">
        <WhyChooseUs />
      </div>
    </main>
  );
}
`);

// ----------------------------------------------------
// 4. UPDATE HOMEPAGE TO USE DYNAMIC ROUTES
// ----------------------------------------------------
const homepageDestinationsPath = "components/home/DestinationsSection.tsx";
let destCode = fs.readFileSync(homepageDestinationsPath, "utf8");
// Replace <Link href="#"> with <Link href={\`/destinations/\${dest.name.toLowerCase().replace(' ', '-')}\`}>
destCode = destCode.replace(/href="#"/g, "href={`/destinations/${dest.name.toLowerCase().replace(' ', '-')}`}");
fs.writeFileSync(homepageDestinationsPath, destCode);

console.log("Destinations feature created.");
