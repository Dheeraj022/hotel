import InnerPageHero from "@/components/layout/InnerPageHero";

export default function Page() {
  return (
    <main>
      <InnerPageHero 
        title="Service Details" 
        description="Learn more about what this service entails." 
        breadcrumb="Service Details" 
      />
      <div className="py-16 container mx-auto px-4 min-h-[400px]"><p className="text-lg text-text-secondary">Service details will go here.</p></div>
    </main>
  );
}
