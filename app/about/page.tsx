import InnerPageHero from "@/components/layout/InnerPageHero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";
import CTASection from "@/components/home/CTASection";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <InnerPageHero 
        title="About Us" 
        description="Learn more about Guest Assist and our mission to provide you with unforgettable travel experiences." 
        breadcrumb="About" 
      />
      
      {/* Expanded About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Story */}
          <div>
            <span className="text-accent text-xs font-bold tracking-wider uppercase mb-3 block">OUR STORY</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
              A LEGACY OF EXCELLENCE IN TRAVEL
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Guest Assist Leisure Services Private Limited is a premier registered travel agency and tour operator based in New Delhi. Established with a vision to redefine travel, we specialize in curating seamless and unforgettable experiences for our clients.
              </p>
              <p>
                From customized holiday packages and flight bookings to luxury hotel reservations and corporate travel solutions, we are committed to delivering unmatched service and exceptional value. Whether you are planning a romantic honeymoon, a family vacation, or a complex corporate retreat, our dedicated team of travel experts is here to assist you every step of the way.
              </p>
              <p>
                With 24/7 customer support, transparent pricing, and a passion for exploration, we ensure that every journey you take with us is smooth, safe, and memorable.
              </p>
            </div>
          </div>

          {/* Right - Company Info Card */}
          <div className="bg-page-bg p-8 lg:p-10 rounded-xl border border-border-color shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6">Company Information</h3>
            <ul className="space-y-6 text-text-primary">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-1">Incorporated:</span>
                  <span className="text-text-secondary text-sm">October 14, 2016</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-1">Registered Address:</span>
                  <span className="text-text-secondary text-sm">Khasra No. 382, Second Floor, 100 Foota Road, Village Ghitorni, New Delhi, 110030</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-1">Directors:</span>
                  <span className="text-text-secondary text-sm">Nazneen Hashmi and Saba Hashmi</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-1">Status:</span>
                  <span className="text-text-secondary text-sm">Active & GST Registered</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Partners */}
      <Partners />

      {/* CTA */}
      <CTASection />

    </main>
  );
}
