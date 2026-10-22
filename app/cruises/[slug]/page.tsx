import { notFound } from "next/navigation";
import { getCruiseBySlug, getRelatedCruises } from "@/lib/data/cruises";
import CruiseHero from "@/components/cruises/CruiseHero";
import CruiseStickyNav from "@/components/cruises/CruiseStickyNav";
import CruiseAbout from "@/components/cruises/CruiseAbout";
import CruiseItinerary from "@/components/cruises/CruiseItinerary";
import CruiseCabins from "@/components/cruises/CruiseCabins";
import CruiseDining from "@/components/cruises/CruiseDining";
import CruiseActivitiesList from "@/components/cruises/CruiseActivitiesList";
import CruiseDestinations from "@/components/cruises/CruiseDestinations";
import CruiseSidebar from "@/components/cruises/CruiseSidebar";
import CruiseOverview from "@/components/cruises/CruiseOverview";
import CruiseIncluded from "@/components/cruises/CruiseIncluded";
import CruiseCard from "@/components/cruises/CruiseCard";
import CTASection from "@/components/home/CTASection";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const cruise = getCruiseBySlug(p.slug);
  if (!cruise) return {};

  return {
    title: `${cruise.name} | Guest Assists`,
    description: cruise.shortDescription,
  };
}

export default async function CruisePage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const cruise = getCruiseBySlug(p.slug);
  
  if (!cruise) {
    notFound();
  }

  const relatedCruises = getRelatedCruises(p.slug, 3);

  return (
    <main className="bg-gray-50 pb-0 min-h-screen">
      <CruiseHero cruise={cruise} />
      
      <CruiseStickyNav />

      {/* Main Content with 2-Column Layout */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-16">
            <CruiseAbout cruise={cruise} />
            <CruiseItinerary cruise={cruise} />
            <CruiseCabins cruise={cruise} />
            <CruiseDining cruise={cruise} />
            <CruiseActivitiesList cruise={cruise} />
            <CruiseDestinations cruise={cruise} />
            
            {/* Keeping old components as fallbacks for properties like Inclusions and Important Info */}
            <CruiseIncluded cruise={cruise} />
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40">
              <CruiseSidebar cruise={cruise} />
            </div>
          </div>

        </div>
      </div>

      {/* Related Cruises */}
      {relatedCruises.length > 0 && (
        <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#031b4e] mb-12 text-center inline-flex items-center gap-4 justify-center w-full">
              <span className="h-px w-12 bg-gray-200 hidden sm:block"></span>
              EXPLORE OTHER CRUISES
              <span className="h-px w-12 bg-gray-200 hidden sm:block"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCruises.map((c) => (
                <CruiseCard key={c.id} cruise={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 flex gap-3">
        <a href="#enquiry" className="flex-1 bg-accent text-white py-3 rounded-md font-bold text-sm text-center">
          ENQUIRE
        </a>
        <a href="https://wa.me/919876543210" className="flex-1 bg-[#25D366] text-white py-3 rounded-md font-bold text-sm text-center">
          WHATSAPP
        </a>
      </div>

      {/* Extra padding on mobile to account for sticky footer */}
      <div className="h-20 md:hidden"></div>

      <div className="bg-[#031b4e]">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Set Sail?</h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">Let our travel experts help you plan the perfect cruise holiday.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#enquiry" className="bg-accent text-white px-8 py-4 rounded font-bold hover:bg-accent-light transition-colors uppercase tracking-wide text-sm">
              GET A FREE CRUISE QUOTE
            </a>
            <a href="https://wa.me/919876543210" className="bg-[#25D366] text-white px-8 py-4 rounded font-bold hover:bg-[#20b858] transition-colors flex items-center gap-2 uppercase tracking-wide text-sm">
               <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
