import React, { useEffect, useState, useContext }  from "react";
import { Container } from "@mui/material";
import CardCity from "../../components/CardCity/CardCity";
import SearchBar from "../../components/SearchBar/SearchBar";
import CityContext from "../../store/city-context";


const HomePage = () => {
  const [cities, setCities] = useState([]);
  const [userInput, setUserInput] = useState('')
  const cityCtx = useContext(CityContext)
  console.log(cityCtx);

  useEffect(() => {
    const fetchWeather = async () => {

      try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${userInput}`, {
          headers: {
            'x-rapidapi-key': `${import.meta.env.VITE_RAPIDAPI_KEY}`,
            'x-rapidapi-host': `${import.meta.env.VITE_RAPIDAPI_HOST}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();

        setCities([data]);
      } catch (err) {
        // setError(err.message);
      }
    };
    fetchWeather()
  }, [userInput])

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <h1>Chaindots - WeatherApp</h1>
      <SearchBar setUserInput={setUserInput}/>
      {cities.map((city) => (
        <CardCity key={city.location.name} city={city} />
      ))}
    </Container>
  );
};

export default HomePage;


