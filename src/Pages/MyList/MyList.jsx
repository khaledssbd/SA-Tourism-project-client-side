import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyList = () => {
  const [myAddedSpots, setMyAddedSpots] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://ph-a10-server.vercel.app/getMine/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyAddedSpots(data);
      });
  }, [user?.email]);

  const handleDelete = id => {
    console.log(id);
    Swal.fire({
      title: 'Confirm to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://ph-a10-server.vercel.app/deleteSpot/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your Coffee has been deleted.', 'success');
              const remaining = myAddedSpots.filter(cof => cof._id !== id);
              setMyAddedSpots(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="my-10 sm:px-6">
      <h5 className="text-2xl font-bold mb-8">Spots added by me</h5>
      <div className="overflow-x-auto rounded-2xl border border-black">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-green-400">
            <tr>
              <th className="text-sm text-black">Sl</th>
              <th className="text-sm text-black">Tourists Spot Name</th>
              <th className="text-sm text-black">Location</th>
              <th className="text-sm text-black">Average Cost</th>
              <th className="text-sm text-black">Seasonality</th>
              <th className="text-sm text-black">Update</th>
              <th className="text-sm text-black">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row starts */}
            {myAddedSpots.map((spot, i) => (
              <tr key={spot._id}>
                <th>{i + 1}.</th>
                <td>{spot.tourists_spot_name}</td>
                <td>{spot.location}</td>
                <td>{spot.average_cost}</td>
                <td>{spot.seasonality}</td>
                <td>
                  <Link to={`/update-spot/${spot._id}`}>
                    <button className="btn btn-ghost bg-blue-500 hover:bg-black text-white">
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(spot._id)}
                    className="btn btn-ghost bg-red-500 hover:bg-black text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
