const fs = require("fs");

// Create DestinationActivities
fs.writeFileSync("components/destinations/DestinationActivities.tsx", `import { Destination } from "@/lib/data/destinations";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function DestinationActivities({ destination }: { destination: Destination }) {
  if (!destination.thingsToDo || destination.thingsToDo.length === 0) return null;

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-8">Things To Do in {destination.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destination.thingsToDo.map((activity, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border-color group">
              <div className="relative h-48 overflow-hidden">
                <Image src={activity.img} alt={activity.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">{activity.title}</h3>
                <p className="text-sm text-text-secondary">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {destination.attractions && destination.attractions.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Top Attractions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {destination.attractions.map((attraction, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-border-color hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{attraction.title}</h3>
                  <p className="text-sm text-text-secondary">{attraction.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
`);

// Create DestinationTravelInfo
fs.writeFileSync("components/destinations/DestinationTravelInfo.tsx", `import { Destination } from "@/lib/data/destinations";
import { Plane, Train, Banknote, Languages, Clock, FileCheck } from "lucide-react";

export default function DestinationTravelInfo({ destination }: { destination: Destination }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-8">Travel Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <Plane className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Getting There</h4>
            <p className="text-xs text-text-secondary">Major international and domestic airports are well connected.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <Train className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Local Transport</h4>
            <p className="text-xs text-text-secondary">Taxis, rental cars, and public transport are widely available.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <Banknote className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Currency</h4>
            <p className="text-xs text-text-secondary">{destination.region === "Domestic" ? "Indian Rupee (INR)" : "Local Currency / USD accepted in major spots."}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <Languages className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Languages</h4>
            <p className="text-xs text-text-secondary">English is widely understood in tourist areas.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <FileCheck className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Visa Requirements</h4>
            <p className="text-xs text-text-secondary">{destination.region === "Domestic" ? "Not required for Indian citizens." : "Visa on arrival / E-Visa available for most tourists."}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <Clock className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Best Time To Visit</h4>
            <p className="text-xs text-text-secondary">{destination.bestTime}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
`);

// Update app/destinations/[slug]/page.tsx
fs.writeFileSync("app/destinations/[slug]/page.tsx", `import { notFound } from "next/navigation";
import { getDestinationBySlug } from "@/lib/data/destinations";
import DestinationHero from "@/components/destinations/DestinationHero";
import DestinationQuickInfo from "@/components/destinations/DestinationQuickInfo";
import DestinationOverview from "@/components/destinations/DestinationOverview";
import DestinationActivities from "@/components/destinations/DestinationActivities";
import DestinationTravelInfo from "@/components/destinations/DestinationTravelInfo";
import DestinationEnquiryForm from "@/components/destinations/DestinationEnquiryForm";
import DestinationGallery from "@/components/destinations/DestinationGallery";
import PackageGrid from "@/components/packages/PackageGrid";
import HotelsAndCruises from "@/components/home/HotelsAndCruises";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const dest = getDestinationBySlug(p.slug);
  if (!dest) return {};

  return {
    title: \`\${dest.name} Holiday Packages & Travel Guide | Brightspark\`,
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
console.log("Phase 2 components added.");
