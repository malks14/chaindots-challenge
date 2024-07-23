import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

import CardCity from "./components/CardCity/CardCity";
import NavBar from "./components/Navigation/NavBar/NavBar";
import routes from "./routes/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
