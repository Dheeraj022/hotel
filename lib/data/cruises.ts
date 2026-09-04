export interface ItineraryDay {
  day: number;
  location: string;
  activity: string;
  image?: string;
}

export interface CruiseItineraryOption {
  title: string;
  days: ItineraryDay[];
}

export interface Cabin {
  name: string;
  description: string;
  features: string[];
  price?: string;
  image: string;
}

export interface DiningOption {
  name: string;
  description: string;
  image: string;
}

export interface CruiseActivity {
  name: string;
  icon: string; 
}

export interface DestinationCovered {
  name: string;
  description: string;
  image: string;
}

export interface ShipFacts {
  grossTonnage: string;
  guestCapacity: string;
  passengerDecks: string;
  diningOptionsCount: string;
  onboardActivitiesCount: string;
}

export interface CruiseFaq {
  question: string;
  answer: string;
}

export interface CruiseReview {
  author: string;
  rating: number;
  text: string;
}

export interface Cruise {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  destination: string;
  departure: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  duration: string;
  bestFor: string;
  startingPrice: string;
  highlights: string[];
  shipFacts: ShipFacts;
  itineraryOptions: CruiseItineraryOption[];
  cabins: Cabin[];
  diningOptions: DiningOption[];
  onboardActivities: CruiseActivity[];
  destinationsCovered: DestinationCovered[];
  included: string[];
  excluded: string[];
  facilities: string[];
  faqs: CruiseFaq[];
  reviews: CruiseReview[];
}

