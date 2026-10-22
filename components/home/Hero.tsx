import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import HeroEnquiryForm from "@/components/forms/HeroEnquiryForm";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-maldives.jpg"
          alt="Tropical destination"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">

        {/* Left Content */}
        <div className="text-white space-y-6">
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent font-semibold text-sm rounded-full tracking-wider">
            TRAVEL MORE, WORRY LESS
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            TRAVEL MORE,<br />
            WORRY LESS
          </h1>
          <div className="space-y-3 text-lg text-gray-200 max-w-lg leading-relaxed">
            <p>
              Get information about hotels, villas, local tours, camping and more in India.
            </p>
            <p className="text-gray-100 font-medium">
              We are here to assist you with your travel plans.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#enquire"
              className="bg-accent text-white px-8 py-3.5 rounded-md font-semibold text-center hover:opacity-90 transition-opacity"
            >
              ENQUIRE NOW
            </Link>
            <Link
              href="https://wa.me/919876543210"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-accent-green" />
              WhatsApp Us
            </Link>
          </div>
        </div>

        {/* Right Widget */}
        <div className="lg:justify-self-end w-full max-w-md">
          <HeroEnquiryForm />
        </div>
      </div>
    </section>
  );
}
