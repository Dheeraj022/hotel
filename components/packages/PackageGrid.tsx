"use client";
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
}