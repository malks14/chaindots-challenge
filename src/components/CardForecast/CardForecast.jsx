import { Card, CardContent, CardMedia, Container } from "@mui/material";
import React from "react";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = { weekday: "long", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const CardForecast = ({ forecast: { forecast } }) => {
  console.log(forecast?.forecastday);
  if (!forecast?.forecastday) {
    return <p>No data</p>;
  }
  return (
    <Container
      sx={{
        display: "flex",
        gap: 4,
        flexWrap: "wrap",
        justifyContent: "flex-end",
      }}
    >
      {forecast?.forecastday?.map((item) => (
        <Card key={item.date}>
          <CardContent>
            <p>Date: {formatDate(item.date)}</p>
            <CardMedia
              component="img"
              image={item.day.condition.icon}
              sx={{ height: "auto", width: 64 }}
              alt={item.day.condition.text}
            />
            {/* <img src={item.day.condition.icon} alt={item.day.condition.text} /> */}
            <p>Tempe:{item.day.avgtemp_c}</p>
            <p>description: {item.day.condition.text}</p>
            <p>humidity: {item.day.avghumidity}</p>
            <p>wind Speed: {item.day.maxwind_kph}</p>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default CardForecast;
