import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  Circle,
  Menu,
  X,
  MapPin,
} from 'lucide-react';
import { Outlet } from 'react-router';

export default function Layout() {
  const [activeTab, setActiveTab] = useState('flights');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      {/* <header className="relative w-full bg-gradient-to-b from-teal-600 to-teal-700"> */}
      {/* Top Navigation */}
      {/* <div className="flex justify-between items-center px-4 sm:px-8 py-4 bg-black bg-opacity-20">
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
          </button> */}
      {/* </div> */}

      {/* Mobile Menu */}
      {/* {mobileMenuOpen && (
          <nav className="sm:hidden flex flex-col gap-2 px-4 py-4 bg-black bg-opacity-10">
            <a href="/" className="text-white hover:opacity-80 py-2">
              Home
            </a>
            <a href="#" className="text-white hover:opacity-80 py-2">
              Packages
            </a>http://localhost:5173/destination/1
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
        )} */}

      {/* Main Navigation */}
      {/* <nav className="hidden sm:flex gap-6 lg:gap-12 px-4 sm:px-8 py-6 text-white text-sm lg:text-lg">
          <a href="/" className="hover:opacity-80">
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
        </nav> */}
      {/* </header> */}

      <header className="fixed top-0 w-full bg-white bg-opacity-20 backdrop-blur-sm z-50">
        <div className="flex flex-row items-center justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:h-[170px]">
          {/* Logo */}
          <div className="flex-shrink-0 w-20 h-16 sm:w-28 sm:h-24 lg:w-[133px] lg:h-[130px] flex items-center justify-center">
            <img
              src="/vist-logo.png"
              alt="Vist Tour Logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row items-center gap-8 flex-1 justify-center">
            <div className="flex flex-col items-center gap-0">
              <span className="text-gray-900 font-semibold text-xl">Home</span>
              <div className="h-1 w-16 bg-orange-500 mt-1"></div>
            </div>
            <span className="text-gray-900 font-semibold text-xl cursor-pointer hover:text-orange-500 transition">
              About Us
            </span>
            <span className="text-gray-900 font-semibold text-xl cursor-pointer hover:text-orange-500 transition">
              Tour Packages
            </span>
            <span className="text-gray-900 font-semibold text-xl cursor-pointer hover:text-orange-500 transition">
              Contact Us
            </span>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex flex-row items-center gap-2">
            {/* Language Selector */}
            <div className="flex flex-row items-center justify-center gap-1">
              <span className="text-gray-900 font-semibold text-xl opacity-60">
                Eng
              </span>
              <ChevronDown size={20} className="text-gray-900 opacity-60" />
            </div>

            {/* Login Button */}
            <button className="px-3 py-2 rounded-full border border-gray-900 hover:bg-gray-900 hover:bg-opacity-10 transition">
              <span className="text-gray-900 font-semibold text-xl">Login</span>
            </button>

            {/* Sign Up Button */}
            <button className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition">
              <span className="text-white font-semibold text-xl">Sign Up</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-900 p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white bg-opacity-95 backdrop-blur-sm border-t border-gray-200">
            <nav className="flex flex-col px-4 py-4">
              <div className="flex flex-col items-start py-3 border-b border-gray-200">
                <span className="text-gray-900 font-semibold text-lg">
                  Home
                </span>
                <div className="h-1 w-12 bg-orange-500 mt-1"></div>
              </div>
              <span className="text-gray-900 font-semibold text-lg py-3 border-b border-gray-200 cursor-pointer hover:text-orange-500 transition">
                About Us
              </span>
              <span className="text-gray-900 font-semibold text-lg py-3 border-b border-gray-200 cursor-pointer hover:text-orange-500 transition">
                Tour Packages
              </span>
              <span className="text-gray-900 font-semibold text-lg py-3 border-b border-gray-200 cursor-pointer hover:text-orange-500 transition">
                Contact Us
              </span>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-semibold text-lg opacity-60">
                    Eng
                  </span>
                  <ChevronDown size={20} className="text-gray-900 opacity-60" />
                </div>
                <button className="w-full px-4 py-2 rounded-full border border-gray-900 hover:bg-gray-900 hover:bg-opacity-10 transition">
                  <span className="text-gray-900 font-semibold text-lg">
                    Login
                  </span>
                </button>
                <button className="w-full px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition">
                  <span className="text-white font-semibold text-lg">
                    Sign Up
                  </span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-8 sm:pt-10 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Services */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide mb-4 sm:mb-5">
                Services
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <p className="text-base sm:text-lg font-semibold hover:text-orange-500 cursor-pointer transition">
                  Bike and Rickshaw rental
                </p>
                <p className="text-base sm:text-lg font-semibold hover:text-orange-500 cursor-pointer transition">
                  Guided Tours of Lucca
                </p>
                <p className="text-base sm:text-lg font-semibold hover:text-orange-500 cursor-pointer transition">
                  Guided Bike Tour of Lucca
                </p>
                <p className="text-base sm:text-lg font-semibold hover:text-orange-500 cursor-pointer transition">
                  Trip In The Tuscan Hills
                </p>
                <p className="text-base sm:text-lg font-semibold hover:text-orange-500 cursor-pointer transition">
                  Transportation With Luxury Cars
                </p>
                <p className="text-base sm:text-lg font-semibold hover:text-orange-500 cursor-pointer transition">
                  Wine Tours By Bus With Guide
                </p>
              </div>
            </div>

            {/* Home */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide mb-4 sm:mb-5">
                Home
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <p className="text-base sm:text-lg font-semibold hover:text-orange-500 cursor-pointer transition">
                  Home
                </p>
                <p className="text-base sm:text-lg font-semibold hover:text-orange-500 cursor-pointer transition">
                  About Us
                </p>
                <p className="text-base sm:text-lg font-semibold hover:text-orange-500 cursor-pointer transition">
                  Tour Packages
                </p>
              </div>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide mb-4 sm:mb-5">
                Help
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <p className="text-base sm:text-lg font-semibold hover:text-orange-500 cursor-pointer transition">
                  Terms of Use
                </p>
                <p className="text-base sm:text-lg font-semibold hover:text-orange-500 cursor-pointer transition">
                  Privacy Policy
                </p>
              </div>
            </div>

            {/* Contacts */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide mb-4 sm:mb-5">
                Contacts
              </h3>
              <div className="space-y-3 sm:space-y-5">
                {/* Location */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg font-semibold">
                    Плевен ул. "Дойран" №160 ет.1 офис 103
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg font-semibold">
                    064 803 415
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg font-semibold">
                    vist_tour@abv.bg
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-start sm:items-center lg:items-center">
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide mb-4 sm:mb-5">
                Social Media
              </h3>
              <div className="flex gap-4 sm:gap-6">
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
                >
                  <Twitter size={20} className="text-white sm:w-6 sm:h-6" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
                >
                  <Facebook size={20} className="text-white sm:w-6 sm:h-6" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
                >
                  <Instagram size={20} className="text-white sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white opacity-10 mb-4 sm:mb-6"></div>

          {/* Copyright */}
          <div className="text-center text-sm sm:text-base">
            <p>Copyright © 2022. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
