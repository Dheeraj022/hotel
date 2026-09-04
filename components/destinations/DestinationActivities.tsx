import { Destination } from "@/lib/data/destinations";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function DestinationActivities({ destination }: { destination: Destination }) {
  if (!destination.thingsToDo || destination.thingsToDo.length === 0) return null;

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-8">Things To Do in {destination.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destination.thingsToDo.map((activity, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border-color group">
              <div className="relative h-48 overflow-hidden">
                <Image src={activity.img} alt={activity.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">{activity.title}</h3>
                <p className="text-sm text-text-secondary">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {destination.attractions && destination.attractions.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Top Attractions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {destination.attractions.map((attraction, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-border-color hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{attraction.title}</h3>
                  <p className="text-sm text-text-secondary">{attraction.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
