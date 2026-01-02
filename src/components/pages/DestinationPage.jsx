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
    <div className="w-full max-w-sm mx-auto bg-white rounded-3xl overflow-hidden shadow-lg">
      {/* Header Image */}
      <div className="relative h-96">
        <img
          src={destination.images[0]}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-8 left-5 right-5 flex justify-between z-10">
          {/* Left Icon */}
          <button className="w-10 h-10 rounded-2xl bg-white bg-opacity-40 backdrop-blur-md flex items-center justify-center hover:bg-opacity-50 transition">
            <MapPin className="w-5 h-5 text-emerald-500" />
          </button>

          {/* Right Icon */}
          <button className="w-10 h-10 rounded-2xl bg-white bg-opacity-40 backdrop-blur-md flex items-center justify-center hover:bg-opacity-50 transition">
            <Heart className="w-5 h-5 text-emerald-500" />
          </button>
        </div>

        {/* Image Stack on Right */}
        <div className="absolute bottom-0 right-8 w-16 h-40 bg-white bg-opacity-40 backdrop-blur-lg rounded-2xl p-3 flex flex-col gap-2 justify-center">
          {destination.images.slice(0, 2).map((image, index) => (
            <button
              key={index}
              onClick={() => openModal(index)}
              className="w-12 h-12 rounded-2xl overflow-hidden hover:opacity-80 transition"
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
              className="relative w-12 h-12 bg-gradient-to-br from-black to-gray-800 bg-opacity-40 rounded-2xl flex items-center justify-center hover:opacity-80 transition overflow-hidden"
            >
              <img
                src={destination.images[2]}
                alt={`${destination.name} 3`}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <span className="relative z-10 text-white font-bold text-sm">
                +{destination.images.length - 2}
              </span>
            </button>
          )}
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

      {/* Content Section */}
      <div className="relative -mt-6 bg-white rounded-3xl pt-8 px-6 pb-6">
        {/* Title and Price */}
        <div className="flex justify-between items-start gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-black">
              {destination.name}
            </h1>
            <p className="text-sm text-gray-600 mt-1">{destination.country}</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 whitespace-nowrap text-center">
            <p className="text-3xl font-bold text-black">{destination.price}</p>
            <p className="text-xs text-gray-600">/person</p>
          </div>
        </div>

        {/* Overview Section */}
        <h2 className="text-lg font-bold text-emerald-500 mb-4">Overview</h2>

        {/* Stats Row */}
        <div className="flex gap-8 mb-6">
          {/* Duration */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 text-cyan-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">
                Duration
              </p>
              <p className="text-sm font-semibold text-black">
                {destination.duration}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Star className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">
                Rating
              </p>
              <p className="text-sm font-semibold text-black">4.8 out of 5</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          {destination.description}
        </p>

        {/* Book Now Button */}
        <button className="w-full bg-gradient-to-b from-emerald-400 to-emerald-600 text-white font-bold py-4 rounded-2xl hover:from-emerald-500 hover:to-emerald-700 transition text-center">
          Book Now
        </button>
      </div>
    </div>
  );
}
