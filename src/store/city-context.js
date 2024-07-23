import React from "react";

const CityContext = React.createContext({
  cities: [],
  addCity: (city) => {},
  removeCity: (id) => {},
});

export default CityContext;