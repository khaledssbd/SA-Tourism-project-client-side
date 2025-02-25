import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { Typewriter } from 'react-simple-typewriter';
// import addIcon from '../../assets/addIcon.svg';

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);

  const handleAddProduct = e => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_Name = form.country_Name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;

    if (country_Name === 'null') {
      return toast.error('Must select one Country Name');
    }

    if (seasonality === 'null') {
      return toast.error('Must select one Seasonality');
    }

    const info = {
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
    };

    fetch('https://ph-a10-server.vercel.app/addTouristsSpot', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(info),
    })
      .then(res => res.json())
      .then(data => {
        if (data?.insertedId) {
          Swal.fire({
            title: 'WOW!',
            text: 'Spot Added successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          form.reset();
        }
      });
  };

  return (
    <div className="my-8 sm:px-6">
      <Helmet>
        <title>SA-Tourism | Add Spot</title>
      </Helmet>
      <h5 className="text-2xl font-bold flex justify-center items-center gap-3 text-[#fa237d]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 4c-4.879 0-9 4.121-9 9s4.121 9 9 9s9-4.121 9-9s-4.121-9-9-9zm4 10h-3v3h-2v-3H8v-2h3V9h2v3h3v2zm1.284-10.293l1.412-1.416l3.01 3l-1.413 1.417zM5.282 2.294L6.7 3.706l-2.99 3l-1.417-1.413z"
            fill="currentColor"
          />
        </svg>

        <span style={{ color: '#fa237d', fontWeight: 'bold' }}>
          <Typewriter
            words={['Add Tourists Spot']}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h5>
      <div className="mt-8 mx-auto w-full md:w-2/3">
        <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side */}
            <div className="flex-1">
              <label className="block mb-1">
                Spot Image (1440px × 960px suits best)
              </label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="text"
                required
                placeholder="Enter image URL"
                name="image"
              />
              <label className="block mt-4 mb-1">Spot Name</label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="text"
                required
                placeholder="Enter spot name"
                name="tourists_spot_name"
              />
              <label className="block mt-4 mb-1">Country Name</label>
              <select
                name="country_Name"
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="text"
                required
                placeholder="Select country"
              >
                <option hidden value="null">
                  Select one country
                </option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
              <label className="block mt-4 mb-1">Location</label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="text"
                required
                placeholder="Enter location"
                name="location"
              />
              <label className="block mt-4 mb-1">Short Description</label>
              <textarea
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                name="short_description"
                required
                placeholder="Enter short description"
                cols="1"
                rows="3"
              ></textarea>
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-1">Average Cost in $</label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="number"
                required
                placeholder="Enter only number. Example: 100"
                name="average_cost"
              />
              <label className="block mt-4 mb-1">Seasonality</label>
              <select
                name="seasonality"
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="text"
                required
                placeholder="Select seasonality"
              >
                <option hidden value="null">
                  Select one seasonality
                </option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
              </select>
              <label className="block mt-4 mb-1">Travel Time in Days</label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="number"
                required
                placeholder="Enter only number. Example: 8"
                name="travel_time"
              />
              <label className="block mt-4 mb-1">Total Visitors Per Year</label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="number"
                required
                placeholder="Enter only number. Example: 300000"
                name="totalVisitorsPerYear"
              />
              <label className="block mt-4 mb-1">Your Name</label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="text"
                required
                name="user_name"
                placeholder="Your name"
                defaultValue={user?.displayName}
              />
              <label className="block mt-4 mb-1 text-red-500">
                Your Email {'(unchangeable)'}
              </label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-red-500"
                type="email"
                required
                name="user_email"
                placeholder="Your email"
                defaultValue={user?.email}
                readOnly
              />
            </div>
          </div>

          <input
            className="w-2/3 py-2 my-4 hover:bg-green-900 rounded-full bg-green-500 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
