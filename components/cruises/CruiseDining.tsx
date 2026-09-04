import { Cruise } from "@/lib/data/cruises";
import Image from "next/image";

export default function CruiseDining({ cruise }: { cruise: Cruise }) {
  if (!cruise.diningOptions || cruise.diningOptions.length === 0) return null;

  return (
    <section id="dining" className="scroll-mt-[120px]">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#031b4e] mb-2">Dining & Cuisine</h2>
        <p className="text-gray-600 text-sm md:text-base">World-class dining options to suit every taste.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cruise.diningOptions.map((dining, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] flex flex-col group">
            {/* Image */}
            <div className="relative h-32 w-full overflow-hidden">
              <Image
                src={dining.image || "/images/hero-maldives.jpg"}
                alt={dining.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="text-base font-bold text-[#031b4e] mb-1 leading-tight">{dining.name}</h4>
              <p className="text-xs text-gray-500">{dining.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
