import React, { useContext, useState } from "react";
import CityContext from "../../store/city-context";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../AlertComponent/AlertComponent";

const CityFavDetailCard = ({ cityFav }) => {
    const [isOpen, setIsOpen] = useState(false);
  const cityCtx = useContext(CityContext);
  const navigate = useNavigate();

  const removeCityFav = (cityName) => {
    cityCtx.removeCity(cityName);
    setIsOpen(true)
    navigate("/city/my-cities")
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {cityFav.map((city) => (
        <Card
          key={city.location.name}
          sx={{
            mt: 5,
            width: "400px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Typography
              component="h3"
              variant="h3"
              sx={{ textAlign: "center" }}
            >
              {city.location.name}, {city.location.country}
            </Typography>
            <CardMedia
              component="img"
              image={city.current.condition.icon}
              sx={{ height: "auto", width: 64, textAlign: "center" }}
              alt={city.current.condition.text}
            />
            <strong>Condition: {city.current.condition.text}</strong>
            <p>
              <strong>Local time</strong>:{" "}
              {city.location.localtime.split(" ")[1]}
            </p>
            <p>
              <strong>Temperature</strong>: {city.current.temp_c}°C
            </p>
            <p>
              <strong>Feels like</strong>: {city.current.feelslike_c}°C
            </p>
            <p></p>
            <p>
              <strong>Humidity: {city.current.humidity}</strong>%
            </p>
            <p>
              <strong>Wind Speed: {city.current.wind_kph}</strong>km/h
            </p>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Button
                onClick={() =>
                  navigate(`/city/${city.location.name.trim().toLowerCase()}`)
                }
              >
                Forecast
              </Button>

              <Button
                onClick={() =>
                  removeCityFav(city.location.name.trim().toLowerCase())
                }
              >
                <DeleteIcon />
              </Button>
            </Box>
          </CardActions>
        </Card>
      ))}

      <AlertComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        alertText="City removed successfully"
        alertType="success"
      />
    </Box>
  );
};

export default CityFavDetailCard;
