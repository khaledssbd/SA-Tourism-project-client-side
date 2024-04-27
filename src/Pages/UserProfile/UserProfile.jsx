import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import userImg from '../../assets/user.png';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mb-20">
      <Helmet>
        <title>SA-Tourism | User Profile</title>
      </Helmet>
      <h2 className="text-xl sm:text-2xl mt-10 mb-5 text-center font-bold">
        Your Profile
      </h2>
      <div className=" md:w-3/4 lg:w-1/2 mx-auto">
        <div className="md:pl-20">
          <h4 className="text-base text-left font-medium">
            Name:
            <span className="text-amber-700 ml-2">{user.displayName}</span>
          </h4>
          <div className="flex justify-start gap-10 items-center my-5 md:my-10">
            <h4 className="text-base text-left font-medium">
              Profile Picture:
            </h4>
            <img
              className="rounded-lg w-20"
              title={user.displayName}
              src={user?.photoURL || userImg}
            />
          </div>
          <h4 className="text-base text-left font-medium">
            Email:
            <span className="text-amber-700 ml-2">{user.email}</span>
          </h4>
        </div>
      </div>

      <p className="text-center mt-10">
        Want to update your profile?{' '}
        <Link
          className="text-blue-600 text-sm font-bold ml-2"
          to="/update-profile"
        >
          Click here
        </Link>
      </p>
    </div>
  );
};

export default UserProfile;
