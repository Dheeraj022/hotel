export interface HotelRoom {
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

const standardAmenities = [
  { name: "Swimming Pool", icon: "pool" },
  { name: "Spa & Wellness", icon: "spa" },
  { name: "Fitness Centre", icon: "fitness" },
  { name: "Multiple Restaurants", icon: "restaurant" },
  { name: "Beach Access", icon: "beach" },
  { name: "Kids Club", icon: "kids" },
  { name: "Free Wi-Fi", icon: "wifi" },
  { name: "Concierge", icon: "concierge" },
  { name: "Business Centre", icon: "business" },
  { name: "Coffee Shop", icon: "coffee" },
  { name: "Free Parking", icon: "parking" },
  { name: "Lounge Bar", icon: "bar" },
  { name: "Smart TV", icon: "tv" },
  { name: "Air Conditioning", icon: "ac" },
  { name: "Laundry Service", icon: "laundry" },
  { name: "24/7 Security", icon: "security" },
  { name: "Room Telephone", icon: "phone" },
  { name: "Live Entertainment", icon: "entertainment" },
  { name: "Tour Desk", icon: "tours" },
  { name: "Card Payment", icon: "card" },
  { name: "Dedicated Workspace", icon: "workspace" },
  { name: "Photography", icon: "photo" },
  { name: "Lush Gardens", icon: "garden" },
  { name: "Mini Golf", icon: "golf" }
];

const standardRooms = [
  { name: "Standard Room", description: "Basic accommodation with essential facilities.", image: "/hotels-cruises/standard-room.jpg", features: ["Queen Bed", "City View", "Up to 2 Guests"] },
  { name: "Superior Room", description: "More space and better furnishings than Standard.", image: "/hotels-cruises/superior-room.jpg", features: ["King Bed", "Garden View", "Up to 2 Guests"] },
  { name: "Deluxe Room", description: "Larger, more comfortable, with upgraded amenities.", image: "/hotels-cruises/deluxe-room.jpg", features: ["King Bed", "Pool View", "Up to 3 Guests"] },
  { name: "Suite", description: "Separate bedroom and living area; premium category.", image: "/hotels-cruises/suite-room.jpg", features: ["King Bed", "Ocean View", "Up to 4 Guests"] }
];

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
    amenities: standardAmenities,
    rooms: standardRooms,
    dining: [], nearbyPlaces: [],
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
    description: "Welcome to Radisson Blu, where urban sophistication meets unparalleled comfort. Situated perfectly in the heart of the city, our hotel offers seamless access to major business hubs, shopping districts, and cultural landmarks. Whether you're travelling for an important business conference or a relaxing weekend getaway, you will find our state-of-the-art facilities, luxurious bedding, and award-winning culinary experiences designed to exceed your expectations.",
    quote: "",
    heroImage: "/hotels-cruises/raddison.jpg",
    gallery: ["/hotels-cruises/raddison.jpg"],
    propertyType: "Business Hotel",
    idealFor: "Business Travelers, Couples",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    amenities: standardAmenities,
    rooms: standardRooms,
    dining: [], nearbyPlaces: [], 
    faqs: [
      { question: "Do you have conference rooms available for booking?", answer: "Yes, we offer multiple high-tech conference rooms and a grand banquet hall." },
      { question: "Is breakfast included in the room tariff?", answer: "Complimentary buffet breakfast is included in all Superior and Suite bookings." },
      { question: "Does the hotel provide secure parking?", answer: "Yes, complimentary valet and secure underground parking is available." },
      { question: "What are the fitness center timings?", answer: "Our state-of-the-art fitness center is open 24/7 for all in-house guests." }
    ],
    rating: 4.5,
    reviewsCount: 850
  },
  {
    id: "taj-exotica",
    slug: "taj-exotica",
    name: "Taj Exotica Resort",
    stars: 5,
    location: "Benaulim, Goa",
    address: "Benaulim, Goa 403716",
    tagline: "Mediterranean Elegance on the Goan Coast",
    description: "Sprawling across 56 acres of lush greenery, the Taj Exotica Resort offers Mediterranean-inspired luxury with sweeping views of the Arabian Sea. Retreat into a world of quiet elegance where every moment is crafted to perfection. From our award-winning Jiva Spa to our sprawling golf course and immaculately landscaped gardens, this resort is a sanctuary for those seeking a tranquil and rejuvenating escape. Indulge in world-class culinary delights and experience the legendary hospitality of the Taj.",
    quote: "A timeless sanctuary of luxury.",
    heroImage: "/hotels-cruises/taj.jpg",
    gallery: ["/hotels-cruises/taj.jpg"],
    propertyType: "Luxury Resort",
    idealFor: "Couples, Families",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    amenities: standardAmenities,
    rooms: standardRooms,
    dining: [], nearbyPlaces: [], 
    faqs: [
      { question: "Is there a golf course on the property?", answer: "Yes, we feature a 9-hole executive golf course." },
      { question: "Does the resort offer water sports?", answer: "Yes, seasonal water sports can be arranged via our concierge." },
      { question: "Are pets allowed in the resort?", answer: "Yes, we are a pet-friendly resort subject to specific room category policies." },
      { question: "Is there a dedicated children's activity area?", answer: "Yes, our Kids Club offers daily supervised activities." }
    ],
    rating: 4.9,
    reviewsCount: 2100
  },
  {
    id: "st-regis",
    slug: "st-regis",
    name: "The St. Regis",
    stars: 5,
    location: "Lower Parel, Mumbai",
    address: "462, Senapati Bapat Marg, Lower Parel, Mumbai 400013",
    tagline: "The Best Address in Mumbai",
    description: "Experience exquisite luxury, breathtaking views, and the legendary St. Regis Butler Service in the heart of Mumbai. As the city's premier luxury destination, The St. Regis Mumbai combines timeless elegance with modern sophistication. Guests can indulge in spectacular dining at our award-winning restaurants, rejuvenate at the Iridium Spa, or relax by the stunning infinity pool overlooking the city skyline. It's truly a haven of opulence in the bustling metropolis.",
    quote: "Live Exquisite.",
    heroImage: "/hotels-cruises/stregis.jpg",
    gallery: ["/hotels-cruises/stregis.jpg"],
    propertyType: "Luxury City Hotel",
    idealFor: "Business Travelers, Luxury Seekers",
    checkIn: "3:00 PM",
    checkOut: "12:00 PM",
    amenities: standardAmenities,
    rooms: standardRooms,
    dining: [], nearbyPlaces: [], 
    faqs: [
      { question: "What is the St. Regis Butler Service?", answer: "It is our signature service offering 24-hour personalized assistance, packing/unpacking, and beverage service." },
      { question: "Is the hotel connected to a shopping mall?", answer: "Yes, we are directly connected to Palladium Mall, Mumbai's premier luxury retail destination." },
      { question: "Are there smoking rooms available?", answer: "We offer dedicated smoking rooms upon request, subject to availability." },
      { question: "Do you offer airport transfers in luxury vehicles?", answer: "Yes, our fleet of luxury cars is available for airport transfers." }
    ],
    rating: 4.7,
    reviewsCount: 1500
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
