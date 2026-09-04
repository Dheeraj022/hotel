"use client";

import { useEffect, useState } from "react";

export default function CruiseStickyNav() {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "cabins", label: "Cabins & Suites" },
    { id: "dining", label: "Dining" },
    { id: "activities", label: "Activities" },
    { id: "destinations", label: "Destinations" },
    { id: "inclusions", label: "Inclusions" },
    { id: "important-info", label: "Important Info" },
    { id: "reviews", label: "Reviews" },
    { id: "faqs", label: "FAQs" },
    { id: "enquiry", label: "Enquiry" },
  ];

  // Optional: Intersection Observer to update active state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for sticky header

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Add 80px offset for the fixed header + sticky nav
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm overflow-x-auto hide-scrollbar">
      <div className="container mx-auto px-4">
        <ul className="flex items-center whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.id} className="flex-shrink-0">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block px-4 py-4 text-sm font-semibold transition-colors relative ${
                  activeSection === item.id
                    ? "text-[#031b4e]"
                    : "text-gray-500 hover:text-[#031b4e]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#031b4e] rounded-t-sm"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
