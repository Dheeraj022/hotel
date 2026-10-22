import InnerPageHero from "@/components/layout/InnerPageHero";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import CTASection from "@/components/home/CTASection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { getDestinations } from "@/lib/data/destinations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popular Destinations | Guest Assists",
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
