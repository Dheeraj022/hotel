import { Hotel } from "@/lib/data/hotels";
import { MapPin, Building, Users, Bed, CalendarCheck, CalendarOff } from "lucide-react";

export default function HotelQuickInfo({ hotel }: { hotel: Hotel }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h3 className="text-lg font-bold text-primary mb-6">Quick Hotel Information</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Location</span>
            <span className="text-sm font-semibold text-primary">{hotel.location.split(',')[0]}</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Building className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Property Type</span>
            <span className="text-sm font-semibold text-primary">{hotel.propertyType}</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Ideal For</span>
            <span className="text-sm font-semibold text-primary">{hotel.idealFor}</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Bed className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Room Categories</span>
            <span className="text-sm font-semibold text-primary">{hotel.rooms.length > 0 ? hotel.rooms.map(r=>r.name).join(', ').substring(0,20)+'...' : 'Standard'}</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Check-in</span>
            <span className="text-sm font-semibold text-primary">{hotel.checkIn}</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <CalendarOff className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400">Check-out</span>
            <span className="text-sm font-semibold text-primary">{hotel.checkOut}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
