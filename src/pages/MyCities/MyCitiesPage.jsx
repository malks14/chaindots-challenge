import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import CardCity from "../../components/CardCity/CardCity";
import CityContext from "../../store/city-context";

const MyCitiesPage = () => {
  const { cities } = useContext(CityContext);

  return (
    <Container sx={{ padding: 3 }}>
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center' }}>
        My Cities
      </Typography>
      {cities.length === 0 &&       <Typography component="h2" variant="h3" sx={{ textAlign: 'center', mt: 3 }}>
        Start adding favorite cities!
      </Typography>}
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          padding: 2,
        }}
      >
        {cities.length === 0 ? "" : (
          cities.map((city) => (
            <CardCity key={city.city_name} city={city} />
          ))
        )}
      </Box>
    </Container>
  );
};

export default MyCitiesPage;
