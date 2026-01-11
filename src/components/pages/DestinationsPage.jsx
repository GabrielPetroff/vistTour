import { useNavigate } from 'react-router';
import TourPackageCard from '../common/destinationCard/DestinationCard.jsx';
import data from '../../data/data.json';

export default function TourPackagesGrid() {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Tour Packages
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Discover amazing Italian experiences and book your perfect tour
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.destinations.map((destination) => (
            <div key={destination.id} className="flex">
              <TourPackageCard
                image={destination.images[0]}
                title={destination.name}
                price={destination.price}
                frequency={destination.duration}
                groupSize={destination.country}
                description={destination.description}
                onReadMore={() => handleReadMore(destination.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
