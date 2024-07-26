import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { AuthContextProvider } from "./store/auth-context";
import {CityContextProvider} from "./store/city-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CityContextProvider>
          <CssBaseline />
          <App />
      </CityContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
