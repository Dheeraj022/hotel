import { MapPin, Clock, Calendar, Users } from "lucide-react";
import { Destination } from "@/lib/data/destinations";

export default function DestinationQuickInfo({ destination }: { destination: Destination }) {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 -mt-12 relative z-20 mx-4 md:mx-auto max-w-5xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 text-primary">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Country</span>
            <span className="font-bold text-primary text-base leading-none">{destination.country}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:pl-8">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 text-primary">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Best For</span>
            <span className="font-bold text-primary text-base leading-none">{destination.bestFor}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:pl-8">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 text-primary">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Ideal Duration</span>
            <span className="font-bold text-primary text-base leading-none">{destination.idealDuration}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:pl-8">
          <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0 text-accent">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Best Time</span>
            <span className="font-bold text-accent text-base leading-none">{destination.bestTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
