import { Cruise } from "@/lib/data/cruises";
import { CheckCircle2 } from "lucide-react";

export default function CruiseOverview({ cruise }: { cruise: Cruise }) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-6">About the Cruise</h2>
        <div className="prose prose-lg text-gray-600 max-w-none leading-relaxed">
          <p>{cruise.description}</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">✨</span>
          Cruise Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          {cruise.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}