import { notFound } from "next/navigation";
import { getDestinationBySlug } from "@/lib/data/destinations";
import DestinationHero from "@/components/destinations/DestinationHero";
import DestinationQuickInfo from "@/components/destinations/DestinationQuickInfo";
import DestinationOverview from "@/components/destinations/DestinationOverview";
import DestinationActivities from "@/components/destinations/DestinationActivities";
import DestinationTravelInfo from "@/components/destinations/DestinationTravelInfo";
import DestinationEnquiryForm from "@/components/destinations/DestinationEnquiryForm";
import PackageGrid from "@/components/packages/PackageGrid";
import HotelsAndCruises from "@/components/home/HotelsAndCruises";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const dest = getDestinationBySlug(p.slug);
  if (!dest) return {};

  return {
    title: `${dest.name} Holiday Packages & Travel Guide | Brightspark`,
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
            
            <DestinationActivities destination={destination} />
            
            {/* Embedded Packages Grid */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Popular {destination.name} Packages</h2>
              <PackageGrid />
            </div>
            
            <DestinationTravelInfo destination={destination} />
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
