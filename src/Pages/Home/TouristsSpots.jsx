import PropTypes from 'prop-types';
import SingleTouristsSpotCard from '../AllTouristsSpot/SingleTouristsSpotCard';

const TouristsSpots = ({ allSpots }) => {
  return (
    <div className="mt-8 sm:px-6">
      <h5 className="text-2xl font-bold">
        All Tourists Spots: ({allSpots.length})
      </h5>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allSpots.map(spot => (
          <SingleTouristsSpotCard
            key={spot._id}
            spot={spot}
          ></SingleTouristsSpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpots;

TouristsSpots.propTypes = {
  allSpots: PropTypes.array.isRequired,
};
