import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Clock,
  MapPin,
  User,
  Ticket,
  Bus,
  Globe,
  X,
} from 'lucide-react';
import data from '../../data/data.json';

export default function WineTastingTour() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const foundDestination = data.destinations.find(
      (dest) => dest.id === parseInt(id)
    );
    setDestination(foundDestination);
  }, [id]);

  const reviews = [
    {
      name: 'Lyod Gomez',
      text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
    },
    {
      name: 'Sarah Johnson',
      text: 'An amazing experience that exceeded all expectations. The tour was well-organized, the guide was knowledgeable, and the wine selections were exquisite.',
    },
    {
      name: 'Marco Rossi',
      text: 'Bellissimo! This tour perfectly combines culture, history, and the finest wines of Tuscany. Highly recommended for anyone visiting the region.',
    },
  ];

  if (!destination) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-800">Destination not found</p>
          <button
            onClick={() => navigate('/destinations')}
            className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Back to Destinations
          </button>
        </div>
      </div>
    );
  }

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <style>{`
        #gallery-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
        <button
          onClick={() => navigate('/destinations')}
          className="flex items-center gap-2 text-gray-800 opacity-40 hover:opacity-60 mb-4 sm:mb-6"
        >
          <ChevronLeft size={20} className="rotate-180 sm:w-6 sm:h-6" />
          <span className="text-base sm:text-lg font-semibold">Back</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Main Image */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div
              className="w-full lg:w-[700px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl shadow-lg bg-cover bg-center"
              style={{
                backgroundImage: `url(${destination.images[0] || ''})`,
              }}
            ></div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6">
              {destination.images.slice(1, 4).map((image, idx) => (
                <div
                  key={idx}
                  className="w-full aspect-video rounded-xl sm:rounded-2xl shadow bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-start flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
              {destination.name}
            </h1>

            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 opacity-80">
                from
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-orange-500">
                {destination.price}
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-800 opacity-60 leading-relaxed mb-6 sm:mb-8">
              {destination.description}
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8">Details</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-6 sm:mb-8">
            {destination.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl">
            <div className="flex items-center gap-2 sm:gap-3">
              <Users size={20} className="text-orange-500 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                Number of group: 15-30
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Clock size={20} className="text-orange-500 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                Duration: {destination.duration}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <MapPin size={20} className="text-orange-500 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                Location: {destination.country}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <User size={20} className="text-orange-500 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                Guide service: Included
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Globe size={20} className="text-orange-500 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                Language: English, Italian
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Ticket size={20} className="text-orange-500 opacity-80 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                Entry Fees: lorem ipsum
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 col-span-1 sm:col-span-2">
              <Bus size={20} className="text-orange-500 opacity-80 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                EntryTransportation: Bus
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">Gallery</h2>
            <div className="flex gap-3 sm:gap-5">
              <button
                onClick={() => {
                  const container =
                    document.getElementById('gallery-container');
                  container?.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
              >
                <ChevronLeft size={20} className="text-gray-900 opacity-60 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => {
                  const container =
                    document.getElementById('gallery-container');
                  container?.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <ChevronRight size={20} className="text-white sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          <div
            id="gallery-container"
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {destination.gallery && destination.gallery.length > 0 ? (
              (() => {
                const gallery = destination.gallery;
                const groups = [];
                for (let i = 0; i < gallery.length; i += 4) {
                  groups.push(gallery.slice(i, i + 4));
                }
                return groups.map((images, idx) => (
                  <div key={idx} className="flex-shrink-0 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                    {/* Large image */}
                    {images[0] && (
                      <div
                        className="w-[280px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[360px] lg:w-[700px] lg:h-[506px] rounded-xl sm:rounded-2xl shadow-lg bg-cover bg-center"
                        style={{ backgroundImage: `url(${images[0]})` }}
                      ></div>
                    )}

                    {/* Right column images */}
                    {images.length > 1 && (
                      <div className="flex flex-row sm:flex-col gap-3 sm:gap-4 md:gap-6">
                        {images[1] && (
                          <div
                            className="w-[135px] h-[100px] sm:w-[195px] sm:h-[145px] md:w-[245px] md:h-[174px] lg:w-[340px] lg:h-[242px] rounded-xl sm:rounded-2xl shadow-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${images[1]})` }}
                          ></div>
                        )}
                        {images[2] && (
                          <div
                            className="w-[135px] h-[100px] sm:w-[195px] sm:h-[145px] md:w-[245px] md:h-[174px] lg:w-[340px] lg:h-[242px] rounded-xl sm:rounded-2xl shadow-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${images[2]})` }}
                          ></div>
                        )}
                      </div>
                    )}

                    {/* Tall image */}
                    {images[3] && (
                      <div
                        className="w-[280px] h-[200px] sm:w-[195px] sm:h-[300px] md:w-[245px] md:h-[360px] lg:w-[340px] lg:h-[506px] rounded-xl sm:rounded-2xl shadow-lg bg-cover bg-center"
                        style={{ backgroundImage: `url(${images[3]})` }}
                      ></div>
                    )}
                  </div>
                ));
              })()
            ) : (
              <p className="text-gray-500">No images available</p>
            )}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative mb-8 sm:mb-12">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
              Happy Customers Says
            </h2>
            <div className="flex gap-3 sm:gap-5">
              <button
                onClick={prevReview}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
              >
                <ChevronLeft size={20} className="text-gray-900 opacity-60 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <ChevronRight size={20} className="text-white sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ${
                  idx === currentReview
                    ? 'bg-white border border-gray-200 shadow-lg'
                    : 'bg-gray-100 opacity-40'
                }`}
              >
                <div className="flex flex-col items-center mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-300 to-orange-200 mb-3 sm:mb-4"></div>
                  <p className="text-base sm:text-lg font-medium text-gray-900 text-center">
                    {review.name}
                  </p>
                </div>

                <p className="text-gray-900 text-center leading-relaxed text-sm sm:text-base">
                  {review.text}
                </p>

                <div className="mt-4 sm:mt-6 text-orange-500 text-xl sm:text-2xl opacity-10">
                  "
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
