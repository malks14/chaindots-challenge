import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import React from "react";

const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
  
    localDate.setDate(localDate.getDate() + 1);

    const options = { weekday: "long", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(localDate);
  };

const CardForecast = ({ forecast: { forecast, current } }) => {

  const renderForecast = () => {
    return forecast?.forecastday.map((item) => (
      <Card key={item.date}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: 250, minHeight: '(400px, 600px)'}}>
          <Typography component="h3" variant="h4">{formatDate(item.date)}</Typography>
          <CardMedia
            component="img"
            image={item.day.condition.icon}
            sx={{ height: "auto", width: 64 }}
            alt={item.day.condition.text}
          />
          <p><strong>Temperature:</strong> {item.day.avgtemp_c}°</p>
          <p><strong>Condition:</strong> {item.day.condition.text}</p>
          <p><strong>Humidity:</strong> {item.day.avghumidity}%</p>
          <p><strong>Wind Speed:</strong> {item.day.maxwind_kph} km/h</p>
        </CardContent>
      </Card>
    ));
  };

  const renderCurrent = () => {
    return (
      <Card>
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: 250, minHeight: '(400px, 600px)'}}>
          <Typography component="h3" variant="h4">Now</Typography>
          <CardMedia
            component="img"
            image={current.condition.icon}
            sx={{ height: "auto", width: 64 }}
            alt={current.condition.text}
          />
          <p><strong>Temperature:</strong> {current.temp_c}°</p>
          <p><strong>Condition:</strong> {current.condition.text}</p>
          <p><strong>Humidity:</strong> {current.humidity}%</p>
          <p><strong>Wind Speed:</strong> {current.wind_kph} km/h</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container
      sx={{
        display: "flex",
        gap: 4,
        flexWrap: "wrap",
        justifyContent: 'center'
      }}
    >
        {current && renderCurrent()}
      {forecast?.forecastday && renderForecast()}
    </Container>
  );
};

export default CardForecast;
