import { ShieldCheck, IndianRupee, EyeOff, Lock, Clock, ThumbsUp } from "lucide-react";

export default function TrustStrip() {
  const items = [
    { icon: ShieldCheck, text: "GST Registered Travel Agency" },
    { icon: IndianRupee, text: "Transparent Pricing" },
    { icon: EyeOff, text: "No Hidden Charges" },
    { icon: Lock, text: "Secure & Reliable Assistance" },
    { icon: Clock, text: "24/7 Customer Support" },
    { icon: ThumbsUp, text: "100% Customer Satisfaction" },
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
              <span className="max-w-[120px] leading-tight text-gray-200">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
