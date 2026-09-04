export default function HotelStickyNav() {
  const navs = ["Overview", "Rooms", "Amenities", "Location", "FAQs", "Enquiry"];

  return (
    <div className="w-full bg-white border-b border-gray-200 z-40 sticky top-20 shadow-sm">
      <div className="container mx-auto px-4">
        <ul className="flex items-center overflow-x-auto hide-scrollbar gap-2 md:gap-6">
          {navs.map((nav, i) => (
            <li key={i}>
              <a 
                href={`#${nav.toLowerCase().replace(' ', '-')}`}
                className={`block whitespace-nowrap py-4 text-sm font-bold border-b-2 transition-colors ${i === 0 ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-primary'}`}
              >
                {nav}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
