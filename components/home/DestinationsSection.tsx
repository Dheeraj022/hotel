import Image from "next/image";
import Link from "next/link";

export default function DestinationsSection() {
  const destinations = [
    { name: "Goa", type: "Beaches & Nightlife", img: "/destinations/goa.png" },
    { name: "Manali", type: "Snow & Mountains", img: "/destinations/manali.png" },
    { name: "Kerala", type: "Backwaters & Nature", img: "/destinations/kerala.png" },
    { name: "Rajasthan", type: "Royal Heritage", img: "/destinations/rajasthan.png" },
    { name: "Dubai", type: "Luxury & Adventure", img: "/destinations/dubai.png" },
    { name: "Bali", type: "Island of Gods", img: "/destinations/bali.png" },
    { name: "Singapore", type: "Beaches & Culture", img: "/destinations/singapore.png" },
    { name: "New Zealand", type: "Nature & Adventure", img: "/destinations/new zealand.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            POPULAR DESTINATIONS
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors">DOMESTIC DESTINATIONS</button>
            <button className="bg-transparent text-text-secondary border border-border-color px-6 py-2 rounded-full text-sm font-semibold hover:bg-page-bg transition-colors">INTERNATIONAL DESTINATIONS</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <Link href={`/destinations/${dest.name.toLowerCase().replace(' ', '-')}`} key={i} className="group rounded-xl overflow-hidden shadow-sm border border-border-color block">
              <div className="relative h-48 overflow-hidden">
                <Image src={dest.img} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-primary">{dest.name}</h3>
                <p className="text-xs text-text-secondary mt-1">{dest.type}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/destinations" className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors inline-block text-sm">
            EXPLORE ALL DESTINATIONS
          </Link>
        </div>
      </div>
    </section>
  );
}
