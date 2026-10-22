import InnerPageHero from "@/components/layout/InnerPageHero";
import CruiseCard from "@/components/cruises/CruiseCard";
import CTASection from "@/components/home/CTASection";
import OurRoleNotice from "@/components/common/OurRoleNotice";
import { getCruises } from "@/lib/data/cruises";

export default function Page() {
  const cruises = getCruises();

  return (
    <main>
      <InnerPageHero 
        title="Cruise Experiences" 
        description="Set sail on a luxurious cruise vacation with top-tier amenities and global destinations." 
        breadcrumb="Cruises" 
      />
      
      <section className="py-16 lg:py-24 bg-page-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 inline-flex items-center gap-4">
              <span className="h-px w-12 bg-border-color hidden sm:block"></span>
              CRUISE EXPERIENCES
              <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Explore our handpicked selection of premium ocean and river cruises. From family-friendly adventures to luxurious romantic getaways, we have the perfect itinerary for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {cruises.map((cruise) => (
              <CruiseCard key={cruise.id} cruise={cruise} />
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <OurRoleNotice />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
