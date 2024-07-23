import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const AuthNavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          component={NavLink}
          to="/"
          color="inherit"
        >
          Chaindots
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AuthNavBar;
