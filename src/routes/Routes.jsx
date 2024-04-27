import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/layouts/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import UpdateProfile from '../Pages/UpdateProfile/UpdateProfile';
import UserProfile from '../Pages/UserProfile/UserProfile';
import PrivateRoute from './PrivateRoute';
import FavouriteSpots from '../Pages/FavouriteSpots/FavouriteSpots';
import AllTouristsSpot from '../Pages/AllTouristsSpot/AllTouristsSpot';
import AddTouristsSpot from '../Pages/AddTouristsSpot/AddTouristsSpot';
import MyList from '../Pages/MyList/MyList';
import TouristsSpotDetails from '../Pages/TouristsSpotDetails/TouristsSpotDetails';
import UpdateSingleSpot from '../Pages/MyList/UpdateSingleSpot';
import CountryBasedSpots from '../Pages/Home/CountryBasedSpots';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader: () => fetch('http://localhost:5000/allTouristsSpot'),
        element: <Home />,
      },
      {
        path: '/add-tourists-spot',
        element: (
          <PrivateRoute>
            <AddTouristsSpot />
          </PrivateRoute>
        ),
      },
      {
        path: '/all-tourists-spot',
        loader: () => fetch('http://localhost:5000/allTouristsSpot'),
        element: <AllTouristsSpot />,
      },
      {
        path: '/spot-details/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allTouristsSpot/${params.id}`),
        element: (
          <PrivateRoute>
            <TouristsSpotDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/favourite-spots',
        loader: () => fetch('http://localhost:5000/allTouristsSpot'),
        element: (
          <PrivateRoute>
            <FavouriteSpots />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-list/',
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: '/update-spot/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allTouristsSpot/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateSingleSpot />
          </PrivateRoute>
        ),
      },
      {
        path: '/country-based-spots/:country',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/getSpotsByCountry/${params.country}`),
        element: <CountryBasedSpots />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/update-profile',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: '/user-profile',
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
