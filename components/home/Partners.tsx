import Image from "next/image";

export default function Partners() {
  const originalPartners = [
    { name: "IndiGo", src: "/partners/indigo.png" },
    { name: "Air India", src: "/partners/airindia.png" },
    { name: "Vistara", src: "/partners/vistara.png" },
    { name: "Emirates", src: "/partners/emirates.svg" },
    { name: "MakeMyTrip", src: "/partners/makemytrip.png" },
    { name: "Yatra", src: "/partners/yatra.png" },
    { name: "Goibibo", src: "/partners/goibibo.png" },
  ];

  // Duplicate the logos to create a seamless infinite loop
  const partners = [...originalPartners, ...originalPartners, ...originalPartners];

  return (
    <section className="py-12 bg-white border-t border-border-color overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-xl font-bold text-primary inline-flex items-center gap-4">
          <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          OUR TRUSTED PARTNERS
          <span className="h-px w-12 bg-border-color hidden sm:block"></span>
        </h2>
      </div>
      
      <div className="w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-start gap-12 lg:gap-20 animate-marquee shrink-0 w-max">
          {partners.map((partner, i) => (
            <div key={i} className="relative h-12 w-28 md:w-36 shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Image 
                src={partner.src} 
                alt={partner.name} 
                fill 
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
