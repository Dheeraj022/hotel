import { Cruise } from "@/lib/data/cruises";
import { Check, X } from "lucide-react";

export default function CruiseIncluded({ cruise }: { cruise: Cruise }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold text-primary mb-8 flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <Check className="w-5 h-5" />
          </span>
          What's Included
        </h3>
        <ul className="space-y-4">
          {cruise.included.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold text-primary mb-8 flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center">
            <X className="w-5 h-5" />
          </span>
          Not Included
        </h3>
        <ul className="space-y-4">
          {cruise.excluded.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
              <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}