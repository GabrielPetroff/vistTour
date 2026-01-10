import React, { useState } from 'react';

export default function AboutUsPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Lloyd Gomez',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
      text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    },
    {
      id: 2,
      name: 'John Smith',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
      text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
      text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    },
  ];

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    const maxPage = Math.ceil(reviews.length / 2) - 1;
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : prev));
  };

  const getVisibleReviews = () => {
    const startIndex = currentPage * 2;
    return reviews.slice(startIndex, startIndex + 2);
  };

  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute top-0 left-0 right-0 w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1020&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center h-screen px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl text-center">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 font-['Podcast']">
              Our team cares about your full relax
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-6 md:mb-8 leading-relaxed px-4">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>

            {/* CTA Button */}
            <button className="inline-block px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 border-2 border-white text-white font-semibold text-base sm:text-lg md:text-xl rounded-full hover:bg-white hover:text-orange-500 transition duration-300">
              View our Tour Packages
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* About Us Section */}
      <section className="relative py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-32 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Image */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=516&fit=crop"
                  alt="About Us"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 opacity-60">
              WELCOME TO OUR SITE!
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
              We Are The Center Of Lucca To Offer You The Best
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:flex gap-6 md:gap-8 lg:gap-16">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  20+
                </p>
                <p className="text-xs md:text-sm text-gray-600 opacity-60">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  100+
                </p>
                <p className="text-xs md:text-sm text-gray-600 opacity-60">
                  Happy Customer
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  15+
                </p>
                <p className="text-xs md:text-sm text-gray-600 opacity-60">
                  Choice of Services
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  10+
                </p>
                <p className="text-xs md:text-sm text-gray-600 opacity-60">
                  Professional Guides
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section
        className="relative py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-32"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(250,139,2,0.05) 0%, rgba(250,139,2,0.02) 100%)',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1 */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center hover:bg-white/40 transition">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black mb-2">
              Complete Packages For All Your Wishes
            </h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center hover:bg-white/40 transition">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black mb-2">
              Over 30 Years Of Experience
            </h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center hover:bg-white/40 transition">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black mb-2">
              Expert Guides For You
            </h3>
          </div>

          {/* Card 4 */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center hover:bg-white/40 transition">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.5-9c.83 0 1.5-.67 1.5-1.5S17.33 8 16.5 8 15 8.67 15 9.5s.67 1.5 1.5 1.5zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black mb-2">
              Guaranteed fun at the best price!
            </h3>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-32 bg-white">
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">
            Happy Customers Says
          </h2>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition group ${
                currentPage === 0
                  ? 'bg-gray-100 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-orange-500'
              }`}
            >
              <svg
                className={`w-5 h-5 md:w-6 md:h-6 ${
                  currentPage === 0
                    ? 'text-gray-400'
                    : 'text-gray-700 group-hover:text-white'
                }`}
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
            <button
              onClick={handleNext}
              disabled={currentPage >= Math.ceil(reviews.length / 2) - 1}
              className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition ${
                currentPage >= Math.ceil(reviews.length / 2) - 1
                  ? 'bg-gray-100 cursor-not-allowed'
                  : 'bg-orange-500 hover:bg-orange-600'
              }`}
            >
              <svg
                className={`w-5 h-5 md:w-6 md:h-6 ${
                  currentPage >= Math.ceil(reviews.length / 2) - 1
                    ? 'text-gray-400'
                    : 'text-white'
                }`}
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
          </div>
        </div>

        {/* Review Cards - Mobile Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0 px-2">
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="flex flex-col items-center mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-base font-semibold text-gray-900">
                      {review.name}
                    </h3>
                  </div>
                  <div className="mb-4 text-orange-500 opacity-20">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {review.text}
                  </p>
                  <div className="flex justify-end text-orange-500 opacity-20">
                    <svg
                      className="w-8 h-8 transform rotate-180"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Cards - Desktop Grid with Pagination */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8">
          {getVisibleReviews().map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-col items-center mb-6 md:mb-8">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 object-cover"
                />
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {review.name}
                </h3>
              </div>
              <div className="mb-4 text-orange-500 opacity-20">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
                {review.text}
              </p>
              <div className="flex justify-end text-orange-500 opacity-20">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 transform rotate-180"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
