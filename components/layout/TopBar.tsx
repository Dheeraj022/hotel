import { ShieldCheck, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-primary-dark text-white text-sm py-2">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-accent" />
          <span>GST REGISTERED TRAVEL AGENCY</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span>Call Us: +91 98765 43210</span>
          </Link>
          <Link href="https://wa.me/919876543210" className="flex items-center gap-2 text-accent-green hover:opacity-80 transition-opacity">
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
