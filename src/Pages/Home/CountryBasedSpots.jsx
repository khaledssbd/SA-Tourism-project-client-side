import { useLoaderData, useParams } from 'react-router-dom';
import CountryBasedSpotsCard from './CountryBasedSpotsCard';

const CountryBasedSpots = () => {
  const { country } = useParams();
  const spots = useLoaderData();

  return (
    <div className="mt-8 sm:px-6">
      <h5 className="text-2xl font-bold">
        Tourists Spots in {country}: ({spots.length})
      </h5>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spots.map(spot => (
          <CountryBasedSpotsCard
            key={spot._id}
            spot={spot}
          ></CountryBasedSpotsCard>
        ))}
      </div>
    </div>
  );
};

export default CountryBasedSpots;
