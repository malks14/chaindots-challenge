import React, { useState, createContext } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

  


  return (
    <WeatherContext.Provider >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
