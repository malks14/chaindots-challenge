import React, { useEffect, useState, useContext }  from "react";
import { Container, Typography } from "@mui/material";
import CardCity from "../../components/CardCity/CardCity";
import SearchBar from "../../components/SearchBar/SearchBar";
import { CircularProgress } from "@mui/material";


const HomePage = () => {
  const [cities, setCities] = useState([]);
  const [userInput, setUserInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")


  useEffect(() => {
    const fetchWeather = async () => {
      if (!userInput) return;
      setError(false);
      setIsLoading(true);
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

        setIsLoading(false);
        setError(false);
        setCities([data]);
      } catch (err) {
        setIsLoading(false);
        setError("Please, try again!");
      }
    };
    fetchWeather();
  }, [userInput])

  return (
    <Container maxWidth="xs" sx={{ mt: 2, padding: '1rem', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <h1>Chaindots - WeatherApp</h1>
      <SearchBar setUserInput={setUserInput}/>
      {isLoading ? <CircularProgress /> : cities.map((city) => (
        <CardCity key={city.location.name} city={city} /> 
      ))}
      {error && <Typography color="error">{error}</Typography>}
    </Container>
  );
};

export default HomePage;


