import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

export default function TravelHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  const destinations = [
    {
      id: 1,
      name: 'Lacta Brera Trip',
      category: 'ITALY',
      image: '🏛️',
      description:
        'A tour of the city and its surroundings led by a professional guide with experience in the sector.',
    },
    {
      id: 2,
      name: 'Wine tasting in Tuscany',
      category: 'ITALY',
      image: '🍷',
      description:
        'A tour of the city and its surroundings led by a professional guide with experience in the sector.',
    },
    {
      id: 3,
      name: 'Cinque Terre Tour',
      category: 'ITALY',
      image: '🏔️',
      description:
        'A tour of the city and its surroundings led by a professional guide with experience in the sector.',
    },
    {
      id: 4,
      name: 'Verde and surrounding',
      category: 'ITALY',
      image: '🌿',
      description:
        'A tour of the city and its surroundings led by a professional guide with experience in the sector.',
    },
  ];

  const services = [
    {
      id: 1,
      title: 'Bike and rickshaw rental',
      image: '🚴',
      description: 'Book your quality vehicle quickly for an hour or all day!',
    },
    {
      id: 2,
      title: 'Guided tour of the countryside',
      image: '👨‍🌾',
      description:
        'Live the real Lucchese experience by visiting the suburbs by bike!',
    },
    {
      id: 3,
      title: 'Taxi and NCC service',
      image: '🚕',
      description:
        'Do you need not only a bike but also a driver? Then you have found the right place!',
    },
    {
      id: 4,
      title: 'Bus Package',
      image: '🚌',
      description:
        'Do you need not only a bike but also a driver? Then you have found the right place!',
    },
  ];

  const packages = [
    {
      id: 1,
      title: 'BIKE I PACKINGS',
      price: '10',
      icon: '🚐',
      details: [
        'Day trip in Italy',
        'Rental package of villa',
        'Discount on dinners',
        'Travel insurance',
      ],
    },
    {
      id: 2,
      title: 'BIKE TOURS',
      price: '30',
      icon: '👥',
      details: [
        '3 Personal Hotel each',
        'A favorite place to eat',
        'Arrive in area in time',
        'Travel insurance',
      ],
    },
    {
      id: 3,
      title: 'BUS TRIPS',
      price: '45',
      icon: '🌳',
      details: [
        'Visit here',
        'Accommodation',
        'Meal 3 days',
        'Travel insurance',
      ],
    },
    {
      id: 4,
      title: 'TRANSFER',
      price: '10',
      icon: '🚕',
      details: [
        'Personal travel',
        'Rental car',
        'At the best place',
        'Travel insurance',
      ],
    },
  ];

  const stats = [
    { number: '20+', label: 'Year Experience' },
    { number: '100+', label: 'Happy Customers' },
    { number: '15+', label: 'Tour Packages' },
    { number: '10+', label: 'Destinations' },
  ];

  const handleSlideChange = (newIndex) => {
    if (newIndex >= 0 && newIndex < destinations.length) {
      setCurrentSlide(newIndex);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    if (touchStart - e.changedTouches[0].clientX > 75) {
      handleSlideChange(currentSlide + 1);
    }
    if (e.changedTouches[0].clientX - touchStart > 75) {
      handleSlideChange(currentSlide - 1);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-white/20 backdrop-blur-sm">
        <div className="text-2xl font-bold text-orange-500">🌍 TourGuide</div>
        <nav className="hidden md:flex gap-10 items-center">
          <a
            href="#"
            className="text-white font-semibold text-xl border-b-2 border-orange-500 pb-1"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white font-semibold text-xl hover:border-b-2 hover:border-orange-500 pb-1"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white font-semibold text-xl hover:border-b-2 hover:border-orange-500 pb-1"
          >
            Tour Packages
          </a>
          <a
            href="#"
            className="text-white font-semibold text-xl hover:border-b-2 hover:border-orange-500 pb-1"
          >
            Contact Us
          </a>
        </nav>
        <div className="hidden md:flex gap-3 items-center">
          <button className="text-white font-semibold text-xl border border-white rounded-full px-6 py-2">
            Login
          </button>
          <button className="bg-orange-500 text-white font-semibold text-xl rounded-full px-6 py-2">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen w-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271920%27 height=%271020%27%3E%3Crect fill=%27%23333%27 width=%271920%27 height=%271020%27/%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/40 to-gray-900/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
          {/* Title */}
          <div className="flex flex-col items-center gap-6 mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white text-center font-serif">
              Enjoy in the best way!
            </h1>
            <p className="text-white text-2xl md:text-3xl font-bold text-center max-w-2xl">
              Enjoy our services for your trip anytime
            </p>
          </div>

          {/* Search Section */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 space-y-4">
            {/* Tab Selection */}
            <div className="flex gap-0 mb-4">
              <button className="px-6 py-4 bg-white rounded-tl-xl rounded-tr-none text-orange-500 font-semibold text-lg flex items-center gap-3">
                <span>🌍</span> Public Tours
              </button>
              <button className="px-6 py-4 bg-white/40 rounded-none text-white font-semibold text-lg flex items-center gap-3">
                <span>👥</span> Private Tours
              </button>
            </div>

            {/* Search Inputs */}
            <div className="bg-white rounded-b-2xl p-6 flex flex-col md:flex-row gap-4 items-stretch">
              {/* Number of People */}
              <div className="flex-1">
                <label className="block text-gray-800 font-semibold text-lg mb-2">
                  Number of people
                </label>
                <div className="flex items-center gap-3 text-gray-600">
                  <span>Choose number</span>
                  <ChevronLeft size={20} className="opacity-60" />
                </div>
              </div>

              {/* Date */}
              <div className="flex-1">
                <label className="block text-gray-800 font-semibold text-lg mb-2">
                  Date
                </label>
                <div className="flex items-center gap-3 text-gray-600">
                  <span>📅</span>
                  <span>Choose Date</span>
                  <ChevronLeft size={20} className="opacity-60" />
                </div>
              </div>

              {/* Time */}
              <div className="flex-1">
                <label className="block text-gray-800 font-semibold text-lg mb-2">
                  Time
                </label>
                <div className="flex items-center gap-3 text-gray-600">
                  <span>⏰</span>
                  <span>Choose Time</span>
                  <ChevronLeft size={20} className="opacity-60" />
                </div>
              </div>

              {/* Tour */}
              <div className="flex-1">
                <label className="block text-gray-800 font-semibold text-lg mb-2">
                  Tour
                </label>
                <div className="flex items-center gap-3 text-gray-600">
                  <span>Select Tour</span>
                  <ChevronLeft size={20} className="opacity-60" />
                </div>
              </div>

              {/* Transportation */}
              <div className="flex-1">
                <label className="block text-gray-800 font-semibold text-lg mb-2">
                  Transportation
                </label>
                <div className="flex items-center gap-3 text-gray-600">
                  <span>Select Transportation</span>
                  <ChevronLeft size={20} className="opacity-60" />
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl p-6 flex items-center justify-center font-bold">
                <Search size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Popular Destinations */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Explore Our Popular Destinations
            </h2>
            {destinations.length > 4 && (
              <div className="hidden md:flex gap-5 flex-row">
                <button
                  onClick={() => handleSlideChange(currentSlide - 1)}
                  className="relative w-12 h-12 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gray-200 rounded-full" />
                  <div className="relative flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gray-800 opacity-60 rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  onClick={() => handleSlideChange(currentSlide + 1)}
                  className="relative w-12 h-12 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-orange-500 rounded-full" />
                  <div className="relative flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white -rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-4 gap-8">
            {destinations.map((dest) => (
              <div key={dest.id} className="flex flex-col gap-4">
                <div className="w-full h-96 bg-gradient-to-br from-blue-300 to-orange-300 flex items-center justify-center text-6xl rounded-3xl overflow-hidden hover:shadow-lg transition">
                  {dest.image}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold text-gray-800 text-center">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-sm font-semibold opacity-80">
                      from
                    </span>
                    <span className="text-2xl font-bold text-orange-500">
                      €34
                    </span>
                  </div>
                  <div className="flex items-center gap-8 opacity-60">
                    <div className="flex items-center gap-1">
                      <span className="text-2xl">📅</span>
                      <span className="text-orange-500 font-semibold text-sm">
                        EVERY DAY
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-2xl">👥</span>
                      <span className="text-orange-500 font-semibold text-sm">
                        3-10 PP
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe View */}
          <div
            className="md:hidden"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex flex-col gap-4">
              <div className="w-full h-96 bg-gradient-to-br from-blue-300 to-orange-300 flex items-center justify-center text-6xl rounded-3xl overflow-hidden">
                {destinations[currentSlide].image}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-gray-800 text-center">
                  {destinations[currentSlide].name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 text-sm font-semibold opacity-80">
                    from
                  </span>
                  <span className="text-2xl font-bold text-orange-500">
                    €34
                  </span>
                </div>
                <div className="flex items-center gap-8 opacity-60">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl">📅</span>
                    <span className="text-orange-500 font-semibold text-sm">
                      EVERY DAY
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl">👥</span>
                    <span className="text-orange-500 font-semibold text-sm">
                      3-10 PP
                    </span>
                  </div>
                </div>
                <p className="text-gray-800 text-base leading-relaxed">
                  {destinations[currentSlide].description}
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {destinations.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition ${
                    index === currentSlide
                      ? 'bg-orange-500 w-8'
                      : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col gap-5">
                <div className="w-full h-72 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center text-6xl overflow-hidden">
                  {service.image}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
