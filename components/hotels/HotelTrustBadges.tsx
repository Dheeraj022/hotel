import { ShieldCheck, CalendarCheck, Map, Clock, Star } from "lucide-react";

export default function HotelTrustBadges() {
  const badges = [
    { icon: ShieldCheck, text: "Best Available Rates" },
    { icon: CalendarCheck, text: "Personalized Travel Plans" },
    { icon: Map, text: "Expert Travel Consultants" },
    { icon: Clock, text: "24x7 Customer Support" },
    { icon: Star, text: "Hassle-Free Assistance" },
    { icon: ShieldCheck, text: "Trusted Travel Partner" }
  ];

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-primary mb-4">Why Book Through Brightspark?</h3>
      <div className="space-y-4">
        {badges.map((b, i) => {
          const Icon = b.icon;
          return (
            <div key={i} className="flex items-center gap-3">
              <div className="text-blue-600">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-700">{b.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
