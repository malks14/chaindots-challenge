import React, { useReducer } from "react";

const CityContext = React.createContext({
  cities: [],
  addCity: (city) => {},
});

const defaultCityState = {
  cities: [],
};

const cityReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        cities: [...state.cities, action.city],
      };
    default:
      return state;
  }
};

export const CityContextProvider = ({ children }) => {
  const [cityState, dispatchCityAction] = useReducer(cityReducer, defaultCityState);

  const addCityHandler = (city) => {
    dispatchCityAction({ type: "ADD_CITY", city });
  };

  const cityContext = {
    cities: cityState.cities,
    addCity: addCityHandler,
  };

  return (
    <CityContext.Provider value={cityContext}>
      {children}
    </CityContext.Provider>
  );
};

export default CityContext;
