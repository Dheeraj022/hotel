import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import PackagesSection from "@/components/home/PackagesSection";
import HotelsAndCruises from "@/components/home/HotelsAndCruises";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import EnquirySection from "@/components/home/EnquirySection";
import Partners from "@/components/home/Partners";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <PackagesSection />
      <HotelsAndCruises />
      
      <section className="py-16 lg:py-24 bg-white border-t border-border-color">
        <div className="container mx-auto px-4">
          <WhyChooseUs />
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <Testimonials />
      </section>

      <EnquirySection />
      <Partners />
      <CTASection />
    </>
  );
}
