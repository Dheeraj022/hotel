"use client";
import { useState } from "react";
import { Hotel } from "@/lib/data/hotels";
import { Plus, Minus } from "lucide-react";

export default function HotelFAQs({ hotel }: { hotel: Hotel }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (!hotel.faqs || hotel.faqs.length === 0) return null;

  return (
    <div id="faqs" className="scroll-mt-24">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-primary">Frequently Asked Questions</h2>
        <a href="#" className="text-sm font-bold text-primary hover:text-accent flex items-center gap-1">View All FAQs &rarr;</a>
      </div>
      
      <div className="space-y-3">
        {hotel.faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-sm text-primary hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              {faq.question}
              {openIdx === idx ? <Minus className="w-4 h-4 text-accent" /> : <Plus className="w-4 h-4 text-primary" />}
            </button>
            {openIdx === idx && (
              <div className="p-4 pt-0 text-sm text-gray-600 border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
