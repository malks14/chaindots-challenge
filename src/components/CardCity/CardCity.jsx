import React, { useContext }  from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import WeatherContext from '../../store/cityWeather-context'


const CardCity = () => {
  const {weatherData} = useContext(WeatherContext)
  console.log(weatherData.location);
  return (
    <Card sx={{
      transition: "0.2s",
      "&:hover": {
        transform: "scale(1.05)"
      },
      mt: 5
    }}>
        <CardContent>
            <Typography component="h3" variant='h3' sx={{textAlign: 'center'}}>Ciudad</Typography>
            <p>Temperature:{weatherData.current.temp_c}C</p>
            <p>Description:</p>
            <p>Humidity:</p>
            <p>Wind Speed:</p>
        </CardContent>
        <CardActions>
          <Button>More</Button>
        </CardActions>
    </Card>
  )
}

export default CardCity