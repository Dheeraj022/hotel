import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { text: "Excellent service and support throughout our trip. Highly recommended!", author: "Amit Sharma", rating: 5 },
    { text: "Very professional and well organized travel experience. Will travel with them again!", author: "Priya Mehta", rating: 5 },
    { text: "Best travel agency for customized packages and visa assistance.", author: "Rahul Verma", rating: 5 },
    { text: "Our Maldives honeymoon was magical, all thanks to Guest Assists!", author: "Sneha Desai", rating: 5 },
    { text: "The cruise assistance was seamless, and the onboard experience was spectacular.", author: "Vikram Singh", rating: 5 },
    { text: "Great deals on luxury hotels. The team really understood our requirements.", author: "Ananya Gupta", rating: 4 },
    { text: "Visa processing was quick and hassle-free. Amazing customer service.", author: "Rohit Khanna", rating: 5 },
    { text: "A flawless family trip to Dubai. We didn't have to worry about a single thing.", author: "The Patel Family", rating: 5 },
    { text: "From flights to hotels, everything was top-notch. Truly a trusted partner.", author: "Neha Kapoor", rating: 5 },
    { text: "Highly professional team with deep knowledge of international destinations.", author: "Kunal Joshi", rating: 5 },
    { text: "The European package exceeded our expectations. Excellent guides and stays.", author: "Pooja & Karan", rating: 5 },
    { text: "They secured the best rates for our corporate retreat in Goa.", author: "Rajesh Nair", rating: 4 },
    { text: "Smooth, effortless assistance for our family cruise on Royal Caribbean.", author: "Divya Chawla", rating: 5 },
    { text: "Their attention to detail and 24/7 support made our trip stress-free.", author: "Abhishek Jain", rating: 5 },
    { text: "We have found our permanent travel partner. Simply the best in the business!", author: "Sunita Rao", rating: 5 },
    { text: "Customized our entire Bali itinerary flawlessly. Five stars!", author: "Manoj Tiwari", rating: 5 }
  ];

  return (
    <div className="bg-white overflow-hidden py-4">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="text-center mb-8 lg:mb-10">
        <h2 className="text-xl font-bold text-primary uppercase tracking-wide">
          WHAT OUR CLIENTS SAY
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Fading Gradients for smooth entrance/exit */}
        <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {/* First set of testimonials */}
          {testimonials.map((test, i) => (
            <div key={`first-${i}`} className="flex flex-col gap-4 p-5 bg-page-bg rounded-xl border border-border-color shadow-sm relative w-[300px] md:w-[350px] mx-3 shrink-0">
              <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
              <div className="flex">
                {[...Array(test.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-text-primary italic flex-1">"{test.text}"</p>
              <span className="text-xs font-semibold text-text-secondary mt-2">- {test.author}</span>
            </div>
          ))}
          {/* Second identical set of testimonials to create seamless loop */}
          {testimonials.map((test, i) => (
            <div key={`second-${i}`} className="flex flex-col gap-4 p-5 bg-page-bg rounded-xl border border-border-color shadow-sm relative w-[300px] md:w-[350px] mx-3 shrink-0">
              <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
              <div className="flex">
                {[...Array(test.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-text-primary italic flex-1">"{test.text}"</p>
              <span className="text-xs font-semibold text-text-secondary mt-2">- {test.author}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
