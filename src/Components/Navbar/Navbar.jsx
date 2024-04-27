import { Link, NavLink } from 'react-router-dom';
import userImg from '../../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('You logged out successfully!');
      })
      .catch(error => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-red-500 border-b-4 border-red-500'
              : 'hover:text-red-500'
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-red-500 border-b-4 border-red-500'
              : 'hover:text-red-500'
          }
          to="/all-tourists-spot"
        >
          All Tourists Spot
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-red-500 border-b-4 border-red-500'
                  : 'hover:text-red-500'
              }
              to="/add-tourists-spot"
            >
              Add Tourists Spot
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-red-500 border-b-4 border-red-500'
                  : 'hover:text-red-500'
              }
              to="/my-list"
            >
              My List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-red-500 border-b-4 border-red-500'
                  : 'hover:text-red-500'
              }
              to="/favourite-spots"
            >
              Favourite Spots
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-200 rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="btn -ml-6 sm:-ml-0 btn-ghost hover:bg-black hover:text-black text-lg sm:text-xl md:text-3xl font-bold"
        >
          <button className="bg-gradient-to-r from-primary to-red-500 text-transparent bg-clip-text">
            SA-Tourism
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="m-1 btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    title={
                      user?.displayName ? user?.displayName : 'No Name Set Yet'
                    }
                    src={user?.photoURL || userImg}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    to="/update-profile"
                    className="hover:bg-blue-500 hover:text-white font-bold"
                  >
                    Update Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user-profile"
                    className="hover:bg-blue-500 hover:text-white font-bold"
                  >
                    User Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="hover:bg-red-500 hover:text-white font-bold"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>

            {/* <button
              onClick={handleLogOut}
              className="btn btn-outline bg-red-500 hover:bg-red-900 text-white"
            >
              Log Out
            </button> */}
            
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-outline bg-blue-600 hover:bg-black text-white">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline bg-blue-600 hover:bg-black text-white hidden sm:flex ml-2">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
