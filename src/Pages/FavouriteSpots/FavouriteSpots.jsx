import { useEffect, useState } from 'react';
import { getFavouriteSpots, removeFromFavourite } from '../../Utils/Utils';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

const FavouriteSpots = () => {
  const allSpots = useLoaderData();
  const [showSpots, setShowSpots] = useState([]);

  useEffect(() => {
    const favouriteSpotsId = getFavouriteSpots();
    const favouriteSpots = allSpots.filter(spot =>
      favouriteSpotsId.includes(spot._id)
    );
    setShowSpots(favouriteSpots);
  }, [allSpots]);

  const remove = id => {
    removeFromFavourite(id);
    const favouriteSpotsId = getFavouriteSpots();
    const favouriteSpots = allSpots.filter(spot =>
      favouriteSpotsId.includes(spot._id)
    );
    setShowSpots(favouriteSpots);
  };

  // Sort By Title
  const sortByString = property => {
    setShowSpots(prevData => {
      return [...prevData].sort((a, b) => {
        if (a[property] > b[property]) return 1;
        if (a[property] < b[property]) return -1;
        return 0;
      });
    });
  };

  // Sort By travel_time & totalVisitorsPerYear,
  const sortByNumber = property => {
    setShowSpots(prevData => {
      return [...prevData].sort((a, b) => {
        const numA = Number(a[property]);
        const numB = Number(b[property]);
        return numA - numB;
      });
    });
  };

  return (
    <div className="mb-5 md:mb-10">
      <Helmet>
        <title>SA-Tourism | Favourites</title>
      </Helmet>
      <h3 className="text-xl sm:text-2xl md:text-3xl my-10 text-center">
        Favourite Spots ({showSpots.length})
      </h3>
      {showSpots.length > 0 && (
        <div className="dropdown mb-5 lg:mb-14">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-white text-sm lg:text-lg font-semibold py-1 lg:py-2 px-2 lg:px-5 rounded-lg bg-[#23BE0A] hover:bg-slate-800"
          >
            Sort By <span className="text-sm">(Ascending)</span>{' '}
            <RiArrowDropDownLine />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => sortByString('tourists_spot_name')}>
              <a>Title</a>
            </li>
            <li onClick={() => sortByNumber('average_cost')}>
              <a>Cost</a>
            </li>
            <li onClick={() => sortByNumber('totalVisitorsPerYear')}>
              <a>Visitors</a>
            </li>
            <li onClick={() => sortByNumber('travel_time')}>
              <a>Travel Time</a>
            </li>
          </ul>
        </div>
      )}
      <div className="w-4/5 md:w-3/4 lg:w-1/2 mx-auto space-y-5">
        {showSpots?.map((spot, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row justify-center items-center gap-6 border rounded-xl p-3 bg-slate-200"
          >
            <img
              className="sm:w-3/5 md:w-1/3 rounded-lg w-full h-36"
              src={spot.image}
              alt={spot.tourists_spot_name}
            />
            <div className="space-y-2 flex-grow text-black">
              <h3 className="font-bold">{spot.tourists_spot_name}</h3>
              <h3 className="text-start text-sm font-sans">
                Location: {spot.location}
              </h3>
              <h3 className="text-start text-sm font-sans">
                Total Visitors Per Year: {spot.totalVisitorsPerYear} {' Mostly'}
              </h3>
              <h3 className="text-start text-sm font-sans">
                Average Cost: ${spot.average_cost}
              </h3>
              <h3 className="text-start text-sm font-sans">
                Travel Time: {spot.travel_time} {' Days'}
              </h3>
            </div>
            <div className="flex flex-row md:flex-col gap-4 md:gap-8">
              <Link to={`/spot-details/${spot._id}`}>
                <button className="btn btn-outline text-white hover:bg-amber-700 bg-primary rounded-lg p-2">
                  View Details
                </button>
              </Link>
              <button
                onClick={() => remove(spot._id)}
                className="btn btn-outline bg-red-500 rounded-lg p-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteSpots;
