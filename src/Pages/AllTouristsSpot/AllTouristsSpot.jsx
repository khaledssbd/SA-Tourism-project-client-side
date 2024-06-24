import { useLoaderData } from 'react-router-dom';
import SingleTouristsSpotCard from './SingleTouristsSpotCard';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Helmet } from 'react-helmet-async';

const AllTouristsSpot = () => {
  const allTouristsSpot = useLoaderData();
  const [allSpots, setAllSpots] = useState(allTouristsSpot);

  const sortSpotsByAscending = property => {
    setAllSpots(prevData => {
      return [...prevData].sort((a, b) => {
        const numA = Number(a[property]);
        const numB = Number(b[property]);
        return numA - numB;
      });
    });
  };

  const sortSpotsByDescending = property => {
    setAllSpots(prevData => {
      return [...prevData].sort((a, b) => {
        const numA = Number(a[property]);
        const numB = Number(b[property]);
        return numB - numA;
      });
    });
  };

  const sortByAvgCost = (sortBy) => {
    sortBy('average_cost');
  };

  return (
    <div className="mt-8 sm:px-6">
      <Helmet>
        <title>SA-Tourism | All Spots</title>
      </Helmet>
      <h5 className="text-2xl font-bold">
        All Tourists Spots: ({allSpots.length})
      </h5>
      <div className="dropdown my-5 lg:my-14">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 text-white text-sm lg:text-lg font-semibold py-1 lg:py-2 px-2 lg:px-5 rounded-lg bg-[#23BE0A] hover:bg-slate-800"
        >
          Sort By
          <RiArrowDropDownLine />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => sortByAvgCost(sortSpotsByAscending)}>
            <a>Avg cost (ascending)</a>
          </li>
          <li onClick={() => sortByAvgCost(sortSpotsByDescending)}>
            <a>Avg cost (descending)</a>
          </li>
        </ul>
      </div>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allSpots?.map(spot => (
          <SingleTouristsSpotCard
            key={spot._id}
            spot={spot}
          ></SingleTouristsSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
