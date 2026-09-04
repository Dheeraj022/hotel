import Image from "next/image";
import { Destination } from "@/lib/data/destinations";

export default function DestinationGallery({ destination }: { destination: Destination }) {
  if (!destination.gallery || destination.gallery.length === 0) return null;

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-8">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {destination.gallery.map((img, i) => (
          <div key={i} className={`relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 row-span-2 h-64 md:h-[400px]' : 'h-32 md:h-48'}`}>
            <Image 
              src={img} 
              alt={`${destination.name} Gallery Image ${i+1}`}
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
