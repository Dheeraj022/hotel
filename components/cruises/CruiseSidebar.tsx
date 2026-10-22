"use client";

import { Cruise } from "@/lib/data/cruises";
import CruiseEnquiryForm from "./CruiseEnquiryForm";
import { ThumbsUp, Users, Map, ShieldCheck, Clock, Shield, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function CruiseSidebar({ cruise }: { cruise: Cruise }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const reasons = [

    { text: "Expert Travel Consultants", icon: Users },
    { text: "Customized Itineraries", icon: Map },
    { text: "Hassle-Free Assistance", icon: ShieldCheck },
    { text: "24x7 Customer Support", icon: Clock },
    { text: "Trusted Travel Partner", icon: Shield },
  ];

  return (
    <div className="space-y-6">
      <CruiseEnquiryForm cruise={cruise} />

      {/* Why Choose Us */}
      <div className="bg-blue-50/50 rounded-lg p-6 border border-blue-100 relative overflow-hidden">
        <h3 className="text-xl font-bold text-[#031b4e] mb-6">Why Plan Your Cruise With Us?</h3>
        <ul className="space-y-4 relative z-10">
          {reasons.map((reason, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#031b4e] shadow-sm flex-shrink-0">
                <reason.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-gray-700">{reason.text}</span>
            </li>
          ))}
        </ul>
        {/* Decorative element mimicking the ship drawing in screenshot */}
        <div className="absolute right-[-20px] bottom-[-20px] opacity-20 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#031b4e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6M12 10v4M12 2v3" /></svg>
        </div>
      </div>

      {/* Guest Reviews */}
      {cruise.reviews && cruise.reviews.length > 0 && (
        <div id="reviews" className="scroll-mt-[120px] bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-[#031b4e] mb-6">Guest Reviews</h3>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 text-green-700 text-2xl font-black px-4 py-2 rounded-lg">4.8<span className="text-sm">/5</span></div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-gray-500 font-medium">Based on 500+ happy travellers</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg relative">
            <div className="text-4xl text-gray-200 absolute top-2 left-2 font-serif">"</div>
            <p className="text-sm text-gray-600 relative z-10 italic pl-4">
              "{cruise.reviews[0].text}"
            </p>
            <p className="text-xs font-bold text-[#031b4e] mt-4 pl-4">— {cruise.reviews[0].author}</p>
          </div>
        </div>
      )}

      {/* FAQs */}
      {cruise.faqs && cruise.faqs.length > 0 && (
        <div id="faqs" className="scroll-mt-[120px] bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-[#031b4e]">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-3">
            {cruise.faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
                >
                  <span className="text-sm font-semibold text-[#031b4e] pr-4">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#031b4e]" /> : <ChevronDown className="w-4 h-4 text-[#031b4e]" />}
                </button>
                {openFaq === idx && (
                  <div className="px-4 py-3 bg-white text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
