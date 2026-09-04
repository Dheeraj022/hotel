const fs = require("fs");

const newRooms = `[
      { name: "Standard Room", description: "Basic accommodation with essential facilities.", image: "/hotels-cruises/raddison.jpg", features: ["Queen Bed", "City View", "Up to 2 Guests"] },
      { name: "Superior Room", description: "More space and better furnishings than Standard.", image: "/hotels-cruises/taj.jpg", features: ["King Bed", "Garden View", "Up to 2 Guests"] },
      { name: "Deluxe Room", description: "Larger, more comfortable, with upgraded amenities.", image: "/hotels-cruises/leela.jpg", features: ["King Bed", "Pool View", "Up to 3 Guests"] },
      { name: "Suite", description: "Separate bedroom and living area; premium category.", image: "/hotels-cruises/stregis.jpg", features: ["King Bed", "Ocean View", "Up to 4 Guests"] }
    ]`;

const data = `export interface HotelRoom {
  name: string;
  description?: string;
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
    rooms: ${newRooms},
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
    rooms: ${newRooms},
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
    rooms: ${newRooms},
    dining: [], nearbyPlaces: [], faqs: [], rating: 4.9, reviewsCount: 2100
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
    rooms: ${newRooms},
    dining: [], nearbyPlaces: [], faqs: [], rating: 4.7, reviewsCount: 1500
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
`;

fs.writeFileSync("lib/data/hotels.ts", data);
console.log("Rooms updated for all hotels.");
