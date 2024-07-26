import RootMainLayout from "../components/UI/layout/RootMainLayout";
import RootAuthLayout from "../components/UI/layout/RootAuthLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/auth/Login/LoginPage";
import CityForecastPage from "../pages/CityForecast/CityForecastPage";
import MyCitiesPage from "../pages/MyCities/MyCitiesPage";
import CityFavDetailPage from "../pages/CityFavDetailPage/CityFavDetailPage";

const routes = [
  {
    path: "/",
    element: <RootMainLayout />,
      errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "city/:city",
        element: <CityForecastPage />,
      },
      {
        path: "city/my-cities",
        element: <MyCitiesPage />,
      },
      {path: 'city/my-cities/:cityFav', element: <CityFavDetailPage />}
    ],
  },
  {
    path: "/auth",
    element: <RootAuthLayout />,
    children: [{ path: "login", element: <LoginPage /> }],
  },
];

export default routes;
