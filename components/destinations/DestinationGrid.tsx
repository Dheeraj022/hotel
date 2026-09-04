"use client";
import { useState } from "react";
import DestinationCard from "./DestinationCard";
import { Destination } from "@/lib/data/destinations";

export default function DestinationGrid({ destinations }: { destinations: Destination[] }) {
  const [filter, setFilter] = useState<"All" | "Domestic" | "International">("All");

  const filtered = filter === "All" 
    ? destinations 
    : destinations.filter(d => d.region === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["All", "Domestic", "International"].map((tab) => (
          <button 
            key={tab}
            onClick={() => setFilter(tab as any)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${filter === tab ? 'bg-primary text-white shadow-md' : 'bg-transparent text-text-secondary border border-border-color hover:bg-page-bg'}`}
          >
            {tab === "All" ? "ALL DESTINATIONS" : tab.toUpperCase()}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </div>
  );
}
