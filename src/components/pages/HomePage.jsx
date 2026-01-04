import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import jsonData from '../../data/data.json';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('flights');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setDestinations(jsonData.destinations);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error loading data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <p className="text-white text-lg">Loading your data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-2">Error: {error}</p>
          <p className="text-slate-300">
            Make sure data.json exists in your public folder
          </p>
        </div>
      </div>
    );
  }

  if (!destinations || destinations.length === 0) {
    return null;
  }

  const adventures = [
    {
      name: 'Sailing',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Camping',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Hiking',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Scuba Diving',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Canal Cruise',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const features = [
    {
      title: 'GUARANTEE',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'SERVICE',
      desc: 'Nunc vulputate libero et velit interdum, ac aliquet odio.',
    },
    {
      title: 'EXPERIENCE',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
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
    <div className="flex flex-col bg-gray-100">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 py-12 sm:py-16 text-center bg-gradient-to-b from-teal-600 to-teal-700">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Your Dream Vacation Awaits
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white font-serif">
          Explore the World with us.
        </p>
      </div>
      {/* Search Section */}
      {/* <div className="relative -mt-8 sm:-mt-12 flex justify-center px-4 sm:px-8 pb-8">
        <div className="w-full max-w-4xl">
          <div className="flex gap-2 justify-center mb-4 flex-wrap">
            {['FLIGHTS', 'HOTELS', 'TOURS'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-light rounded ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-teal-500 text-white'
                    : 'bg-white text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-white bg-opacity-80 rounded shadow-lg p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              <div>
                <label className="text-xs text-gray-600 block mb-2">From</label>
                <input
                  type="text"
                  placeholder="Departure"
                  className="w-full text-sm p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600 block mb-2">To</label>
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full text-sm p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600 block mb-2">
                  Departure Date
                </label>
                <input
                  type="date"
                  className="w-full text-sm p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600 block mb-2">
                  Return Date
                </label>
                <input
                  type="date"
                  className="w-full text-sm p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600 block mb-2">
                  Traveller(s), Class
                </label>
                <select className="w-full text-sm p-2 border border-gray-300 rounded">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>Family</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Popular Destinations */}
      {/* Explore Popular Destinations */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              Explore Our Popular Destinations
            </h2>
            <div className="hidden md:flex gap-3 lg:gap-5 flex-row">
              <button
                onClick={() => handleSlideChange(currentSlide - 1)}
                disabled={currentSlide === 0}
                className="relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              >
                <div className="absolute inset-0 bg-gray-200 rounded-full" />
                <div className="relative flex items-center justify-center">
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 text-gray-800 opacity-60 rotate-180"
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
                disabled={currentSlide >= destinations.length - 1}
                className="relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              >
                <div className="absolute inset-0 bg-orange-500 rounded-full" />
                <div className="relative flex items-center justify-center">
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 text-white"
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
          </div>

          {/* Desktop/Tablet Carousel View */}
          <div className="hidden md:block overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 lg:gap-6"
              style={{ transform: `translateX(-${currentSlide * (100 / 1)}%)` }}
            >
              {destinations.map((dest) => (
                <Link
                  key={dest.id}
                  to={`/destination/${dest.id}`}
                  className="flex-shrink-0 w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] flex flex-col gap-3 md:gap-4 group"
                >
                  <div className="w-full h-64 md:h-72 lg:h-80 xl:h-96 rounded-2xl lg:rounded-3xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                    <img
                      src={dest.images[0]}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-3 px-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                      {dest.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs md:text-sm text-gray-600 font-semibold opacity-80">
                        from
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-orange-500">
                        {dest.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 opacity-60 text-xs md:text-sm">
                      <div className="flex items-center gap-1">
                        <span className="text-lg md:text-xl lg:text-2xl">
                          📅
                        </span>
                        <span className="text-orange-500 font-semibold">
                          EVERY DAY
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-lg md:text-xl lg:text-2xl">
                          👥
                        </span>
                        <span className="text-orange-500 font-semibold">
                          3-10 PP
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed text-center line-clamp-3">
                      {dest.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Swipe View */}
          <div
            className="md:hidden"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Link
              to={`/destination/${destinations[currentSlide].id}`}
              className="block"
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={destinations[currentSlide].images[0]}
                    alt={destinations[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 md:gap-3 px-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
                    {destinations[currentSlide].name}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs sm:text-sm text-gray-600 font-semibold opacity-80">
                      from
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-orange-500">
                      {destinations[currentSlide].price}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-6 sm:gap-8 opacity-60 text-xs sm:text-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-xl sm:text-2xl">📅</span>
                      <span className="text-orange-500 font-semibold">
                        EVERY DAY
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xl sm:text-2xl">👥</span>
                      <span className="text-orange-500 font-semibold">
                        3-10 PP
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed text-center">
                    {destinations[currentSlide].description}
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex justify-center gap-2 mt-6">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-orange-500 w-8'
                      : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-8 sm:py-16 px-4 sm:px-8 bg-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-center text-black mb-8 sm:mb-12">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {destinations.map((dest, idx) => (
            <Link
              key={idx}
              to={`/destination/${dest.id}`}
              className="bg-white bg-opacity-90 rounded shadow-md overflow-hidden hover:shadow-lg transition block"
            >
              <img
                src={dest.images[0]}
                alt={dest.name}
                className="h-32 sm:h-40 w-full object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-800 mb-1">
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{dest.country}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">
                      {dest.price}
                    </div>
                    <div className="flex items-center justify-end gap-1 text-xs text-gray-600 font-medium">
                      <Clock className="w-3 h-3" />
                      <span>{dest.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
      {/* Why Us Section */}
      <section className="py-8 sm:py-16 px-4 sm:px-8 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-center text-black mb-8 sm:mb-12">
          Why Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-50 rounded shadow p-4 sm:p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-3xl sm:text-4xl mb-4 flex justify-center">
                {idx === 0 && '△'}
                {idx === 1 && '👑'}
                {idx === 2 && '◇'}
              </div>
              <h3 className="font-serif text-base sm:text-lg text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Adventures Section */}
      <section className="py-8 sm:py-16 px-4 sm:px-8 bg-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-center text-black mb-8 sm:mb-12">
          Have an Adventure Today
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {adventures.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-80 rounded overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-24 sm:h-32 bg-gradient-to-br from-gray-300 to-gray-400"></div>
              <div className="p-3 sm:p-4">
                <h3 className="font-serif text-xs sm:text-sm text-gray-800 mb-2">
                  {adv.name}
                </h3>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {adv.desc}
                </p>
                <button className="text-teal-600 hover:text-teal-700 text-sm">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-8 sm:py-16 px-4 sm:px-8 bg-white bg-opacity-70">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-center text-gray-800 mb-2 sm:mb-4">
            Award Winning
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc vulputate
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <div className="bg-white bg-opacity-60 rounded p-4 sm:p-6">
              <h3 className="font-serif text-lg sm:text-xl text-gray-800 mb-4">
                NEWSLETTER
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consec adipiscing elit.
              </p>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 p-3 bg-white bg-opacity-60 border border-gray-300 rounded text-sm"
              />
              <input
                type="email"
                placeholder="Confirm Email"
                className="w-full mb-4 p-3 bg-white bg-opacity-60 border border-gray-300 rounded text-sm"
              />
              <button className="w-full bg-teal-500 text-white py-2 rounded text-sm font-medium hover:bg-teal-600 transition">
                SUBSCRIBE
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {[...Array(6)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-20 sm:h-24 bg-gray-300 rounded"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 bg-white bg-opacity-70 text-center">
        <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 mb-3 sm:mb-4">
          Looking for an experience?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
          amet.
        </p>
        <button className="bg-teal-500 text-white px-4 sm:px-6 py-2 rounded hover:bg-teal-600 text-xs sm:text-sm font-medium transition">
          VIEW PACKAGES
        </button>
      </section>
    </div>
  );
}
