import RootMainLayout from "../components/UI/layout/RootMainLayout";
import RootAuthLayout from "../components/UI/layout/RootAuthLayout";
// import ErrorPage from "../pages/ErrorPage";
// import RootAuthLayout from "../components/UI/Layouts/RootAuthLayout";
// import LoginPage from "../pages/Auth/Login/LoginPage";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/auth/Login/LoginPage";

const routes = [
    {
      path: "/",
      element: <RootMainLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        
        // {
        //   path: "jobOffer/:jobOffer",
        //   element: <JobOfferIdPage />
        // }
      ]
    },
    {path: "/auth", element: <RootAuthLayout />, children: [
      { path: "login", element: <LoginPage /> },
    ]},
    
  ];
  
  export default routes;