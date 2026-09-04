const fs = require("fs");
const path = require("path");

const componentsDir = path.join(process.cwd(), "components/cruises");

const components = {
  "CruiseHero.tsx": `import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Cruise } from "@/lib/data/cruises";

export default function CruiseHero({ cruise }: { cruise: Cruise }) {
  return (
    <div className="relative h-[60vh] min-h-[500px] w-full flex flex-col justify-end pb-16 bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={cruise.heroImage} 
          alt={cruise.name} 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/60 to-transparent mix-blend-multiply" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm font-medium space-x-2 text-gray-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/cruises" className="hover:text-white transition-colors">Cruises</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{cruise.name}</span>
        </div>

        <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          {cruise.category.toUpperCase()}
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{cruise.name}</h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          {cruise.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#enquiry" className="bg-accent text-white px-8 py-3.5 rounded-md font-semibold hover:bg-accent-light transition-colors shadow-lg">
            ENQUIRE NOW
          </a>
          <Link href="https://wa.me/919876543210" className="bg-[#25D366] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#20bd5a] transition-colors shadow-lg">
            WHATSAPP US
          </Link>
        </div>
      </div>
    </div>
  );
}`,

  "CruiseQuickInfo.tsx": `import { Clock, MapPin, Users, IndianRupee } from "lucide-react";
import { Cruise } from "@/lib/data/cruises";

export default function CruiseQuickInfo({ cruise }: { cruise: Cruise }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border-color p-6 md:p-8 -mt-12 relative z-20 mx-4 md:mx-auto max-w-5xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-border-color">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-text-secondary uppercase mb-1">Duration</span>
            <span className="font-bold text-primary">{cruise.duration}</span>
          </div>
        </div>
        <div className="flex items-start gap-4 md:pl-8">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-text-secondary uppercase mb-1">Destination</span>
            <span className="font-bold text-primary">{cruise.destination}</span>
          </div>
        </div>
        <div className="flex items-start gap-4 md:pl-8">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-text-secondary uppercase mb-1">Best For</span>
            <span className="font-bold text-primary">{cruise.bestFor}</span>
          </div>
        </div>
        <div className="flex items-start gap-4 md:pl-8">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
            <IndianRupee className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-text-secondary uppercase mb-1">Starting From</span>
            <span className="font-bold text-accent">{cruise.startingPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  "CruiseOverview.tsx": `import { Cruise } from "@/lib/data/cruises";
import { CheckCircle2 } from "lucide-react";

export default function CruiseOverview({ cruise }: { cruise: Cruise }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold text-primary mb-6">ABOUT THE CRUISE</h2>
        <div className="prose prose-lg text-text-secondary max-w-none">
          <p>{cruise.description}</p>
        </div>
      </div>
      <div className="bg-page-bg p-8 rounded-xl border border-border-color">
        <h3 className="text-xl font-bold text-primary mb-6">CRUISE HIGHLIGHTS</h3>
        <ul className="space-y-4">
          {cruise.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-3 text-text-secondary">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}`,

  "CruiseItinerary.tsx": `import { Cruise } from "@/lib/data/cruises";

export default function CruiseItinerary({ cruise }: { cruise: Cruise }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-8">POPULAR ITINERARY</h2>
      <div className="space-y-6">
        {cruise.itineraries.map((item, idx) => (
          <div key={idx} className="flex gap-6 bg-white p-6 rounded-xl border border-border-color shadow-sm">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex flex-col items-center justify-center font-bold">
                <span className="text-xs font-normal uppercase leading-none mb-0.5">Day</span>
                <span className="text-lg leading-none">{item.day}</span>
              </div>
              {idx !== cruise.itineraries.length - 1 && (
                <div className="w-0.5 h-full bg-border-color mt-6"></div>
              )}
            </div>
            <div className="pt-2 pb-4">
              <h4 className="text-xl font-bold text-primary mb-2">{item.location}</h4>
              <p className="text-text-secondary">{item.activity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,

  "CruiseCabins.tsx": `import { Cruise } from "@/lib/data/cruises";
import { Check } from "lucide-react";

export default function CruiseCabins({ cruise }: { cruise: Cruise }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-8">CABIN OPTIONS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cruise.cabins.map((cabin, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-border-color overflow-hidden shadow-sm flex flex-col">
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-primary mb-2">{cabin.name}</h3>
              <p className="text-text-secondary mb-6">{cabin.description}</p>
              <ul className="space-y-2 mb-6">
                {cabin.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-page-bg p-6 border-t border-border-color flex items-center justify-between mt-auto">
              <div>
                <span className="block text-xs text-text-secondary">Price</span>
                <span className="font-bold text-primary">{cabin.price || "On Request"}</span>
              </div>
              <a href="#enquiry" className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors">
                ENQUIRE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,

  "CruiseIncluded.tsx": `import { Cruise } from "@/lib/data/cruises";
import { Check, X } from "lucide-react";

export default function CruiseIncluded({ cruise }: { cruise: Cruise }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-green-50 p-8 rounded-xl border border-green-100">
        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
          WHAT'S INCLUDED
        </h3>
        <ul className="space-y-4">
          {cruise.included.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-text-secondary">
              <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-xl border border-red-100">
        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
          NOT INCLUDED
        </h3>
        <ul className="space-y-4">
          {cruise.excluded.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-text-secondary">
              <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}`,

  "CruiseEnquiryForm.tsx": `"use client";
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
      <div className="text-center py-16 bg-white rounded-xl border border-border-color shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-2">Thank you!</h3>
        <p className="text-text-secondary">Our cruise expert will contact you shortly to plan your voyage on {cruise.name}.</p>
      </div>
    );
  }

  return (
    <div id="enquiry" className="bg-white rounded-xl border border-border-color shadow-sm overflow-hidden scroll-mt-24">
      <div className="p-8 lg:p-12">
        <h2 className="text-3xl font-bold text-primary mb-2">PLAN YOUR CRUISE</h2>
        <p className="text-text-secondary mb-8">Fill out the form below to get a free quote for {cruise.name}.</p>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Full Name *</label>
              <input required type="text" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary text-text-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Mobile Number *</label>
              <input required type="tel" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary text-text-primary" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-primary mb-1">Selected Cruise</label>
              <input type="text" readOnly value={cruise.name} className="w-full border border-border-color bg-gray-50 rounded-md px-4 py-2.5 text-text-secondary font-medium outline-none cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Email Address</label>
              <input type="email" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary text-text-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Number of Travellers *</label>
              <input required type="number" min="1" defaultValue="2" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary text-text-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Preferred Departure Date</label>
              <input type="date" className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary text-text-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Cabin Type</label>
              <select className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary text-text-primary">
                <option value="">Any Cabin Type</option>
                {cruise.cabins.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Message / Requirements</label>
            <textarea rows={4} className="w-full border border-border-color rounded-md px-4 py-2.5 focus:outline-none focus:border-primary text-text-primary"></textarea>
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full bg-accent text-white rounded-md py-4 font-bold text-lg hover:bg-accent-light transition-colors disabled:opacity-70">
            {isSubmitting ? "SUBMITTING..." : "SEND CRUISE ENQUIRY"}
          </button>
        </form>
      </div>
    </div>
  );
}`
};

for (const [filename, content] of Object.entries(components)) {
  fs.writeFileSync(path.join(componentsDir, filename), content);
}
console.log("Components created.");
