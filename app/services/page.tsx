import InnerPageHero from "@/components/layout/InnerPageHero";

export default function Page() {
  return (
    <main>
      <InnerPageHero 
        title="Our Services" 
        description="Comprehensive travel and corporate services." 
        breadcrumb="Services" 
      />
      <div className="py-16 container mx-auto px-4 min-h-[400px]"><p className="text-lg text-text-secondary">Services list will go here.</p></div>
    </main>
  );
}
