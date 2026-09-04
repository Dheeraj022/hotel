const fs = require("fs");
const path = require("path");

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

ensureDir("lib/data");
ensureDir("components/hotels");
ensureDir("app/hotels/[slug]");

// ----------------------------------------------------
// 1. DATA LAYER
// ----------------------------------------------------
fs.writeFileSync("lib/data/hotels.ts", `export interface HotelRoom {
  name: string;
  image: string;
  features: string[];
}

export interface HotelDining {
  name: string;
  description: string;
  image: string;
}

export interface Hotel {
  id: string;
  slug: string;
  name: string;
  stars: number;
  location: string;
  address: string;
  tagline: string;
  description: string;
  quote: string;
  heroImage: string;
  gallery: string[];
  propertyType: string;
  idealFor: string;
  checkIn: string;
  checkOut: string;
  amenities: { name: string; icon: string }[];
  rooms: HotelRoom[];
  dining: HotelDining[];
  nearbyPlaces: { name: string; distance: string; image: string }[];
  faqs: { question: string; answer: string }[];
  rating: number;
  reviewsCount: number;
}

export const mockHotels: Hotel[] = [
  {
    id: "the-leela-palace",
    slug: "the-leela-palace",
    name: "The Leela Palace Goa",
    stars: 5,
    location: "Mobor, South Goa, India",
    address: "Mobor Beach, Cavelossim, Goa 403731",
    tagline: "A Luxurious Beachfront Escape in Goa",
    description: "Experience unparalleled luxury at The Leela Palace Goa, a stunning beachfront resort set amidst serene landscapes, pristine beaches and world-class hospitality. Perfect for families, couples and luxury travellers seeking a memorable getaway. Spread across 75 acres of lush greenery, with direct access to the pristine Mobor Beach, inspired by Portuguese culture and modern luxury, the resort offers elegant rooms, world-class dining, a rejuvenating spa and exceptional hospitality, making it one of the most sought-after luxury resorts in Goa.",
    quote: "Where timeless elegance meets Goan charm.",
    heroImage: "/hotels-cruises/leela.jpg",
    gallery: ["/hotels-cruises/leela.jpg", "/destinations/goa.png", "/images/hero-maldives.jpg"],
    propertyType: "Luxury Resort",
    idealFor: "Couples, Families, Honeymooners",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    amenities: [
      { name: "Swimming Pool", icon: "pool" },
      { name: "Spa & Wellness", icon: "spa" },
      { name: "Fitness Centre", icon: "fitness" },
      { name: "Multiple Restaurants", icon: "restaurant" },
      { name: "Beach Access", icon: "beach" },
      { name: "Kids Club", icon: "kids" },
      { name: "Wi-Fi", icon: "wifi" },
      { name: "Concierge Service", icon: "concierge" }
    ],
    rooms: [
      { name: "Deluxe Room", image: "/hotels-cruises/leela.jpg", features: ["King / Twin Bed", "Garden View", "Up to 3 Guests"] },
      { name: "Premier Room", image: "/hotels-cruises/leela.jpg", features: ["King / Twin Bed", "Lagoon View", "Up to 3 Guests"] },
      { name: "Luxury Suite", image: "/hotels-cruises/leela.jpg", features: ["Spacious Living Area", "Premium Amenities", "Up to 3 Guests"] },
      { name: "Pool Villa", image: "/hotels-cruises/leela.jpg", features: ["Private Pool", "Exclusive Villa", "Up to 4 Guests"] }
    ],
    dining: [
      { name: "The Restaurant", description: "All-day dining with global cuisine", image: "/hotels-cruises/leela.jpg" },
      { name: "Jamavar", description: "Authentic Indian fine dining", image: "/hotels-cruises/leela.jpg" },
      { name: "Susegado", description: "Relaxed beachfront dining", image: "/hotels-cruises/leela.jpg" }
    ],
    nearbyPlaces: [
      { name: "Mobor Beach", distance: "0.5 km", image: "/destinations/goa.png" },
      { name: "Cavelossim Beach", distance: "3 km", image: "/destinations/goa.png" },
      { name: "Varca Beach", distance: "6 km", image: "/destinations/goa.png" },
      { name: "Margao", distance: "12 km", image: "/destinations/goa.png" }
    ],
    faqs: [
      { question: "What is the best time to stay at The Leela Palace Goa?", answer: "The best time is between November and February when the weather is cool and pleasant." },
      { question: "Does the hotel have direct beach access?", answer: "Yes, the hotel has direct access to the pristine Mobor Beach." },
      { question: "Are there family-friendly facilities?", answer: "Yes, we have a Kids Club and family pool." },
      { question: "Can you arrange airport transfers?", answer: "Yes, airport transfers can be arranged at an additional cost." }
    ],
    rating: 4.8,
    reviewsCount: 1200
  },
  {
    id: "radisson-blu",
    slug: "radisson-blu",
    name: "Radisson Blu",
    stars: 5,
    location: "City Center, India",
    address: "City Center",
    tagline: "Modern Comfort in the Heart of the City",
    description: "Enjoy a luxurious stay with modern amenities, perfect for business and leisure travelers alike.",
    quote: "Your home away from home.",
    heroImage: "/hotels-cruises/raddison.jpg",
    gallery: ["/hotels-cruises/raddison.jpg"],
    propertyType: "Business Hotel",
    idealFor: "Business Travelers, Couples",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    amenities: [
      { name: "Swimming Pool", icon: "pool" },
      { name: "Fitness Centre", icon: "fitness" },
      { name: "Wi-Fi", icon: "wifi" },
      { name: "Business Centre", icon: "business" }
    ],
    rooms: [
      { name: "Standard Room", image: "/hotels-cruises/raddison.jpg", features: ["Queen Bed", "City View", "Up to 2 Guests"] }
    ],
    dining: [], nearbyPlaces: [], faqs: [], rating: 4.5, reviewsCount: 850
  },
  {
    id: "taj-exotica",
    slug: "taj-exotica",
    name: "Taj Exotica Resort",
    stars: 5,
    location: "Benaulim, Goa",
    address: "Benaulim, Goa 403716",
    tagline: "Mediterranean Elegance on the Goan Coast",
    description: "Sprawling across 56 acres of lush greenery, the Taj Exotica Resort offers Mediterranean-inspired luxury with sweeping views of the Arabian Sea.",
    quote: "A timeless sanctuary of luxury.",
    heroImage: "/hotels-cruises/taj.jpg",
    gallery: ["/hotels-cruises/taj.jpg"],
    propertyType: "Luxury Resort",
    idealFor: "Couples, Families",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    amenities: [
      { name: "Swimming Pool", icon: "pool" },
      { name: "Spa", icon: "spa" },
      { name: "Golf Course", icon: "golf" },
      { name: "Wi-Fi", icon: "wifi" }
    ],
    rooms: [], dining: [], nearbyPlaces: [], faqs: [], rating: 4.9, reviewsCount: 2100
  },
  {
    id: "st-regis",
    slug: "st-regis",
    name: "The St. Regis",
    stars: 5,
    location: "Lower Parel, Mumbai",
    address: "462, Senapati Bapat Marg, Lower Parel, Mumbai 400013",
    tagline: "The Best Address in Mumbai",
    description: "Experience exquisite luxury, breathtaking views, and the legendary St. Regis Butler Service in the heart of Mumbai.",
    quote: "Live Exquisite.",
    heroImage: "/hotels-cruises/stregis.jpg",
    gallery: ["/hotels-cruises/stregis.jpg"],
    propertyType: "Luxury City Hotel",
    idealFor: "Business Travelers, Luxury Seekers",
    checkIn: "3:00 PM",
    checkOut: "12:00 PM",
    amenities: [
      { name: "Swimming Pool", icon: "pool" },
      { name: "Iridium Spa", icon: "spa" },
      { name: "Butler Service", icon: "concierge" },
      { name: "Wi-Fi", icon: "wifi" }
    ],
    rooms: [], dining: [], nearbyPlaces: [], faqs: [], rating: 4.7, reviewsCount: 1500
  }
];

export function getHotels(): Hotel[] {
  return mockHotels;
}

export function getHotelBySlug(slug: string): Hotel | undefined {
  return mockHotels.find(h => h.slug === slug);
}

export function getSimilarHotels(slug: string): Hotel[] {
  return mockHotels.filter(h => h.slug !== slug).slice(0, 4);
}
`);

