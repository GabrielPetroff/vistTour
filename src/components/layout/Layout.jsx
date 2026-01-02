import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  Circle,
  Menu,
  X,
} from 'lucide-react';
import { Outlet } from 'react-router';

export default function Layout() {
  const [activeTab, setActiveTab] = useState('flights');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="relative w-full bg-gradient-to-b from-teal-600 to-teal-700">
        {/* Top Navigation */}
        <div className="flex justify-between items-center px-4 sm:px-8 py-4 bg-black bg-opacity-20">
          <div className="flex gap-3 sm:gap-6">
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white cursor-pointer hover:opacity-80" />
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-white cursor-pointer hover:opacity-80" />
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white cursor-pointer hover:opacity-80" />
          </div>
          <div className="hidden sm:flex gap-4 lg:gap-6 text-xs lg:text-sm text-white">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+1 334 445 623</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>contact@startravels.com</span>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="sm:hidden flex flex-col gap-2 px-4 py-4 bg-black bg-opacity-10">
            <a href="/" className="text-white hover:opacity-80 py-2">
              Home
            </a>
            <a href="#" className="text-white hover:opacity-80 py-2">
              Packages
            </a>
            <a href="#" className="text-white hover:opacity-80 py-2">
              Tours
            </a>
            <a href="#" className="text-white hover:opacity-80 py-2">
              About Us
            </a>
            <a href="#" className="text-white hover:opacity-80 py-2">
              Contact
            </a>
          </nav>
        )}

        {/* Main Navigation */}
        <nav className="hidden sm:flex gap-6 lg:gap-12 px-4 sm:px-8 py-6 text-white text-sm lg:text-lg">
          <a href="#" className="hover:opacity-80">
            Home
          </a>
          <a href="#" className="hover:opacity-80">
            Packages
          </a>
          <a href="#" className="hover:opacity-80">
            Tours
          </a>
          <a href="#" className="hover:opacity-80">
            About Us
          </a>
          <a href="#" className="hover:opacity-80">
            Contact
          </a>
        </nav>
      </header>

      <Outlet />

      {/* Footer */}
      <footer className="bg-teal-700 text-white py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-center mb-6 sm:mb-8">
            Star Travels
          </h1>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 text-sm sm:text-base text-gray-200">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#" className="hover:text-white transition">
              Packages
            </a>
            <a href="#" className="hover:text-white transition">
              Tours
            </a>
            <a href="#" className="hover:text-white transition">
              About Us
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </nav>
          <p className="text-center text-xs sm:text-sm text-gray-300">
            Copyright 2023 | StarTravels.com | All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
