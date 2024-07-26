import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import CardCity from "../../components/CardCity/CardCity";
import CityContext from "../../store/city-context";

const MyCitiesPage = () => {
  const { cities } = useContext(CityContext);
  console.log(cities);
  return (
      <Container sx={{padding: 3}}>
          <Typography component="h2" variant="h2" sx={{textAlign: 'center'}}>My Cities</Typography>
          <Box sx={{display: 'grid', gap: 2, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', padding: 2}}>

      {cities.map((city) => (

        <CardCity key={city.city_name} city={city} />
      ))}
      </Box>
    </Container>
  );
};

export default MyCitiesPage;
