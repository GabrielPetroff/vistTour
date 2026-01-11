import { Calendar, Users, ArrowRight } from 'lucide-react';

export default function TourPackageCard({
  image = 'https://images.unsplash.com/photo-1552832860-cfaf68475c1f?w=400&h=500&fit=crop',
  title = 'Florence',
  price = 34,
  currency = '€',
  frequency = 'EVERY DAY',
  groupSize = '3-10 PP',
  description = 'Visit the beautiful Siena and the cities that surround it to experience Italian culture and history.',
  onReadMore = () => {},
}) {
  return (
    <div className="flex flex-col items-center gap-4 w-80">
      {/* Image Container */}
      <div
        className="w-80 h-96 rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Content Container */}
      <div className="flex flex-col gap-5 w-80">
        {/* Title and Price Section */}
        <div className="flex flex-col gap-3 w-80">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            {title}
          </h2>

          {/* Price */}
          <div className="flex items-center gap-2 h-8">
            <span className="text-lg font-semibold text-gray-800 opacity-80">
              from
            </span>
            <span className="text-2xl font-black text-orange-500">
              {price} {currency}
            </span>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex gap-24 w-80 opacity-60 text-sm">
          {/* Calendar / Frequency */}
          <div className="flex items-center gap-1.5">
            <Calendar className="w-6 h-6 text-orange-500" />
            <span className="text-base font-semibold text-orange-500">
              {frequency}
            </span>
          </div>

          {/* Group Size */}
          <div className="flex items-center gap-1.5">
            <Users className="w-6 h-6 text-orange-500" />
            <span className="text-base font-semibold text-orange-500">
              {groupSize}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="w-80 text-lg text-gray-800 leading-relaxed">
          {description}
        </p>

        {/* CTA Button */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onReadMore}
            className="px-6 py-1.5 rounded-2xl bg-transparent border-2 border-orange-500 text-orange-500 font-semibold text-lg hover:bg-orange-50 transition-colors"
          >
            Read More
          </button>
          <ArrowRight className="w-6 h-6 text-orange-500" />
        </div>
      </div>
    </div>
  );
}
