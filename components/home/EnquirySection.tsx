import TravelEnquiryForm from "@/components/forms/TravelEnquiryForm";
import Image from "next/image";

export default function EnquirySection() {
  return (
    <section className="py-16 lg:py-24 bg-page-bg" id="enquire">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-color grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Visual */}
          <div className="relative p-12 bg-primary flex flex-col justify-center text-white min-h-[400px]">
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">READY TO PLAN YOUR NEXT JOURNEY?</h2>
              <p className="text-lg text-gray-200">
                Submit your travel enquiry to receive detailed information, transparent advice, and personalized assistance.
              </p>
            </div>
            <div className="absolute inset-0 z-0 opacity-40">
              <Image 
                src="/images/travel-enquiry.jpg" 
                alt="Travel luggage" 
                fill 
                className="object-cover mix-blend-overlay"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 lg:p-12">
            <TravelEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
