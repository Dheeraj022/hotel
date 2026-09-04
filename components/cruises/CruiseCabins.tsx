import { Cruise } from "@/lib/data/cruises";
import Image from "next/image";
import { ArrowRight, User, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CruiseCabins({ cruise }: { cruise: Cruise }) {
  if (!cruise.cabins || cruise.cabins.length === 0) return null;

  return (
    <section id="cabins" className="scroll-mt-[120px]">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#031b4e]">Cabin Options</h2>
        <Link href="#enquiry" className="text-sm font-semibold text-[#031b4e] flex items-center gap-1 hover:text-accent transition-colors">
          View All Cabin Categories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cruise.cabins.map((cabin, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] flex flex-col group">
            {/* Image */}
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={cabin.image || "/images/hero-maldives.jpg"}
                alt={cabin.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="text-lg font-bold text-[#031b4e] mb-1">{cabin.name}</h4>
              <p className="text-xs text-gray-500 mb-4">{cabin.description}</p>
              
              <ul className="space-y-2 mb-6 flex-1">
                {cabin.features.slice(0, 2).map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                    {i === 0 ? <User className="w-3.5 h-3.5 text-[#031b4e] mt-0.5" /> : <CheckCircle2 className="w-3.5 h-3.5 text-[#031b4e] mt-0.5" />}
                    {feat}
                  </li>
                ))}
              </ul>
              
              <a href="#enquiry" className="block w-full py-2.5 text-center text-sm font-bold text-[#031b4e] border border-gray-200 rounded hover:border-[#031b4e] hover:bg-gray-50 transition-colors uppercase tracking-wider">
                GET QUOTE
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}