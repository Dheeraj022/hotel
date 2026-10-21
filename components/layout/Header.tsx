"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Holiday Packages", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Hotels & Resorts", href: "/hotels" },
    { name: "Cruises", href: "/cruises" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white border-b border-border-color sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold text-primary tracking-tight">GUEST ASSIST</span>
          <span className="text-xs text-text-secondary uppercase tracking-wider"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-primary font-medium hover:text-accent transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#enquire"
            className="bg-accent text-white px-6 py-2.5 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            ENQUIRE NOW
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-border-color shadow-lg p-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-primary font-medium hover:text-accent p-2 border-b border-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#enquire"
            className="bg-accent text-white text-center px-6 py-3 rounded-md font-semibold hover:opacity-90 mt-2"
            onClick={() => setIsOpen(false)}
          >
            ENQUIRE NOW
          </Link>
        </div>
      )}
    </header>
  );
}
