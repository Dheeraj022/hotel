const fs = require("fs");
const path = require("path");

fs.mkdirSync("lib/data", { recursive: true });
fs.writeFileSync("lib/data/packages.ts", `
export interface HolidayPackage {
  title: string;
  desc: string;
  img: string;
}

export const holidayPackages: HolidayPackage[] = [
  { title: "Honeymoon Packages", desc: "Romantic getaways for couples", img: "/packages/honeymoon.jpg" },
  { title: "Family Packages", desc: "Fun-filled holidays for the family", img: "/packages/family.jpg" },
  { title: "Adventure Packages", desc: "Thrilling experiences for adventure lovers", img: "/packages/adventure.jpg" },
  { title: "Weekend Getaways", desc: "Short trips for a perfect weekend escape", img: "/packages/weekend.jpg" },
  { title: "Group Packages", desc: "Best deals for groups & friends", img: "/packages/group.jpg" },
  { title: "Pilgrimage Packages", desc: "Spiritual journeys to sacred destinations", img: "/packages/pilgrimage.jpg" },
];
`);

fs.mkdirSync("components/packages", { recursive: true });
fs.writeFileSync("components/packages/PackageEnquiryModal.tsx", `"use client";
import { useState } from "react";
import { HolidayPackage } from "@/lib/data/packages";
import { X } from "lucide-react";

interface Props {
  pkg: HolidayPackage;
  onClose: () => void;
}

export default function PackageEnquiryModal({ pkg, onClose }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => onClose(), 2500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg relative animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white/80 rounded-full p-1">
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
            <p className="text-gray-500">Our expert will contact you shortly regarding the {pkg.title}.</p>
          </div>
        ) : (
          <div>
            <div className="bg-primary p-6 text-white text-center rounded-t-xl">
              <h2 className="text-xl font-bold mb-1">Enquire Now</h2>
              <p className="text-primary-light text-sm">{pkg.title}</p>
            </div>
            <div className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input required type="text" className="w-full border border-gray-300 rounded-md px-3 py-2.5 focus:ring-2 focus:ring-accent/50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number *</label>
                  <input required type="tel" className="w-full border border-gray-300 rounded-md px-3 py-2.5 focus:ring-2 focus:ring-accent/50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email (Optional)</label>
                  <input type="email" className="w-full border border-gray-300 rounded-md px-3 py-2.5 focus:ring-2 focus:ring-accent/50 outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Travel Date</label>
                    <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2.5 focus:ring-2 focus:ring-accent/50 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Travellers</label>
                    <input type="number" min="1" defaultValue="2" className="w-full border border-gray-300 rounded-md px-3 py-2.5 focus:ring-2 focus:ring-accent/50 outline-none" />
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-accent text-white rounded-md py-3.5 font-bold mt-4 hover:bg-accent-light transition-colors shadow-md">
                  {isSubmitting ? "SENDING..." : "SUBMIT ENQUIRY"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`);

fs.writeFileSync("components/packages/PackageGrid.tsx", `"use client";
import { useState } from "react";
import Image from "next/image";
import { holidayPackages, HolidayPackage } from "@/lib/data/packages";
import PackageEnquiryModal from "./PackageEnquiryModal";

export default function PackageGrid() {
  const [selectedPkg, setSelectedPkg] = useState<HolidayPackage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {holidayPackages.map((pkg, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border-color hover:shadow-md transition-shadow cursor-pointer group" onClick={() => setSelectedPkg(pkg)}>
            <div className="relative h-56 overflow-hidden">
              <Image src={pkg.img} alt={pkg.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors">{pkg.title}</h3>
              <p className="text-sm text-text-secondary mt-2 mb-4">{pkg.desc}</p>
              <span className="text-accent text-sm font-bold group-hover:underline">VIEW & ENQUIRE</span>
            </div>
          </div>
        ))}
      </div>

      {selectedPkg && (
        <PackageEnquiryModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
      )}
    </>
  );
}`);

fs.writeFileSync("components/home/PackagesSection.tsx", `import Link from "next/link";
import PackageGrid from "@/components/packages/PackageGrid";

export default function PackagesSection() {
  return (
    <section className="py-16 bg-page-bg border-t border-border-color">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            HOLIDAY PACKAGES
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
        </div>

        <PackageGrid />
        
        <div className="mt-10 text-center">
          <Link href="/packages" className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors inline-block text-sm">
            VIEW ALL HOLIDAY PACKAGES
          </Link>
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync("app/packages/page.tsx", `import InnerPageHero from "@/components/layout/InnerPageHero";
import PackageGrid from "@/components/packages/PackageGrid";
import CTASection from "@/components/home/CTASection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Page() {
  return (
    <main className="bg-page-bg">
      <InnerPageHero 
        title="Holiday Packages" 
        description="Find the perfect holiday package for your next adventure. From romantic honeymoon getaways to thrilling group adventures." 
        breadcrumb="Packages" 
      />
      
      <div className="py-16 lg:py-24 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            EXPLORE OUR PACKAGES
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Click on any package to submit a quick enquiry, and our travel experts will design the perfect itinerary tailored just for you.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <PackageGrid />
        </div>
      </div>

      <div className="bg-white">
        <WhyChooseUs />
      </div>
      
      <CTASection />
    </main>
  );
}`);

console.log("Package updates completed.");
