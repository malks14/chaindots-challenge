import React, {useState, useContext} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress } from "@mui/material";
// import WeatherContext from "../../store/cityWeather-context";


const SearchBar = ({setUserInput}) => {
    // const {fetchWeather} = useContext(WeatherContext)

    const [formCityData, setFormCityData] = useState("");
    const [error, setError] = useState({
        isError: false,
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const validateCity = (city) => {
        const regexCity = /^[a-zA-Z]+$/;
        return regexCity.test(city);
    };

    const onFormFieldChange =(event) => {
        setFormCityData(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formCityData)
        setUserInput(formCityData)
        // fetchWeather(formCityData)
        // setIsLoading(true);
        // console.log(formCityData)
        // if (!validateCity(formCityData)) {
        //     setError({
        //         isError: true,
        //         message: "Only alphabetical characters can be used"
        //     })
        // }
        // setIsLoading(false);
    };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField id="city" label="City" variant="outlined" required error={error.isError} helperText={error.message} value={formCityData} onChange={onFormFieldChange}/>
      {/* <Button type="submit" variant="contained">Submit</Button> */}
      {/* {isLoading && <CircularProgress />} */}
    </Box>
  );
};

export default SearchBar;
