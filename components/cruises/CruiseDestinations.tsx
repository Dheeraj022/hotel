import { Cruise } from "@/lib/data/cruises";
import Image from "next/image";

export default function CruiseDestinations({ cruise }: { cruise: Cruise }) {
  if (!cruise.destinationsCovered || cruise.destinationsCovered.length === 0) return null;

  return (
    <section id="destinations" className="scroll-mt-[120px]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#031b4e] mb-6">Destinations Covered</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {cruise.destinationsCovered.map((dest, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg border border-gray-100 p-4 text-center hover:bg-gray-100 transition-colors flex flex-col justify-center min-h-[90px]">
            <h4 className="text-[13px] font-bold text-[#031b4e] leading-tight mb-1">{dest.name}</h4>
            {dest.description && <p className="text-[11px] text-gray-500 leading-tight">{dest.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
