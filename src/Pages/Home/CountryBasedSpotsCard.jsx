import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaLocationPin, FaSackDollar} from 'react-icons/fa6';


const CountryBasedSpotsCard = ({ spot }) => {
  const {
    _id,
    tourists_spot_name,
    country_Name,
    location,
    average_cost,
    seasonality,
    short_description,
  } = spot;

  return (
    <div className="rounded-2xl border p-6 flex flex-col border-opacity-30 border-primary">
      <h3 className="text-[#131313] font-play text-base sm:text-xl md:text-2xl font-bold flex-grow mt-4">
        {tourists_spot_name}
      </h3>
      <div className="flex justify-center items-center text-sm font-medium gap-1 mt-4 text-green-700">
        Country: {country_Name}
      </div>
      <div className="flex justify-center items-center text-sm font-medium gap-1 mt-4">
        <FaLocationPin />
        {location}
      </div>
      <div className="pl-5 md:pl-8 py-5 my-5 border-y-2 border-dashed space-y-5">
        <div className="flex justify-center items-center text-sm font-medium gap-2">
          Average Cost:
          <FaSackDollar />
          {average_cost}
        </div>

        <div className="text-base font-medium text-red-500">
          Best season to travel:{' '}
          <span
            className={`p-2 m-2 text-black rounded-md ${
              seasonality === 'Summer' ? 'bg-orange-400' : 'bg-green-400'
            }`}
          >
            {seasonality}
          </span>
        </div>
        <div className="text-sm font-medium gap-2 text-justify">
          Description:{' '}
          <span className="text-gray-600 text-sm">
            {short_description.slice(0,200)}......
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

export default CountryBasedSpotsCard;

CountryBasedSpotsCard.propTypes = {
  spot: PropTypes.object.isRequired,
};
