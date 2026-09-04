export interface Destination {
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
      { title: "Beach Hopping", desc: "Explore the golden sands of Baga, Calangute, and Anjuna.", img: "/activities/beach_hopping_goa.jpg" },
      { title: "Water Sports", desc: "Parasailing, jet-skiing and banana boat rides.", img: "/activities/watersports_goa.jpg" },
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
      { title: "Skiing in Solang", desc: "Experience thrilling winter sports.", img: "/activities/skiing_manali.jpg" },
      { title: "River Rafting", desc: "Navigate the rapids of the Beas River.", img: "/activities/river_rafting_manali.jpg" },
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
    thingsToDo: [
      { title: "Houseboat Cruises", desc: "Drift along the serene backwaters of Alleppey.", img: "/activities/houseboat_kerala.jpg" },
      { title: "Tea Estate Walks", desc: "Stroll through the lush green plantations in Munnar.", img: "/activities/tea_estates_kerala.jpg" },
    ], 
    attractions: [], 
    gallery: ["/destinations/kerala.png"], 
    faqs: []
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
    thingsToDo: [
      { title: "Desert Safari", desc: "Ride camels and watch the sunset in the Thar desert.", img: "/activities/desert_safari_rajasthan.jpg" },
      { title: "Fort Exploration", desc: "Visit magnificent forts like Amber and Mehrangarh.", img: "/images/hero-maldives.jpg" },
    ], 
    attractions: [], 
    gallery: ["/destinations/rajasthan.png"], 
    faqs: []
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
    thingsToDo: [
      { title: "Burj Khalifa Views", desc: "Witness the magnificent skyline and Dubai Fountains.", img: "/activities/burj_khalifa_dubai.jpg" },
      { title: "Dune Bashing", desc: "Experience thrilling desert safaris outside the city.", img: "/images/cta-mountain.jpg" },
    ], 
    attractions: [], 
    gallery: ["/destinations/dubai.png"], 
    faqs: []
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
    thingsToDo: [
      { title: "Tegalalang Rice Terraces", desc: "Walk through the stunning layered green landscapes.", img: "/activities/rice_terraces_bali.jpg" },
      { title: "Surfing", desc: "Catch the world-class waves at Uluwatu or Canggu.", img: "/activities/surfing_bali.jpg" },
    ], 
    attractions: [], 
    gallery: ["/destinations/bali.png"], 
    faqs: []
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
    thingsToDo: [
      { title: "Gardens by the Bay", desc: "Marvel at the illuminated Supertree Grove at night.", img: "/activities/gardens_by_bay_singapore.jpg" },
      { title: "Universal Studios", desc: "Enjoy thrilling rides and attractions at Sentosa Island.", img: "/activities/universal_studios_singapore.jpg" },
    ], 
    attractions: [], 
    gallery: ["/destinations/singapore.png"], 
    faqs: []
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
    thingsToDo: [
      { title: "Milford Sound Cruise", desc: "Sail past towering peaks and cascading waterfalls.", img: "/activities/fjordland_nz.jpg" },
      { title: "Bungee Jumping", desc: "Take a leap of faith in Queenstown, the adventure capital.", img: "/images/cta-mountain.jpg" },
    ], 
    attractions: [], 
    gallery: ["/destinations/new zealand.png"], 
    faqs: []
  },
];

export function getDestinations(): Destination[] {
  return mockDestinations;
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return mockDestinations.find(d => d.slug === slug);
}
