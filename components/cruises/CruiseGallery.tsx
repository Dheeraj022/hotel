import Image from "next/image";

export default function CruiseGallery() {
  // Using placeholders for the gallery since we don't have actual cruise images yet.
  const images = [
    "/images/hero-maldives.jpg",
    "/images/travel-luggage.jpg",
    "/images/cta-mountain.jpg",
    "/hotels-cruises/leela.jpg"
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-8">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className={`relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 row-span-2 h-64 md:h-auto' : 'h-32 md:h-48'}`}>
            <Image 
              src={img} 
              alt="Cruise Gallery Image" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}