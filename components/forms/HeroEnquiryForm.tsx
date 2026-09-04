"use client";

import { useState } from "react";

export default function HeroEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for now
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1000);
  };

  if (success) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-2xl text-center">
        <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
        <p className="text-text-secondary">Our travel expert will contact you shortly to plan your trip.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-2xl">
      <h3 className="text-xl font-bold text-primary mb-6 text-center">PLAN YOUR NEXT TRIP</h3>
      
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">Where do you want to go?</label>
          <input 
            type="text" 
            required
            placeholder="e.g. Maldives, Goa, Dubai" 
            className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Check-in</label>
            <input 
              type="date" 
              className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Check-out</label>
            <input 
              type="date" 
              className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">Travellers</label>
          <select className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary">
            <option>1 Adult</option>
            <option defaultValue="2 Adults">2 Adults</option>
            <option>3 Adults</option>
            <option>Family (2A + 2C)</option>
            <option>Group (5+)</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary text-white rounded-md py-3 font-semibold hover:bg-primary-light transition-colors mt-2 disabled:opacity-70"
        >
          {isSubmitting ? "SENDING..." : "SEND ENQUIRY"}
        </button>
      </form>
    </div>
  );
}
