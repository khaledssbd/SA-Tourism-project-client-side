import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allTourCountries')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      });
  }, []);

  return (
    <div className="my-16 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map(country => (
          <Link
            to={`/country-based-spots/${country.country_Name}`}
            key={country._id}
            className="p-3 bg-gray-200 rounded-xl hover:shadow-inner transform hover:scale-105 hover:bg-opacity-50 transition ease-out duration-200"
          >
            <img className="h-64 rounded-lg" src={country.image} alt="" />
            <h3 className="font-medium text-lg my-5 text-red-600">
              Country: {country.country_Name}
            </h3>
            <p className="font-medium text-sm text-justify mx-5">
              Description: {country.short_description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
