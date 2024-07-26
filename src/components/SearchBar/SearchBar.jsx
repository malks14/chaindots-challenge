import React, {useState, useContext} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


const SearchBar = ({setUserInput}) => {

    const [formCityData, setFormCityData] = useState("");
    const [error, setError] = useState({
        isError: false,
        message: ""
    });

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

    };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      data-testid="search-form"
    >
      <TextField id="city" label="City" variant="outlined" required error={error.isError} helperText={error.message} value={formCityData} onChange={onFormFieldChange}/>
    </Box>
  );
};

export default SearchBar;
