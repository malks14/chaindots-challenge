import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import CityFavDetailCard from "../../components/CityFavDetailCard/CityFavDetailCard";

const CityFavDetailPage = () => {
  const [cityFavDetail, setCityFavDetail] = useState([]);
  const { cityFav } = useParams();
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCityDetails = async () => {
      if (!cityFav) return;
      try {
        const response = await fetch(
          `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityFav}`,
          {
            headers: {
              "x-rapidapi-key": `${import.meta.env.VITE_RAPIDAPI_KEY}`,
              "x-rapidapi-host": `${import.meta.env.VITE_RAPIDAPI_HOST}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();

        setCityFavDetail([data]);
      } catch (err) {
        setError(true)
      }
    };
    fetchCityDetails();
  }, [cityFav]);
  return (
    <Container maxWidth="l" sx={{padding: '1rem'}}>
        <Typography component="h1" variant="h2" align="center">Country Fav Details</Typography>
      <CityFavDetailCard cityFav={cityFavDetail} />
      {error &&  <Typography color="error">Something went wrong</Typography>}
    </Container>
  );
};

export default CityFavDetailPage;
