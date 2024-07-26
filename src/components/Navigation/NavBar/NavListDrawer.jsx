import React, { useContext } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import LogoutIcon from "@mui/icons-material/Logout";

const NavListDrawer = ({ navLinks, drawerCloseHandler, logoutHandler }) => {
  const authCtx = useContext(AuthContext);
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((navLink) => (
            <ListItem disablePadding key={navLink.title}>
              <ListItemButton
                component={NavLink}
                to={navLink.path}
                onClick={drawerCloseHandler}
              >
                <ListItemIcon>{navLink.icon}</ListItemIcon>
                <ListItemText primary={navLink.title} />
              </ListItemButton>
            </ListItem>
          ))}
          {authCtx.isLoggedIn && (
            <ListItem disablePadding>
              <ListItemButton onClick={logoutHandler}>
                <ListItemIcon >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
