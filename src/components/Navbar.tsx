"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-20 px-6 md:px-40 flex items-center justify-between bg-white border-b relative">
      {/* Logo + Links */}
      <div className="flex items-center space-x-12 md:space-x-24">
        <Link href="/">
          <img src="/logo.png" alt="ZenithZoi Logo" className="h-16 cursor-pointer" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-black text-lg font-semibold">
          <li><Link href="/" className="hover:text-[#FF6B00] transition-colors">Home</Link></li>
          <li><Link href="/features" className="hover:text-[#FF6B00] transition-colors">Features</Link></li>
          <li><Link href="/community" className="hover:text-[#FF6B00] transition-colors">Community</Link></li>
          <li><Link href="/about" className="hover:text-[#FF6B00] transition-colors">About</Link></li>
        </ul>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-2">
        <button className="bg-[#FF6B00] px-6 py-2 rounded-xl font-semibold text-white hover:bg-orange-600 transition-colors">
          Register
        </button>
        <button className="bg-[#FF6B00] px-6 py-2 rounded-xl font-semibold text-white hover:bg-orange-600 transition-colors">
          Login
        </button>
      </div>

      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden text-2xl focus:outline-none text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t shadow-md md:hidden animate-slideDown">
          <ul className="flex flex-col items-center space-y-4 py-4 text-black font-semibold text-lg">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/features" onClick={() => setIsOpen(false)}>Features</Link></li>
            <li><Link href="/community" onClick={() => setIsOpen(false)}>Community</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          </ul>
          <div className="flex flex-col items-center gap-2 pb-4">
            <button className="bg-[#FF6B00] px-6 py-2 rounded-xl font-semibold text-white hover:bg-orange-600 transition-colors">
              Register
            </button>
            <button className="bg-[#FF6B00] px-6 py-2 rounded-xl font-semibold text-white hover:bg-orange-600 transition-colors">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}