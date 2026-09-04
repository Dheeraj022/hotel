import InnerPageHero from "@/components/layout/InnerPageHero";
import HotelCard from "@/components/hotels/HotelCard";
import CTASection from "@/components/home/CTASection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { getHotels } from "@/lib/data/hotels";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotels & Resorts | Brightspark Leisure Services",
  description: "Book the best stays globally with Brightspark.",
};

export default function HotelsListingPage() {
  const hotels = getHotels();

  return (
    <main className="bg-gray-50">
      <InnerPageHero 
        title="Hotels & Resorts" 
        description="Discover luxury, comfort, and the perfect stay for your next adventure." 
        breadcrumb="Hotels" 
      />
      
      <div className="py-16 lg:py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <WhyChooseUs />
      </div>
      
      <CTASection />
    </main>
  );
}
