import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";


const NavListDrawer = ({ navLinks, drawerCloseHandler }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((navLink) => (
            <ListItem disablePadding key={navLink.title}>
              <ListItemButton component={NavLink} to={navLink.path} onClick={drawerCloseHandler}>
                <ListItemIcon>
                  {navLink.icon}
                </ListItemIcon>
                <ListItemText primary={navLink.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
