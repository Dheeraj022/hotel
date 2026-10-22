import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  Handshake, 
  Info, 
  Headphones, 
  Compass, 
  ShieldCheck, 
  Target, 
  Eye, 
  Building2, 
  MessageSquare, 
  MapPin, 
  Bell, 
  Users, 
  Shield, 
  Gem, 
  UserCheck, 
  XCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Guest Assists",
  description: "Learn more about Guest Assists, an independent travel agency operated by BrightSpark Leisure Services Private Limited.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Handshake,
      title: "Independent Agency",
      desc: "We are an independent travel agency.",
    },
    {
      icon: Info,
      title: "Genuine Information",
      desc: "We provide accurate travel information and guidance.",
    },
    {
      icon: Headphones,
      title: "Enquiry Assistance",
      desc: "We help with enquiries and travel planning.",
    },
    {
      icon: Compass,
      title: "Travel Expertise",
      desc: "Deep knowledge of domestic and international destinations.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent & Honest",
      desc: "We believe in clarity, honesty and transparency.",
    },
  ];

  const whatWeDoItems = [
    {
      icon: Building2,
      title: "Travel Information",
      desc: "We provide complete information about hotels, villas, resorts, cruises, packages and attractions.",
    },
    {
      icon: MessageSquare,
      title: "Enquiry Assistance",
      desc: "We assist you with your enquiries and help connect with relevant service providers.",
    },
    {
      icon: Compass,
      title: "Travel Guidance",
      desc: "We help you plan your trip with the right information and tailored recommendations.",
    },
    {
      icon: MapPin,
      title: "Dedicated Support",
      desc: "Our team provides dedicated support and assistance during your travel planning.",
    },
    {
      icon: Bell,
      title: "Updates & Suggestions",
      desc: "We share travel updates, seasonal information and helpful travel suggestions.",
    },
    {
      icon: Users,
      title: "Connect & Coordinate",
      desc: "We help connect travellers with service providers where applicable.",
    },
  ];

  const values = [
    "Transparency",
    "Integrity",
    "Customer Satisfaction",
    "Respect",
    "Responsibility",
    "Continuous Improvement",
  ];

  const whatWeDontDo = [
    "We are not the owner or operator of hotels, villas, resorts or attractions.",
    "We do not represent government authorities.",
    "We do not guarantee availability of rooms, services or vehicles.",
    "We do not guarantee fixed prices or the lowest prices.",
    "We do not publish misleading offers or promotional claims.",
    "We do not take online bookings or payments on this website.",
    "All arrangements are subject to availability and confirmation from the respective service providers.",
  ];

  return (
    <main className="bg-[#f8fafc] min-h-screen py-6 sm:py-8">
      <div className="container mx-auto px-4 max-w-6xl space-y-5">
        
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 flex items-center gap-1.5 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-800 font-semibold">About Us</span>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xs relative overflow-hidden">
          {/* Mountain scenery background image on right */}
          <div className="absolute right-0 top-0 w-full md:w-3/5 h-full pointer-events-none overflow-hidden">
            <Image 
              src="/images/about-hero-mountain.jpg" 
              alt="Scenic mountain landscape" 
              fill 
              className="object-cover object-center md:object-right" 
              priority
            />
            {/* Soft gradient fade into white card background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 md:via-white/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent md:hidden" />
          </div>

          {/* Left content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d5338] tracking-tight mb-2">
              ABOUT US
            </h1>
            <div className="mb-4">
              <h2 className="text-base sm:text-lg font-extrabold text-gray-900 tracking-wider uppercase">
                GUEST ASSISTS
              </h2>
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mt-0.5">
                OPERATED BY BRIGHTSPARK LEISURE SERVICES PRIVATE LIMITED
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xl">
              Guest Assists is your independent travel agency providing genuine travel information, local assistance and enquiry support for hotels, villas, resorts, holiday packages, cruises, and travel experiences.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed mt-3 max-w-xl">
              BrightSpark Leisure Services Private Limited is a registered travel agency and tour operator based in New Delhi, India, dedicated to making every journey smooth, comfortable, and memorable.
            </p>
          </div>
        </div>

        {/* 5 Features Strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-xl border border-gray-200 p-4 sm:p-5 text-center flex flex-col items-center justify-start shadow-xs hover:shadow-sm transition-shadow ${
                  idx === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="text-[#0d5338] mb-2.5">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-snug">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* OUR MISSION & OUR VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mission */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-start gap-4 shadow-xs">
            <div className="text-[#0d5338] shrink-0 mt-0.5">
              <Target className="w-7 h-7 stroke-[1.75]" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
                OUR MISSION
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To provide reliable travel information, honest guidance and enquiry assistance to travellers planning their trips and holiday experiences.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-start gap-4 shadow-xs">
            <div className="text-[#0d5338] shrink-0 mt-0.5">
              <Eye className="w-7 h-7 stroke-[1.75]" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
                OUR VISION
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To become a trusted and transparent travel information platform known for integrity, quality assistance and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-xs">
          {/* Center Divider Header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gray-200 flex-1 max-w-[120px]" />
            <h3 className="text-sm font-bold tracking-widest text-gray-900 uppercase">
              WHAT WE DO
            </h3>
            <div className="h-px bg-gray-200 flex-1 max-w-[120px]" />
          </div>

          {/* 6 Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="text-[#0d5338] shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* OUR COMMITMENT & OUR VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Our Commitment */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-start gap-4 shadow-xs">
            <div className="text-[#0d5338] shrink-0 mt-0.5">
              <Shield className="w-7 h-7 stroke-[1.75]" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2">
                OUR COMMITMENT
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                We are committed to transparency, honesty and providing genuine travel information. We do not make misleading claims.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                We ensure that all information shared on this website is for general reference and enquiry assistance only.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-start gap-4 shadow-xs">
            <div className="text-[#0d5338] shrink-0 mt-0.5">
              <Gem className="w-7 h-7 stroke-[1.75]" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-3">
                OUR VALUES
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-semibold text-gray-700">
                {values.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d5338] shrink-0" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Two Cards: OUR ROLE & INDEPENDENCE vs WHAT WE DON'T DO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Left: OUR ROLE & INDEPENDENCE */}
          <div className="bg-[#f0faf4] border border-[#c8e6c9] rounded-xl p-6 flex items-start gap-4">
            <div className="text-[#0d5338] shrink-0 mt-0.5">
              <UserCheck className="w-7 h-7 stroke-[1.75]" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-2.5">
                OUR ROLE & INDEPENDENCE
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-3">
                Guest Assists is operated by BrightSpark Leisure Services Private Limited, an independent travel agency. We provide general travel information, guidance, local tour assistance and enquiry support.
              </p>
              <p className="text-xs font-bold text-gray-900 leading-relaxed">
                We are not the owner, operator or official representative of any hotel, villa, resort, attraction, transport service or activity provider unless specifically stated.
              </p>
            </div>
          </div>

          {/* Right: WHAT WE DON'T DO */}
          <div className="bg-[#fff5f5] border border-[#fed7d7] rounded-xl p-6 flex items-start gap-4">
            <div className="text-red-500 shrink-0 mt-0.5">
              <XCircle className="w-7 h-7 stroke-[1.75]" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-3">
                WHAT WE DON'T DO
              </h3>
              <ul className="space-y-2 text-xs text-gray-700">
                {whatWeDontDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-3.5 h-3.5 rounded-full border border-red-400 text-red-500 flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold">
                      &times;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
