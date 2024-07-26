import React, { useEffect, useState } from "react";
import CardForecast from "../../components/CardForecast/CardForecast";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

const CityForecastPage = () => {
  const { city } = useParams();
  const [forecast, setForecast] = useState([]);

  console.log(city);

  useEffect(() => {
    const fetchCityForecast = async () => {
      const fetchedCityForecast = await fetch(
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=5`,
        {
          headers: {
            'x-rapidapi-key': `${import.meta.env.VITE_RAPIDAPI_KEY}`,
            'x-rapidapi-host': `${import.meta.env.VITE_RAPIDAPI_HOST}`
          },
        }
      );
      const response = await fetchedCityForecast.json();
      setForecast(response);
    };
    fetchCityForecast();
  }, [city]);

  if (!forecast) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <CardForecast forecast={forecast} />
    </Container>
  );
};

export default CityForecastPage;
