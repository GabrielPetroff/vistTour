import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Clock, Star, MapPin } from 'lucide-react';

export default function DestinationPage() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    if (destination && currentImageIndex < destination.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextImage();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevImage();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentImageIndex, destination]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../src/data/data.json');
        if (!response.ok) {
          throw new Error('Failed to load data.json');
        }
        const jsonData = await response.json();
        const foundDestination = jsonData.destinations.find(
          (dest) => dest.id === parseInt(id)
        );
        if (!foundDestination) {
          throw new Error('Destination not found');
        }
        setDestination(foundDestination);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (error || !destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-2">
            Error: {error || 'Destination not found'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-4 md:py-8">
      <div className="max-w-sm md:max-w-3xl lg:max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Images (Desktop) / Top (Mobile) */}
          <div className="relative">
            {/* Header Image */}
            <div className="relative h-80 md:h-[500px] lg:h-[600px]">
              <img
                src={destination.images[0]}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover lg:rounded-l-3xl"
              />
              <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 flex justify-between z-10">
                {/* Left Icon */}
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white bg-opacity-40 backdrop-blur-md flex items-center justify-center hover:bg-opacity-50 transition">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                </button>

                {/* Right Icon */}
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white bg-opacity-40 backdrop-blur-md flex items-center justify-center hover:bg-opacity-50 transition">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                </button>
              </div>

              {/* Image Gallery - Mobile/Tablet: Vertical Stack */}
              <div className="lg:hidden absolute bottom-4 right-4 md:right-6 w-16 md:w-20 bg-white bg-opacity-40 backdrop-blur-lg rounded-2xl p-2 md:p-3 flex flex-col gap-2">
                {destination.images.slice(0, 2).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => openModal(index)}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden hover:opacity-80 transition"
                  >
                    <img
                      src={image}
                      alt={`${destination.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
                {destination.images.length > 2 && (
                  <button
                    onClick={() => openModal(2)}
                    className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-black to-gray-800 bg-opacity-40 rounded-xl flex items-center justify-center hover:opacity-80 transition overflow-hidden"
                  >
                    <img
                      src={destination.images[2]}
                      alt={`${destination.name} 3`}
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <span className="relative z-10 text-white font-bold text-sm md:text-base">
                      +{destination.images.length - 2}
                    </span>
                  </button>
                )}
              </div>

              {/* Image Gallery - Desktop: Horizontal Grid Below */}
              <div className="hidden lg:block absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex gap-2 justify-center">
                  {destination.images.slice(0, 4).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => openModal(index)}
                      className="w-20 h-20 rounded-xl overflow-hidden hover:opacity-80 transition border-2 border-white/50"
                    >
                      <img
                        src={image}
                        alt={`${destination.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                  {destination.images.length > 4 && (
                    <button
                      onClick={() => openModal(4)}
                      className="relative w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center hover:opacity-80 transition overflow-hidden border-2 border-white/50"
                    >
                      <img
                        src={destination.images[4]}
                        alt={`${destination.name} 5`}
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                      />
                      <span className="relative z-10 text-white font-bold text-base">
                        +{destination.images.length - 4}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Image Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <div className="relative max-w-4xl w-full">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute -top-12 right-0 text-gray-900 hover:text-gray-600 transition z-10"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Previous Button */}
                {currentImageIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-70 hover:bg-opacity-90 backdrop-blur-md rounded-full items-center justify-center transition z-10"
                  >
                    <svg
                      className="w-6 h-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                )}

                {/* Image */}
                <div
                  className="relative"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <img
                    src={destination.images[currentImageIndex]}
                    alt={`${destination.name} ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

                {/* Next Button */}
                {currentImageIndex < destination.images.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-70 hover:bg-opacity-90 backdrop-blur-md rounded-full items-center justify-center transition z-10"
                  >
                    <svg
                      className="w-6 h-6 text-gray-900"
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
                  </button>
                )}
              </div>

              {/* Image Counter - Below Image */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white bg-opacity-80 backdrop-blur-md px-4 py-2 rounded-full">
                <p className="text-gray-900 text-sm font-medium">
                  {currentImageIndex + 1} / {destination.images.length}
                </p>
              </div>
            </div>
          )}

          {/* Right Column - Content (Desktop) / Bottom (Mobile) */}
          <div className="relative -mt-6 lg:mt-0 bg-white rounded-3xl lg:rounded-none pt-6 md:pt-8 lg:pt-0 px-5 md:px-8 lg:px-10 pb-6 md:pb-8 lg:py-12">
            {/* Title and Price */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex-1">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  {destination.name}
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                  <p className="text-sm md:text-base text-gray-600">
                    {destination.country}
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-4 md:p-6 text-center border-2 border-emerald-200 self-start">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-600">
                  {destination.price}
                </p>
                <p className="text-xs md:text-sm text-emerald-700 font-medium">
                  /person
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {/* Duration */}
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-4 md:p-5 border border-cyan-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-cyan-600" />
                  </div>
                  <p className="text-xs md:text-sm font-bold text-cyan-700 uppercase">
                    Duration
                  </p>
                </div>
                <p className="text-base md:text-lg font-bold text-cyan-900">
                  {destination.duration}
                </p>
              </div>

              {/* Rating */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-4 md:p-5 border border-amber-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                  </div>
                  <p className="text-xs md:text-sm font-bold text-amber-700 uppercase">
                    Rating
                  </p>
                </div>
                <p className="text-base md:text-lg font-bold text-amber-900">
                  4.8 / 5
                </p>
              </div>
            </div>

            {/* Overview Section */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                About This Trip
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* Book Now Button */}
            <button className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white font-bold py-4 md:py-5 rounded-2xl hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl text-base md:text-lg">
              Book This Adventure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
