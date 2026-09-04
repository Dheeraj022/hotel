import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Excellent service and support throughout our trip. Highly recommended!",
      author: "- Amit Sharma",
      rating: 5,
    },
    {
      text: "Very professional and well organized travel experience. Will book again!",
      author: "- Priya Mehta",
      rating: 5,
    },
    {
      text: "Best travel agency for customized packages and visa assistance.",
      author: "- Rahul Verma",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-xl font-bold text-primary uppercase tracking-wide">
          WHAT OUR CLIENTS SAY
        </h2>
      </div>

      <div className="space-y-4">
        {testimonials.map((test, i) => (
          <div key={i} className="flex gap-4 p-5 bg-page-bg rounded-xl border border-border-color shadow-sm relative">
            <Quote className="w-6 h-6 text-primary/20 shrink-0 absolute top-4 left-4" />
            <div className="pl-8 w-full">
              <p className="text-sm text-text-primary italic mb-3">"{test.text}"</p>
              <div className="flex items-center justify-between w-full">
                <span className="text-xs font-semibold text-text-secondary">{test.author}</span>
                <div className="flex">
                  {[...Array(test.rating)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 text-accent fill-accent" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
