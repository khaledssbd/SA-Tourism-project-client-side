import { Link, useLoaderData } from 'react-router-dom';
import { addToFavourite, getFavouriteSpots } from '../../Utils/Utils';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const TouristsSpotDetails = () => {
  const [showCheckOut, setShowCheckOut] = useState(false);
  const favouriteSpots = getFavouriteSpots();
  const spot = useLoaderData();
  const {
    _id,
    image,
    tourists_spot_name,
    country_Name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
    user_name,
    user_email,
  } = spot;

  useEffect(() => {
    const isExist = favouriteSpots.find(b => b === _id);
    if (isExist) {
      setShowCheckOut(true);
    }
  }, [favouriteSpots, _id]);

  const makeItFavourite = Id => {
    addToFavourite(Id);
    setShowCheckOut(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-5 lg:my-10">
      <Helmet>
        <title>SA-Tourism | {tourists_spot_name}</title>
      </Helmet>
      <div className="my-5 lg:my-16">
        <div className="p-2 rounded-2xl bg-gray-300 flex justify-center items-center">
          <img
            className="w-full h-62 rounded-xl"
            src={image}
            alt={tourists_spot_name}
          />
        </div>
        <h3 className="text-xl font-medium mb-4 pb-4 border-b my-4">
          Country: {country_Name}
        </h3>
        <h3 className="text-xl font-medium ">Location: {location}</h3>
      </div>
      <div>
        <h3 className="font-play text-2xl lg:text-4xl font-bold">
          {tourists_spot_name}
        </h3>

        <h3 className="text-base font-bold text-gray-500 my-10 text-justify">
          Description: <span className="font-normal">{short_description}</span>
        </h3>

        <div className="space-y-5">
          <div className="grid grid-cols-3">
            <h4 className="text-base font-normal">
              Average Cost:
            </h4>
            <div className="col-span-2">
              <h3 className="text-base font-semibold">${average_cost}</h3>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <h4 className="text-base font-normal">
              Best season to travel:
            </h4>
            <div className="col-span-2">
              <h3 className="text-base font-semibold">{seasonality}</h3>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <h4 className="text-base font-normal">
              Travel Time:
            </h4>
            <div className="col-span-2">
              <h3 className="text-base font-semibold">{travel_time} Days</h3>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <h4 className="text-base font-normal">
              Total Visitors Per Year:
            </h4>
            <div className="col-span-2">
              <h3 className="text-base font-semibold">
                {totalVisitorsPerYear} (mostly)
              </h3>
            </div>
          </div>
          <p className="text-lg py-7">
            <strong>Added By:</strong> {user_name} ({user_email})
          </p>
        </div>
        <div className="flex gap-2 mt-5">
          <button
            onClick={() => makeItFavourite(_id)}
            className={
              showCheckOut
                ? 'btn text-xs md:text-sm bg-green-300 hover:bg-green-300 text-white hover:text-black'
                : 'btn text-xs md:text-sm bg-green-600 hover:bg-green-500 text-white hover:text-black'
            }
          >
            Add to Favourite
          </button>
          {showCheckOut && (
            <Link to="/favourite-spots">
              <button className="btn text-xs md:text-sm bg-blue-600 text-white hover:bg-red-500 hover:text-black">
                Check Favourites
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TouristsSpotDetails;
