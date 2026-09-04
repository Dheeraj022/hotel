"use client";
import { useState } from "react";
import { Hotel } from "@/lib/data/hotels";

export default function HotelSidebarForm({ hotel }: { hotel: Hotel }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div id="enquiry" className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="bg-[#0f284c] p-5 text-white">
        <h3 className="text-lg font-bold">Plan Your Stay at {hotel.name.replace(" Goa", "")}</h3>
        <p className="text-xs text-gray-300 mt-1">Get the best rates and customized offers from our travel experts.</p>
      </div>
      
      <div className="p-5">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="Full Name*" className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent" required />
            <input type="tel" placeholder="Mobile Number*" className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent" required />
          </div>
          <input type="email" placeholder="Email Address*" className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent" required />
          
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <input type="date" className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent text-gray-500" required />
            </div>
            <div className="relative">
              <input type="date" className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent text-gray-500" required />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <select className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent bg-white">
              <option>Number of Guests*</option>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
            </select>
            <select className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent bg-white">
              <option>Room Preference</option>
              {hotel.rooms.map(r => <option key={r.name}>{r.name}</option>)}
            </select>
          </div>
          
          <textarea placeholder="Your Requirements / Message (Optional)" rows={3} className="w-full text-sm border border-gray-300 rounded px-3 py-2 outline-none focus:border-accent"></textarea>
          
          <button type="submit" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 rounded transition-colors text-sm">
            SUBMIT ENQUIRY
          </button>
          
          <p className="text-[10px] text-center text-gray-400 mt-2">This is an enquiry form. Submission does not confirm a booking.</p>
        </form>
      </div>
    </div>
  );
}