// ----------------------------------------------------
// 2. MAIN COMPONENTS
// ----------------------------------------------------
fs.writeFileSync("components/hotels/HotelHero.tsx", `import Image from "next/image";
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
          <button className="absolute bottom-24 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors">
            <PlayCircle className="w-4 h-4" /> Watch Hotel Video
          </button>
        </div>
      </div>
    </div>
  );
}
`);

fs.writeFileSync("components/hotels/HotelStickyNav.tsx", `"use client";
import { useState, useEffect } from "react";

export default function HotelStickyNav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navs = ["Overview", "Rooms", "Amenities", "Dining", "Location", "Nearby Places", "Reviews", "FAQs", "Enquiry"];

  return (
    <div className={\`w-full bg-white border-b border-gray-200 z-40 transition-all duration-300 \${isSticky ? 'fixed top-0 shadow-md' : 'relative'}\`}>
      <div className="container mx-auto px-4">
        <ul className="flex items-center overflow-x-auto hide-scrollbar gap-2 md:gap-6">
          {navs.map((nav, i) => (
            <li key={i}>
              <a 
                href={\`#\${nav.toLowerCase().replace(' ', '-')}\`}
                className={\`block whitespace-nowrap py-4 text-sm font-bold border-b-2 transition-colors \${i === 0 ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-primary'}\`}
              >
                {nav}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
`);

