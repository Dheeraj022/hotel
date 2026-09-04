"use client";

import { useState } from "react";

export default function TravelEnquiryForm() {
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
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-primary mb-2">Thank you!</h3>
        <p className="text-text-secondary">Our travel expert will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">Full Name*</label>
          <input required type="text" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">Mobile Number*</label>
          <input required type="tel" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">Email Address*</label>
          <input required type="email" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">Destination*</label>
          <input required type="text" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">Travel Date</label>
          <input type="date" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">Number of Travellers*</label>
          <input required type="number" min="1" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">Type of Trip*</label>
          <select required className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary">
            <option value="">Select trip type</option>
            <option>Honeymoon</option>
            <option>Family</option>
            <option>Group</option>
            <option>Corporate</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">Budget (Optional)</label>
          <input type="text" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">Your Requirements / Message</label>
        <textarea rows={4} className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-text-primary"></textarea>
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-primary text-white rounded-md py-3.5 font-semibold hover:bg-primary-light transition-colors mt-4 disabled:opacity-70"
      >
        {isSubmitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"}
      </button>
    </form>
  );
}
