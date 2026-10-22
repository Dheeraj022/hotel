import { Layers, Clock, FileText, ShieldCheck, HeartHandshake } from "lucide-react";

export default function TrustStrip() {
  const items = [
    {
      icon: Layers,
      title: "Wide Selection",
      subtitle: "of Stays",
    },
    {
      icon: Clock,
      title: "Free Cancellation",
      subtitle: "Information",
    },
    {
      icon: FileText,
      title: "Transparent",
      subtitle: "Information",
    },
    {
      icon: ShieldCheck,
      title: "GST Registered",
      subtitle: "Travel Agency",
    },
    {
      icon: HeartHandshake,
      title: "Travel Assistance",
      subtitle: "for All Needs",
    },
  ];

  return (
    <div className="bg-primary-dark text-white py-6 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-sm font-medium">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <div className="leading-tight">
                <span className="font-semibold text-white block">{item.title}</span>
                <span className="text-xs text-gray-300 block">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