const mockCruises: Cruise[] = [
  {
    id: "royal-caribbean",
    slug: "royal-caribbean",
    name: "Royal Caribbean Spectrum of the Seas",
    category: "Ocean Cruise",
    categorySlug: "ocean",
    destination: "Caribbean / Asia",
    departure: "Singapore Departure",
    shortDescription: "Experience a perfect blend of adventure, entertainment and world-class hospitality with Royal Caribbean's Spectrum of the Seas.",
    description: "Royal Caribbean's Spectrum of the Seas is a next-generation cruise ship designed to offer extraordinary experiences for travellers of all ages. From thrilling activities and spectacular entertainment to a wide range of dining options, this ship promises a memorable journey on the open seas.",
    heroImage: "/cruise/royal.webp",
    duration: "3 Nights / 4 Days",
    bestFor: "Couple | Family | Friends",
    startingPrice: "From ₹45,000*",
    highlights: [
      "World-class Ships",
      "Exciting Destinations",
      "Luxurious Accommodation",
      "Dining & Entertainment",
      "Family Friendly",
      "Unforgettable Experiences"
    ],
    shipFacts: {
      grossTonnage: "169,379",
      guestCapacity: "4,905",
      passengerDecks: "16",
      diningOptionsCount: "28+",
      onboardActivitiesCount: "Exciting"
    },
    itineraryOptions: [
      {
        title: "3 Nights Singapore Cruise",
        days: [
          { day: 1, location: "Singapore", activity: "Departure (4:00 PM)", image: "/destinations/singapore.png" },
          { day: 2, location: "At Sea", activity: "Explore onboard activities", image: "/cruise/royal.webp" },
          { day: 3, location: "Penang / Phuket", activity: "(8:00 AM - 6:00 PM)", image: "/destinations/bali.png" },
          { day: 4, location: "Singapore", activity: "Arrival (7:00 AM)", image: "/destinations/singapore.png" },
        ]
      },
      {
        title: "4 Nights Singapore - Penang - Phuket",
        days: [
          { day: 1, location: "Singapore", activity: "Departure (4:00 PM)", image: "/destinations/singapore.png" },
          { day: 2, location: "Penang", activity: "Shore Excursion", image: "/destinations/bali.png" },
          { day: 3, location: "Phuket", activity: "Explore the Island", image: "/destinations/goa.png" },
          { day: 4, location: "At Sea", activity: "Relax & Enjoy", image: "/cruise/royal.webp" },
          { day: 5, location: "Singapore", activity: "Arrival", image: "/destinations/singapore.png" },
        ]
      }
    ],
    cabins: [
      { name: "Interior Cabin", description: "Comfortable & Affordable", features: ["Up to 2 Guests", "Modern Amenities"], price: "Price on Request", image: "/cruise/interior-cabin.jpg" },
      { name: "Ocean View Cabin", description: "Beautiful Sea Views", features: ["Up to 3 Guests", "Window View"], price: "Price on Request", image: "/cruise/ocean-view-cabin.png" },
      { name: "Balcony Cabin", description: "Private Balcony Experience", features: ["Up to 4 Guests", "Ocean View Balcony"], price: "Price on Request", image: "/cruise/balcony-cabin.jpg" },
      { name: "Suite", description: "Premium Luxury & Space", features: ["Up to 4 Guests", "Exclusive Benefits"], price: "Price on Request", image: "/cruise/suite-cabin.jpg" },
    ],
    diningOptions: [
      { name: "Main Dining Room", description: "International Cuisine", image: "/cruise/main-dining.png" },
      { name: "Specialty Restaurants", description: "Unique Dining Experiences", image: "/cruise/specialty-dining.png" },
      { name: "Cafes & Snacks", description: "Quick Bites", image: "/images/cafe.jpeg" },
      { name: "Bars & Lounges", description: "Relax & Unwind", image: "/cruise/bars-lounges.jpg" },
    ],
    onboardActivities: [
      { name: "Adventure Activities", icon: "activity" },
      { name: "Live Shows & Entertainment", icon: "music" },
      { name: "Swimming Pools & Water Activities", icon: "droplets" },
      { name: "Kids & Teens Programs", icon: "users" },
      { name: "Fitness & Wellness Centre", icon: "heart" },
      { name: "Shopping & Retail", icon: "shopping-bag" },
    ],
    destinationsCovered: [
      { name: "Singapore", description: "Modern Metropolis", image: "/images/hero-maldives.jpg" },
      { name: "Penang", description: "Cultural Charm", image: "/images/cta-mountain.jpg" },
      { name: "Phuket", description: "Beaches & Nightlife", image: "/images/hero-maldives.jpg" },
      { name: "Langkawi", description: "Natural Beauty", image: "/images/cta-mountain.jpg" },
      { name: "Kuala Lumpur", description: "(Selected Itineraries)", image: "/images/hero-maldives.jpg" },
      { name: "At Sea", description: "Endless Entertainment", image: "/cruise/royal.webp" },
    ],
    included: [
      "Accommodation onboard",
      "Selected meals in main dining",
      "Entertainment & Stage Shows",
      "Pool access and deck activities",
      "Kids club access"
    ],
    excluded: [
      "Flights to departure port",
      "Visa & Taxes",
      "Travel insurance",
      "Specialty dining",
      "Alcoholic beverages",
      "Shore excursions"
    ],
    facilities: [
      "Restaurants",
      "Swimming Pool",
      "Fitness Centre",
      "Spa",
      "Kids Club",
      "Entertainment",
      "Shopping"
    ],
    faqs: [
      { question: "What is included in the cruise package?", answer: "Your package includes accommodation, main meals, access to most onboard entertainment, and use of swimming pools and fitness centers." },
      { question: "Do you provide visa assistance?", answer: "Yes, our travel experts will guide you through the visa requirements for your itinerary." },
      { question: "Can you help with flight and hotel arrangements?", answer: "Absolutely. We offer complete holiday packages including flights, pre/post cruise hotels, and transfers." },
      { question: "Is travel insurance recommended?", answer: "Yes, we strongly recommend comprehensive travel insurance for all cruise holidays." },
      { question: "What happens after I submit the enquiry form?", answer: "One of our cruise specialists will contact you within 24 hours to discuss your requirements and provide a customized quote." }
    ],
    reviews: [
      { author: "Rohan & Family", rating: 5, text: "Amazing experience! Everything was well-organized and the cruise was fantastic. Thank you Brightspark for the great support." },
      { author: "Priya S.", rating: 4.5, text: "The booking process was seamless. The Spectrum of the Seas is a beautiful ship." }
    ]
  },
  {
    id: "resorts-world-one",
    slug: "resorts-world-one",
    name: "Resorts World One",
    category: "Ocean Cruise",
    categorySlug: "ocean",
    destination: "Hong Kong / Taiwan",
    departure: "Hong Kong Departure",
    shortDescription: "Discover the magic of Asia aboard the Resorts World One with exciting itineraries and premium amenities.",
    description: "Resorts World One is a modern cruise ship offering an array of culinary delights, thrilling entertainment, and relaxing spaces. It is the perfect choice for a quick getaway or a week-long exploration in Asia.",
    heroImage: "/cruise/celebrity.jpg",
    duration: "2 Nights / 3 Days",
    bestFor: "Couple | Family",
    startingPrice: "From ₹35,000*",
    highlights: ["Asian Hospitality", "Exciting Destinations", "Casino & Entertainment", "Family Friendly"],
    shipFacts: { grossTonnage: "75,338", guestCapacity: "1,856", passengerDecks: "13", diningOptionsCount: "18+", onboardActivitiesCount: "Thrilling" },
    itineraryOptions: [
      {
        title: "2 Nights Weekend Getaway",
        days: [
          { day: 1, location: "Hong Kong", activity: "Departure" },
          { day: 2, location: "At Sea", activity: "Cruising" },
          { day: 3, location: "Hong Kong", activity: "Arrival" }
        ]
      }
    ],
    cabins: [
      { name: "Interior Stateroom", description: "Cozy & Affordable", features: ["2 Guests"], price: "On Request", image: "/cruise/interior-cabin.jpg" },
      { name: "Oceanview", description: "Window View", features: ["3 Guests"], price: "On Request", image: "/cruise/ocean-view-cabin.png" },
      { name: "Balcony", description: "Private Balcony", features: ["4 Guests"], price: "On Request", image: "/cruise/balcony-cabin.jpg" },
      { name: "The Palace Suite", description: "Ultimate Luxury", features: ["Exclusive Perks"], price: "On Request", image: "/cruise/suite-cabin.jpg" }
    ],
    diningOptions: [
      { name: "Dream Dining Room", description: "Asian & Western", image: "/cruise/main-dining.png" },
      { name: "Specialty Dining", description: "Premium Experience", image: "/cruise/specialty-dining.png" },
      { name: "Cafes", description: "Snacks & Drinks", image: "/images/cafe.jpeg" },
      { name: "Lounges", description: "Relaxing Vibe", image: "/cruise/bars-lounges.jpg" }
    ],
    onboardActivities: [
      { name: "Parties & Nightlife", icon: "music" },
      { name: "Swimming Pool", icon: "droplets" },
      { name: "Kids Zone", icon: "users" },
      { name: "Spa & Wellness", icon: "heart" }
    ],
    destinationsCovered: [
      { name: "Hong Kong", description: "Departure Port", image: "/images/hero-maldives.jpg" },
      { name: "Kaohsiung", description: "Taiwan", image: "/images/cta-mountain.jpg" }
    ],
    included: ["Accommodation", "Main meals", "Onboard entertainment"],
    excluded: ["Flights", "Visas", "Gratuities", "Specialty Dining"],
    facilities: ["Restaurants", "Pool", "Spa", "Kids Area", "Casino"],
    faqs: [
      { question: "Is passport required?", answer: "Yes, a valid passport is mandatory." }
    ],
    reviews: [
      { author: "Amit K.", rating: 4, text: "Great short trip!" }
    ]
  },
  {
    id: "cordelia-cruises",
    slug: "cordelia-cruises",
    name: "Cordelia Cruises (The Empress)",
    category: "Ocean Cruise",
    categorySlug: "ocean",
    destination: "India",
    departure: "Mumbai Departure",
    shortDescription: "Experience India's premium cruise liner offering a unique blend of Indian hospitality and international standards.",
    description: "Cordelia Cruises by Waterways Leisure Tourism Pvt ltd is India's premium cruise liner. It caters to the way Indians love to holiday, with an emphasis on Indian cuisine, entertainment, and hospitality.",
    heroImage: "/cruise/cordella.jpg",
    duration: "3 Nights / 4 Days",
    bestFor: "Family | Friends",
    startingPrice: "From ₹25,000*",
    highlights: ["Indian Hospitality", "Desi Entertainment", "Jain Food Available", "Sailing from Mumbai"],
    shipFacts: { grossTonnage: "48,563", guestCapacity: "1,840", passengerDecks: "11", diningOptionsCount: "5+", onboardActivitiesCount: "Many" },
    itineraryOptions: [
      {
        title: "3 Nights Mumbai - Goa - Mumbai",
        days: [
          { day: 1, location: "Mumbai", activity: "Departure" },
          { day: 2, location: "Goa", activity: "Shore Excursion" },
          { day: 3, location: "At Sea", activity: "Cruising" },
          { day: 4, location: "Mumbai", activity: "Arrival" }
        ]
      }
    ],
    cabins: [
      { name: "Interior", description: "Standard", features: ["2 Guests"], price: "On Request", image: "/cruise/interior-cabin.jpg" },
      { name: "Ocean View", description: "Porthole", features: ["3 Guests"], price: "On Request", image: "/cruise/ocean-view-cabin.png" },
      { name: "Balcony", description: "Sea Views", features: ["4 Guests"], price: "On Request", image: "/cruise/balcony-cabin.jpg" },
      { name: "Suite", description: "Spacious", features: ["Premium Perks"], price: "On Request", image: "/cruise/suite-cabin.jpg" }
    ],
    diningOptions: [
      { name: "Starlight Restaurant", description: "Fine Dining", image: "/cruise/main-dining.png" },
      { name: "Food Court", description: "Street Food", image: "/images/cafe.jpeg" },
      { name: "Chopstix", description: "Pan Asian", image: "/cruise/specialty-dining.png" },
      { name: "Connexions Bar", description: "Drinks", image: "/cruise/bars-lounges.jpg" }
    ],
    onboardActivities: [
      { name: "Balle Balle (Shows)", icon: "music" },
      { name: "Swimming Pool", icon: "droplets" },
      { name: "Cordelia Academy", icon: "users" },
      { name: "Spa", icon: "heart" }
    ],
    destinationsCovered: [
      { name: "Mumbai", description: "Departure", image: "/images/hero-maldives.jpg" },
      { name: "Goa", description: "Beaches", image: "/images/cta-mountain.jpg" },
      { name: "Lakshadweep", description: "Islands", image: "/images/hero-maldives.jpg" }
    ],
    included: ["Accommodation", "Meals in Starlight & Food Court", "Access to shows"],
    excluded: ["Travel to port", "Alcohol", "Specialty Dining"],
    facilities: ["Restaurants", "Pool", "Theatre", "Casino"],
    faqs: [
      { question: "Is Jain food available?", answer: "Yes, dedicated Jain food sections are available." }
    ],
    reviews: [
      { author: "Sharma Family", rating: 5, text: "Perfect family holiday! The food was excellent." }
    ]
  },
  {
    id: "anthem-of-the-seas",
    slug: "anthem-of-the-seas",
    name: "Anthem of the Seas",
    category: "Ocean Cruise",
    categorySlug: "ocean",
    destination: "Europe",
    departure: "Southampton Departure",
    shortDescription: "Experience groundbreaking activities and spectacular entertainment on this Quantum Class ship.",
    description: "Anthem of the Seas brings the next level of technology and innovation to cruising. Enjoy bumper cars, a skydiving simulator, and a London Eye-style viewing pod.",
    heroImage: "/cruise/norwegian.avif",
    duration: "7 Nights / 8 Days",
    bestFor: "Couple | Family",
    startingPrice: "From ₹95,000*",
    highlights: ["Quantum Class", "RipCord by iFLY", "North Star", "Bionic Bar"],
    shipFacts: { grossTonnage: "168,666", guestCapacity: "4,905", passengerDecks: "16", diningOptionsCount: "25+", onboardActivitiesCount: "Unlimited" },
    itineraryOptions: [
      {
        title: "7 Nights Norwegian Fjords",
        days: [
          { day: 1, location: "Southampton", activity: "Departure" },
          { day: 2, location: "At Sea", activity: "Cruising" },
          { day: 3, location: "Stavanger", activity: "Norway" },
          { day: 4, location: "Geiranger", activity: "Norway" },
          { day: 5, location: "Alesund", activity: "Norway" },
          { day: 6, location: "Kristiansand", activity: "Norway" },
          { day: 7, location: "At Sea", activity: "Cruising" },
          { day: 8, location: "Southampton", activity: "Arrival" }
        ]
      }
    ],
    cabins: [
      { name: "Interior Virtual Balcony", description: "Real-time Views", features: ["2 Guests"], price: "On Request", image: "/cruise/interior-cabin.jpg" },
      { name: "Ocean View", description: "Large Window", features: ["3 Guests"], price: "On Request", image: "/cruise/ocean-view-cabin.png" },
      { name: "Balcony", description: "Private Balcony", features: ["4 Guests"], price: "On Request", image: "/cruise/balcony-cabin.jpg" },
      { name: "Suite", description: "Royal Suite Class", features: ["Luxury Perks"], price: "On Request", image: "/cruise/suite-cabin.jpg" }
    ],
    diningOptions: [
      { name: "Main Dining", description: "International", image: "/cruise/main-dining.png" },
      { name: "Wonderland", description: "Imaginative Cuisine", image: "/cruise/specialty-dining.png" },
      { name: "Cafe Promenade", description: "24/7 Snacks", image: "/images/cafe.jpeg" },
      { name: "Bionic Bar", description: "Robot Bartenders", image: "/cruise/bars-lounges.jpg" }
    ],
    onboardActivities: [
      { name: "RipCord by iFLY", icon: "activity" },
      { name: "West End Shows", icon: "music" },
      { name: "Pools & Solarium", icon: "droplets" },
      { name: "SeaPlex", icon: "users" }
    ],
    destinationsCovered: [
      { name: "Southampton", description: "UK", image: "/images/hero-maldives.jpg" },
      { name: "Geiranger", description: "Norway", image: "/images/cta-mountain.jpg" }
    ],
    included: ["Accommodation", "Main Dining", "Most Entertainment"],
    excluded: ["Flights", "Visas", "Gratuities", "Shore Excursions"],
    facilities: ["Pools", "Spa", "Theatre", "SeaPlex", "North Star"],
    faqs: [
      { question: "Do I need a UK visa?", answer: "Yes, a valid UK visa and Schengen visa are required." }
    ],
    reviews: [
      { author: "The Patels", rating: 5, text: "The Norwegian Fjords were breathtaking! Highly recommend Anthem of the Seas." }
    ]
  }
];

export function getCruises(): Cruise[] {
  return mockCruises;
}

export function getCruiseBySlug(slug: string): Cruise | undefined {
  return mockCruises.find(c => c.slug === slug);
}

export function getRelatedCruises(currentSlug: string, limit = 3): Cruise[] {
  return mockCruises.filter(c => c.slug !== currentSlug).slice(0, limit);
}
