import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import CityContext from "../../store/city-context";
import AlertComponent from "../AlertComponent/AlertComponent";

const CardCity = ({ city }) => {
  const cityCtx = useContext(CityContext);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const addCityFav = () => {
    const cityName = city.location.name.trim().toLowerCase();
    if (
      cityCtx.cities.some(
        (city) => city.city_name.trim().toLowerCase() === cityName
      )
    ) {
      return setError("You already added this city to your favorites!");
    }

    cityCtx.addCity({
      city_name: cityName,
      city_temp: city.current.temp_c,
      city_condition: city.current.condition.text,
      city_condition_icon: city.current.condition.icon,
      city_humidity: city.current.humidity,
      city_wind_speed: city.current.gust_kph,
    });
    setIsOpen(true);
  };

  if (!city) {
    return <p>No data</p>;
  }

  const handleCityForecast = () => {
    const cityNameForecast = city.location?.name || city.city_name
    console.log(cityNameForecast);
    navigate(`/city/${cityNameForecast}`);
  };

  return (
    <>
      <Card
        key={city.location?.name||city.city_name}
        sx={{
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
          mt: 5,
        }}
      >
        <CardContent>
          <Typography component="h3" variant="h3" sx={{ textAlign: "center" }}>
            {city.location?.name||city.city_name.toUpperCase()}
          </Typography>
          <p><strong>Temperature</strong>: {city.current?.temp_c||city.city_temp}°C</p>
          <p><strong>Description:</strong> {city.current?.condition.text||city.city_condition}</p>
          <img
            src={city.current?.condition.icon||city.city_condition_icon}
            alt={city.current?.condition.text||city.city_condition}
          />
          <p><strong>Humidity:</strong> {city.current?.humidity||city.city_humidity}%</p>
          <p><strong>Wind Speed:</strong> {city.current?.gust_kph||city.city_wind_speed} km/h</p>
        </CardContent>
        <CardActions>
          <Button onClick={handleCityForecast}>
            Forecast
          </Button>
          <Button onClick={() => addCityFav(city)}>
            <StarIcon />
          </Button>
        </CardActions>
        {error && <p>{error}</p>}
      </Card>

      <AlertComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        alertText="City added successfully"
        alertType="success"
      />
    </>
  );
};

export default CardCity;
