"use client";
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
}