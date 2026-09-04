import { Cruise } from "@/lib/data/cruises";
import { Ship, Users, Layers, Utensils, Activity } from "lucide-react";

export default function CruiseAbout({ cruise }: { cruise: Cruise }) {
  if (!cruise.shipFacts) return null;

  const facts = [
    {
      icon: Ship,
      value: cruise.shipFacts.grossTonnage,
      label: "Gross Tonnage",
    },
    {
      icon: Users,
      value: cruise.shipFacts.guestCapacity,
      label: "Guest Capacity",
    },
    {
      icon: Layers,
      value: cruise.shipFacts.passengerDecks,
      label: "Passenger Decks",
    },
    {
      icon: Utensils,
      value: cruise.shipFacts.diningOptionsCount,
      label: "Dining Options",
    },
    {
      icon: Activity,
      value: cruise.shipFacts.onboardActivitiesCount,
      label: "Onboard Activities",
    },
  ];

  return (
    <section id="overview" className="scroll-mt-[120px]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#031b4e] mb-4">
            About {cruise.name.replace('Royal Caribbean ', '')}
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {cruise.description}
          </p>
        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {facts.map((fact, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-white"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-50 text-[#031b4e] rounded-full">
              <fact.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-bold text-[#031b4e] leading-none mb-1">{fact.value}</p>
              <p className="text-xs text-gray-500 font-medium">{fact.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
