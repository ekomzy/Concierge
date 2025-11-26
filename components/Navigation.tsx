"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/chat", label: "Chat" },
    { href: "/booking", label: "Booking" },
    // { href: "/member", label: "Become a Member" },
  ];

  return (
    <nav className="bg-cream-50 border-b border-cream-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-luxury-dark">
              The Concierge
            </span>
            <span className="text-sm text-gold-500 font-serif">by Shirob</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gold-500 border-b-2 border-gold-500 pb-1"
                    : "text-luxury-text hover:text-gold-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/membership"
              className="bg-gold-500 text-white px-6 py-2 rounded-sm hover:bg-gold-600 transition-colors text-sm font-medium"
            >
              Become a Member
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-luxury-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gold-500"
                    : "text-luxury-text hover:text-gold-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="block bg-gold-500 text-white px-6 py-2 rounded-sm hover:bg-gold-600 transition-colors text-sm font-medium text-center"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
