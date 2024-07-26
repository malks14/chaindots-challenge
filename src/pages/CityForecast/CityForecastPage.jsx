import React, { useEffect, useState } from "react";
import CardForecast from "../../components/CardForecast/CardForecast";
import { useParams } from "react-router-dom";
import { CircularProgress, Container, Typography } from "@mui/material";

const CityForecastPage = () => {
  const { city } = useParams();
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCityForecast = async () => {
      try {
        const fetchedCityForecast = await fetch(
          `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=5`,
          {
            headers: {
              "x-rapidapi-key": `${import.meta.env.VITE_RAPIDAPI_KEY}`,
              "x-rapidapi-host": `${import.meta.env.VITE_RAPIDAPI_HOST}`,
            },
          }
        );
        if (!fetchedCityForecast.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const response = await fetchedCityForecast.json();
        setForecast(response);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCityForecast();
  }, [city]);

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Typography align="center" component="h1" variant="h3">
        Forecast - {city.toUpperCase()}
      </Typography>
      {isLoading ? (
        <CircularProgress /> 
      ) : (
        <CardForecast forecast={forecast} />
      )}
      {error && <Typography color="error">Something went wrong</Typography>}
    </Container>
  );
};

export default CityForecastPage;
