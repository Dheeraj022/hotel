"use client";
import { useState } from "react";
import { Cruise } from "@/lib/data/cruises";

export default function CruiseEnquiryForm({ cruise }: { cruise: Cruise }) {
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
      <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-lg">
        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
        <p className="text-gray-500 px-6">Our cruise expert will contact you shortly to plan your voyage on {cruise.name}.</p>
      </div>
    );
  }

  return (
    <div id="enquiry" className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden scroll-mt-24">
      {/* Form Header */}
      <div className="bg-primary p-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-1">Plan Your Cruise</h2>
        <p className="text-primary-light text-sm">Get a free quote for {cruise.name}</p>
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
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Travellers *</label>
              <input required type="number" min="1" defaultValue="2" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800" />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Month</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800">
                <option>Any Month</option>
                <option>Jan - Mar</option>
                <option>Apr - Jun</option>
                <option>Jul - Sep</option>
                <option>Oct - Dec</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">Cabin Preference</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800">
              <option value="">Any Cabin Type</option>
              {cruise.cabins.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)}
            </select>
          </div>
          
          <button type="submit" disabled={isSubmitting} className="w-full bg-accent text-white rounded-lg py-4 font-bold text-lg hover:bg-accent-light transition-colors disabled:opacity-70 mt-2 shadow-lg shadow-accent/30">
            {isSubmitting ? "SENDING..." : "GET FREE QUOTE"}
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-4">We'll get back to you within 24 hours.</p>
        </form>
      </div>
    </div>
  );
}