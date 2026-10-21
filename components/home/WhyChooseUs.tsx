import { UserCheck, Settings, IndianRupee, Lock, Clock, PackageCheck } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    { title: "Experienced", subtitle: "Travel Consultants", icon: UserCheck, desc: "Expert guidance for your perfect trip." },
    { title: "Personalized", subtitle: "Travel Plans", icon: Settings, desc: "Tailor-made itineraries just for you." },
    { title: "Competitive", subtitle: "Pricing", icon: IndianRupee, desc: "Best value without compromising quality." },
    { title: "Safe & Reliable", subtitle: "Assistance", icon: Lock, desc: "Your safety and comfort are our priority." },
    { title: "24x7 Customer", subtitle: "Support", icon: Clock, desc: "Always here for you, anytime, anywhere." },
    { title: "One Stop", subtitle: "Travel Solutions", icon: PackageCheck, desc: "Flights, hotels, and tours all in one place." },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight inline-flex items-center gap-4">
            <span className="h-1 w-12 bg-accent rounded-full hidden sm:block"></span>
            WHY CHOOSE GUEST ASSIST?
            <span className="h-1 w-12 bg-accent rounded-full hidden sm:block"></span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto font-medium">
            We are dedicated to providing you with the most unforgettable travel experiences, backed by our commitment to quality, safety, and personalized service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500 blur-2xl"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:text-accent transition-transform duration-300">
                  <reason.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-extrabold text-primary mb-1">{reason.title}</h3>
                <p className="text-sm font-bold tracking-wide text-accent uppercase mb-3">{reason.subtitle}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
