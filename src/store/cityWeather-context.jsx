import React, { useState, useEffect, createContext } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'faadcbaa11mshf995abef058b3f3p1f7bdcjsnd011b07b123b',
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeather, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
