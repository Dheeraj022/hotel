import { notFound } from "next/navigation";
import { getHotelBySlug } from "@/lib/data/hotels";
import HotelHero from "@/components/hotels/HotelHero";
import HotelStickyNav from "@/components/hotels/HotelStickyNav";
import HotelQuickInfo from "@/components/hotels/HotelQuickInfo";
import HotelAbout from "@/components/hotels/HotelAbout";
import HotelRooms from "@/components/hotels/HotelRooms";
import HotelAmenities from "@/components/hotels/HotelAmenities";
import HotelSidebarForm from "@/components/hotels/HotelSidebarForm";
import HotelTrustBadges from "@/components/hotels/HotelTrustBadges";
import HotelReviews from "@/components/hotels/HotelReviews";
import HotelLocation from "@/components/hotels/HotelLocation";
import HotelFAQs from "@/components/hotels/HotelFAQs";
import SimilarHotels from "@/components/hotels/SimilarHotels";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const hotel = getHotelBySlug(p.slug);
  if (!hotel) return {};

  return {
    title: `${hotel.name} | Guest Assists`,
  };
}

export default async function HotelPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const hotel = getHotelBySlug(p.slug);
  
  if (!hotel) {
    notFound();
  }

  return (
    <main className="bg-gray-50 pb-0">
      <HotelHero hotel={hotel} />
      <HotelStickyNav />

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-12">
            <HotelQuickInfo hotel={hotel} />
            <HotelAbout hotel={hotel} />
            <hr className="border-gray-200" />
            <HotelRooms hotel={hotel} />
            <hr className="border-gray-200" />
            <HotelAmenities hotel={hotel} />
            <hr className="border-gray-200" />
            <HotelLocation hotel={hotel} />
            <hr className="border-gray-200" />
            <HotelFAQs hotel={hotel} />
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 relative">
            <HotelSidebarForm hotel={hotel} />
            <HotelTrustBadges />
          </div>

        </div>
        <SimilarHotels currentSlug={hotel.slug} />
      </div>


    </main>
  );
}
