import { Destination } from "@/lib/data/destinations";
import { Plane, Train, Banknote, Languages, Clock, FileCheck } from "lucide-react";

export default function DestinationTravelInfo({ destination }: { destination: Destination }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-8">Travel Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <Plane className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Getting There</h4>
            <p className="text-xs text-text-secondary">Major international and domestic airports are well connected.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <Train className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Local Transport</h4>
            <p className="text-xs text-text-secondary">Taxis, rental cars, and public transport are widely available.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <Banknote className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Currency</h4>
            <p className="text-xs text-text-secondary">{destination.region === "Domestic" ? "Indian Rupee (INR)" : "Local Currency / USD accepted in major spots."}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <Languages className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Languages</h4>
            <p className="text-xs text-text-secondary">English is widely understood in tourist areas.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <FileCheck className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Visa Requirements</h4>
            <p className="text-xs text-text-secondary">{destination.region === "Domestic" ? "Not required for Indian citizens." : "Visa on arrival / E-Visa available for most tourists."}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
          <Clock className="w-6 h-6 text-accent shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">Best Time To Visit</h4>
            <p className="text-xs text-text-secondary">{destination.bestTime}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
