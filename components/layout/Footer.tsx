import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Column 1 */}
        <div>
          <h3 className="text-2xl font-bold mb-4">BRIGHTSPARK</h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            Your trusted travel partner for holidays, flights, hotels, tours and more.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"><FaFacebook className="w-5 h-5" /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"><FaInstagram className="w-5 h-5" /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"><FaLinkedin className="w-5 h-5" /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"><MessageCircle className="w-5 h-5" /></Link>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/packages" className="hover:text-accent transition-colors">Holiday Packages</Link></li>
            <li><Link href="/destinations" className="hover:text-accent transition-colors">Destinations</Link></li>
            <li><Link href="/hotels" className="hover:text-accent transition-colors">Hotels & Resorts</Link></li>
            <li><Link href="/cruises" className="hover:text-accent transition-colors">Cruises</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Top Destinations</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/destinations/goa" className="hover:text-accent transition-colors">Goa</Link></li>
            <li><Link href="/destinations/manali" className="hover:text-accent transition-colors">Manali</Link></li>
            <li><Link href="/destinations/kerala" className="hover:text-accent transition-colors">Kerala</Link></li>
            <li><Link href="/destinations/rajasthan" className="hover:text-accent transition-colors">Rajasthan</Link></li>
            <li><Link href="/destinations/dubai" className="hover:text-accent transition-colors">Dubai</Link></li>
            <li><Link href="/destinations/bali" className="hover:text-accent transition-colors">Bali</Link></li>
            <li><Link href="/destinations/singapore" className="hover:text-accent transition-colors">Singapore</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <address className="not-italic text-sm text-gray-300 space-y-4">
            <p>
              Khasra No. 382, Second Floor,<br />
              100 Foota Road, Village Ghitorni,<br />
              New Delhi, 110030
            </p>
            <p>Phone: <Link href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</Link></p>
            <p>Email: <Link href="mailto:info@brightsparkleisure.com" className="hover:text-accent transition-colors">info@brightsparkleisure.com</Link></p>
            <p>Hours: Mon - Sun: 9:00 AM - 8:00 PM</p>
          </address>
        </div>
      </div>

      {/* Legal Strip */}
      <div className="bg-primary text-xs border-t border-primary-light">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-300">
            &copy; {new Date().getFullYear()} Brightspark Leisure Services Pvt Ltd. All rights reserved.<br/>
            GSTIN: 07AAGCB1234L1ZE
          </div>
          <div className="flex flex-wrap gap-4 text-gray-400">
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/cancellation-policy" className="hover:text-white transition-colors">Cancellation Policy</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