fs.writeFileSync("components/hotels/HotelQuickInfo.tsx", `import { Hotel } from "@/lib/data/hotels";
import { MapPin, Building, Users, Bed, CalendarCheck, CalendarOff } from "lucide-react";

export default function HotelQuickInfo({ hotel }: { hotel: Hotel }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h3 className="text-lg font-bold text-primary mb-6">Quick Hotel Information</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Location</span>
            <span className="text-sm font-semibold text-primary">{hotel.location.split(',')[0]}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Building className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Property Type</span>
            <span className="text-sm font-semibold text-primary">{hotel.propertyType}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Ideal For</span>
            <span className="text-sm font-semibold text-primary">{hotel.idealFor}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Bed className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Room Categories</span>
            <span className="text-sm font-semibold text-primary">{hotel.rooms.length > 0 ? hotel.rooms.map(r=>r.name).join(', ').substring(0,20)+'...' : 'Standard'}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Check-in</span>
            <span className="text-sm font-semibold text-primary">{hotel.checkIn}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <CalendarOff className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Check-out</span>
            <span className="text-sm font-semibold text-primary">{hotel.checkOut}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
`);

fs.writeFileSync("components/hotels/HotelAbout.tsx", `import { Hotel } from "@/lib/data/hotels";

export default function HotelAbout({ hotel }: { hotel: Hotel }) {
  return (
    <div id="overview" className="flex flex-col lg:flex-row gap-10 scroll-mt-24">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-primary mb-4">About {hotel.name}</h2>
        <p className="text-gray-600 leading-relaxed">
          {hotel.description}
        </p>
      </div>
      <div className="lg:w-1/3 bg-blue-50 rounded-xl p-8 flex items-center justify-center border border-blue-100">
        <blockquote className="text-xl font-serif italic text-primary text-center">
          <span className="text-4xl text-blue-300 leading-none mr-2">"</span>
          {hotel.quote}
          <span className="text-4xl text-blue-300 leading-none ml-2">"</span>
        </blockquote>
      </div>
    </div>
  );
}
`);
console.log("Hotels Phase 1 completed.");
