import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import CityContext from "../../store/city-context";
import AlertComponent from "../AlertComponent/AlertComponent";
import DeleteIcon from "@mui/icons-material/Delete";

const CardCity = ({ city }) => {
  const cityCtx = useContext(CityContext);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const cityName = city.location?.name.trim().toLowerCase() || city.city_name;

  const addCityFav = () => {
    if (cityCtx.isCityAdded(cityName)) {
      cityCtx.removeCity(cityName);
      setError("City already added to list");
    } else {
      cityCtx.addCity({
        city_name: cityName,
        city_temp: city.current.temp_c,
        city_condition: city.current.condition.text,
        city_condition_icon: city.current.condition.icon,
        city_humidity: city.current.humidity,
        city_wind_speed: city.current.gust_kph,
      });
    }

    setIsOpen(true);
  };

  if (!city) {
    return <p>No data</p>;
  }

  const handleCityForecast = () => {
    navigate(`/city/${cityName}`);
  };

  return (
    <>
      <Card
        key={city.location?.name || city.city_name}
        sx={{
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
          mt: 5,
        }}
      >
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
          <Typography component="h3" variant="h3" sx={{ textAlign: "center" }}>
            {city.location?.name || city.city_name.toUpperCase()}
          </Typography>
          <CardMedia
            component="img"
            image={city.current?.condition.icon || city.city_condition_icon}
            sx={{ height: "auto", width: 64, textAlign: "center" }}
            alt={city.current?.condition.text || city.city_condition}
          />
          <p>
            <strong>Temperature</strong>:{" "}
            {city.current?.temp_c || city.city_temp}°C
          </p>
          <p>
            <strong>Condition:</strong>{" "}
            {city.current?.condition.text || city.city_condition}
          </p>
          <p>
            <strong>Humidity:</strong>{" "}
            {city.current?.humidity || city.city_humidity}%
          </p>
          <p>
            <strong>Wind Speed:</strong>{" "}
            {city.current?.gust_kph || city.city_wind_speed}km/h
          </p>
        </CardContent>
        <CardActions>
          <Box sx={{ display: "flex", justifyContent: "space-around", width: '100%' }}>
            <Button onClick={handleCityForecast}>Forecast</Button>

            <Button onClick={() => addCityFav(city)} data-testid="button">
              {cityCtx.isCityAdded(cityName) ? <DeleteIcon /> : <StarIcon />}
            </Button>
          </Box>
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
