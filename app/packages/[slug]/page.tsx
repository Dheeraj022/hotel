import InnerPageHero from "@/components/layout/InnerPageHero";

export default function Page() {
  return (
    <main>
      <InnerPageHero 
        title="Package Details" 
        description="View the itinerary, pricing, and details for this package." 
        breadcrumb="Package Details" 
      />
      <div className="py-16 container mx-auto px-4 min-h-[400px]"><p className="text-lg text-text-secondary">Detailed itinerary will go here.</p></div>
    </main>
  );
}
