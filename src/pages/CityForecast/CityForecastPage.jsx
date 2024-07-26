import React, { useEffect, useState, useContext } from "react";
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
        console.log(response);
        setForecast(response);
      } catch (error) {
        setError("Something went wrong. Try again");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCityForecast();
  }, [city]);

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Typography align="center" component="h2" variant="h3">
        Forecast - {city.toUpperCase()}
      </Typography>
      {isLoading ? (
        <CircularProgress /> 
      ) : (
        <CardForecast forecast={forecast} />
      )}
      {error && <Typography color="error">{error}</Typography>}
    </Container>
  );
};

export default CityForecastPage;
