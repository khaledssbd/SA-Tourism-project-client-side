import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ph-a10-server.vercel.app/allTourCountries')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      });
  }, []);

  return (
    <div>
      <h4 className="font-play text-xl md:text-3xl font-medium">
        <span style={{ color: '#fa237d', fontWeight: 'bold' }}>
          <Typewriter
            words={[
              'Countries we plan',
              'Bangladesh',
              'Vietnam',
              'Cambodia',
              'Indonesia',
              'Malaysia',
              'Thailand',
            ]}
            loop={55}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h4>
      <div className="my-16 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map(country => (
            <Link
              to={`/country-based-spots/${country.country_Name}`}
              key={country._id}
              className="p-3 bg-gray-300 rounded-xl"
              data-aos="zoom-out-up"
            >
              <img className="h-64 rounded-lg" src={country.image} alt="" />
              <h3 className="font-medium text-lg my-5 text-red-600">
                Country: {country.country_Name}
              </h3>
              <p className="font-medium text-sm text-gray-700 text-justify mx-5">
                {country.short_description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
