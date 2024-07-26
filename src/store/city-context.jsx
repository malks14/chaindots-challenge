import React, { useReducer, useEffect } from "react";

const CityContext = React.createContext({
  cities: [],
  addCity: (city) => {},
  removeCity: (cityName) => {},
  isCityAdded: (cityName) => false,
});

const defaultCityState = {
  cities: JSON.parse(localStorage.getItem('cities')) || [],
};

const cityReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        cities: [...state.cities, action.city],
      };
      case "REMOVE_CITY":
        return {
          cities: [...state.cities.filter((city) => city.city_name !== action.cityName)],
        };
    default:
      return state;
  }
};

export const CityContextProvider = ({ children }) => {
  const [cityState, dispatchCityAction] = useReducer(cityReducer, defaultCityState);

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cityState.cities));
  }, [cityState.cities]);

  const addCityHandler = (city) => {
    dispatchCityAction({ type: "ADD_CITY", city });
  };

  const removeCityHandler = (cityName) => {
    dispatchCityAction({ type: "REMOVE_CITY", cityName });
  };

  const isCityAdded = (cityName) => {
    return cityState.cities.some(city => city.city_name === cityName);
  };

  const cityContext = {
    cities: cityState.cities,
    addCity: addCityHandler,
    removeCity: removeCityHandler,
    isCityAdded,
  };

  return (
    <CityContext.Provider value={cityContext}>
      {children}
    </CityContext.Provider>
  );
};

export default CityContext;
