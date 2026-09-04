"use client";
import { useState } from "react";
import { Destination } from "@/lib/data/destinations";

export default function DestinationEnquiryForm({ destination }: { destination: Destination }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1000);
  };

  if (success) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-lg sticky top-24">
        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
        <p className="text-gray-500 px-6">Our travel expert will contact you shortly to plan your {destination.name} holiday.</p>
      </div>
    );
  }

  return (
    <div id="enquiry" className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden sticky top-24">
      <div className="bg-primary p-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-1">Plan Your {destination.name} Holiday</h2>
        <p className="text-primary-light text-sm">Get a free customized travel quote</p>
      </div>
      
      <div className="p-6 sm:p-8">
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Full Name *</label>
            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Mobile Number *</label>
            <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800" placeholder="+91 98765 43210" />
          </div>
          
          <div>
            <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Destination</label>
            <input type="text" readOnly value={destination.name} className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-600 cursor-not-allowed font-medium" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Travellers *</label>
              <input required type="number" min="1" defaultValue="2" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800" />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Travel Date</label>
              <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800" />
            </div>
          </div>
          
          <button type="submit" disabled={isSubmitting} className="w-full bg-accent text-white rounded-lg py-4 font-bold text-lg hover:bg-accent-light transition-colors disabled:opacity-70 mt-2 shadow-lg shadow-accent/30">
            {isSubmitting ? "SENDING..." : "GET A FREE QUOTE"}
          </button>
        </form>
      </div>
    </div>
  );
}
