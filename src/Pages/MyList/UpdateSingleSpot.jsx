import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const UpdateSingleSpot = () => {
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
  } = spot;

  
  // const { _id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, user_name, user_email} = spot;

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

    if (country_Name === 'null') {
      return toast.error('Must select one Country Name');
    }

    if (seasonality === 'null') {
      return toast.error('Must select one Seasonality');
    }

    const UpdateInfo = {
      image,
      tourists_spot_name,
      country_Name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
    };

    fetch(`https://ph-a10-server.vercel.app/updateSpot/${_id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(UpdateInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'WOW!',
            text: 'Spot Updated Successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        }
      });
  };

  return (
    <div className="my-8 sm:px-6">
      <Helmet>
        <title>SA-Tourism | Update Spot</title>
      </Helmet>
      <h5 className="text-2xl font-bold">
        Update The Spot ({tourists_spot_name})
      </h5>
      <div className="mt-8 mx-auto w-full md:w-2/3">
        <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side */}
            <div className="flex-1">
              <label className="block mb-1">
                Spot Image (1440px x 960px suits best)
              </label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="text"
                required
                placeholder="Enter image URL"
                name="image"
                defaultValue={image}
              />
              <label className="block mt-4 mb-1">Spot Name</label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="text"
                required
                placeholder="Enter spot name"
                name="tourists_spot_name"
                defaultValue={tourists_spot_name}
              />
              <label className="block mt-4 mb-1">Country Name</label>
              <select
                name="country_Name"
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="text"
                required
                placeholder="Select country"
                defaultValue={country_Name}
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
                defaultValue={location}
              />
              <label className="block mt-4 mb-1">Short Description</label>
              <textarea
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                name="short_description"
                defaultValue={short_description}
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
                defaultValue={average_cost}
              />
              <label className="block mt-4 mb-1">Seasonality</label>
              <select
                name="seasonality"
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="text"
                required
                placeholder="Select seasonality"
                defaultValue={seasonality}
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
                defaultValue={travel_time}
              />
              <label className="block mt-4 mb-1">Total Visitors Per Year</label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-green-500"
                type="number"
                required
                placeholder="Enter only number. Example: 300000"
                name="totalVisitorsPerYear"
                defaultValue={totalVisitorsPerYear}
              />
              {/* <label className="block mt-4 mb-1 text-red-500">
                Your Name {'(unchangeable)'}
              </label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-red-500"
                type="text"
                required
                name="user_name"
                placeholder="Your name"
                defaultValue={user_name}
                readOnly
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
                defaultValue={user_email}
                readOnly
              /> */}
            </div>
          </div>

          <input
            className="w-2/3 py-2 my-4 hover:bg-green-900 rounded-full bg-green-500 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateSingleSpot;
