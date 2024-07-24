import React, { useContext }  from "react";
import { Container } from "@mui/material";
import CardCity from "../../components/CardCity/CardCity";
import SearchBar from "../../components/SearchBar/SearchBar";


const HomePage = () => {

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <h1>Chaindots - WeatherApp</h1>
      <SearchBar />
      {/* <SearchBar city={setCity} /> */}
      <CardCity />
    </Container>
  );
};

export default HomePage;


  // useEffect(() => {
  //   const fetchCity = async () => {
  //     const fetchedCity = await fetch('https://open-weather13.p.rapidapi.com/city/tokyo/EN', {
  //       headers: {
  //         'x-rapidapi-key': 'faadcbaa11mshf995abef058b3f3p1f7bdcjsnd011b07b123b',
  //         'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  //       }
  //     });
  //     const response = await fetchedCity.json();
  //     console.log(response);
  //   }
  //   fetchCity();
  // }, [])