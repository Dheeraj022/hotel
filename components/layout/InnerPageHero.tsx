import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface InnerPageHeroProps {
  title: string;
  description?: string;
  breadcrumb: string;
  bgImage?: string;
}

export default function InnerPageHero({ 
  title, 
  description, 
  breadcrumb,
  bgImage = "/images/cta-mountain.jpg"
}: InnerPageHeroProps) {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImage} 
          alt={title} 
          fill 
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-center text-sm font-medium space-x-2 text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
}
