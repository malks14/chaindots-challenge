import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { AuthContextProvider } from "./store/auth-context";
import CityContextProvider from "./store/city-context";
import { WeatherProvider } from "./store/cityWeather-context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CityContextProvider>
        <WeatherProvider>
          <CssBaseline />
          <App />
        </WeatherProvider>
      </CityContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
