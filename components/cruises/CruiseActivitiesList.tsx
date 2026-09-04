import { Cruise } from "@/lib/data/cruises";
import * as LucideIcons from "lucide-react";

export default function CruiseActivitiesList({ cruise }: { cruise: Cruise }) {
  if (!cruise.onboardActivities || cruise.onboardActivities.length === 0) return null;

  // Helper to dynamically get the Lucide icon component by name
  const getIcon = (iconName: string) => {
    // Capitalize and format icon name (e.g., 'activity' -> 'Activity', 'shopping-bag' -> 'ShoppingBag')
    const formattedName = iconName
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (LucideIcons as any)[formattedName] || LucideIcons.Activity;
    return <IconComponent className="w-8 h-8 mb-3 text-[#031b4e]" strokeWidth={1.5} />;
  };

  return (
    <section id="activities" className="scroll-mt-[120px]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#031b4e] mb-6">Onboard Activities & Entertainment</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cruise.onboardActivities.map((activity, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg border border-gray-100 flex flex-col items-center text-center justify-center min-h-[120px] shadow-sm hover:shadow-md transition-shadow group cursor-pointer hover:border-[#031b4e]/30">
            <div className="group-hover:scale-110 transition-transform duration-300">
              {getIcon(activity.icon)}
            </div>
            <h4 className="text-xs font-semibold text-gray-700 leading-tight">
              {activity.name.split(' (')[0]}
              {activity.name.includes('(') && (
                <span className="block text-[10px] text-gray-500 mt-1 font-normal">
                  ({activity.name.split('(')[1]}
                </span>
              )}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
