import React, {useReducer} from "react";

const CityContext = React.createContext({
  cities: [],
  addCity: (city) => {},
  // removeCity: (id) => {},
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
    // case "REMOVE_CITY":
    //   return {
    //     cities: [...state.cities.filter((city) => city.id !== action.id)],
    //   };
    default:
      return state;
  }
};

export const CityContextProvider = ({children}) => {

  const [cityState, dispatchCityAction] = useReducer(
    cityReducer,
    defaultCityState
  );

  const addCityHandler = (city) => {
    dispatchCityAction({ type: "ADD_CITY", city });
  };

  // const removeCityHandler = (id) => {
  //   dispatchCityAction({ type: "REMOVE_CITY", id: id });
  // };

  const cityContext = {
    cities: cityState.cities,
    addCity: addCityHandler,
    // removeCity: removeCityHandler,
  };

  return (
    <CityContext.Provider value={cityContext}>
      {children}
    </CityContext.Provider>
  );
};

export default CityContextProvider;