import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaLocationPin, FaSackDollar, FaPeopleGroup } from 'react-icons/fa6';
import { WiDayHaze } from 'react-icons/wi';

const SingleTouristsSpotCard = ({ spot }) => {
  const {
    _id,
    image,
    tourists_spot_name,
    location,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
  } = spot;

  return (
    <div
      className="rounded-2xl bg-white border-2 p-6 flex flex-col border-opacity-30 border-primary"
      // data-aos of this card on home will not work if the prior country card data-aos is inactive
      data-aos="zoom-out-up"
    >
      <div className="rounded-2xl bg-white">
        <img
          className="rounded-2xl border border-gray-600 w-full h-60"
          src={image}
          alt={tourists_spot_name}
        />
      </div>
      <h3 className="text-black font-play text-base sm:text-xl md:text-2xl font-bold flex-grow mt-4">
        {tourists_spot_name}
      </h3>

      <div className="flex justify-center items-center text-sm font-medium gap-1 mt-4 text-black">
        
        <FaLocationPin /><span className="text-green-700">{location}</span>
      </div>
      <div className="text-black pl-5 md:pl-8 py-5 my-5 border-y-2 border-dashed space-y-3">
        <div className="flex justify-center items-center text-sm font-medium gap-2">
          Average Cost:
          <FaSackDollar />
          {average_cost}
        </div>
        <div className="flex justify-center items-center text-sm font-medium gap-2">
          Total Visitors Per Year:
          <h3 className="text-xl">
            <FaPeopleGroup />
          </h3>
          {totalVisitorsPerYear}
        </div>
        <div className="flex justify-center items-center text-sm font-medium gap-2">
          Travel Time:
          <h3 className="text-3xl">
            <WiDayHaze />
          </h3>
          {travel_time} {' Days'}
        </div>
        <div className="text-base font-medium text-red-500">
          Best season for tour:{' '}
          <span
            className={`p-2 m-2 text-black rounded-md ${
              seasonality === 'Summer' ? 'bg-orange-400' : 'bg-green-400'
            }`}
          >
            {seasonality}
          </span>
        </div>
      </div>
      <Link to={`/spot-details/${_id}`}>
        <button className="text-white hover:bg-red-700 bg-green-500 rounded-lg p-2">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleTouristsSpotCard;

SingleTouristsSpotCard.propTypes = {
  spot: PropTypes.object.isRequired,
};
