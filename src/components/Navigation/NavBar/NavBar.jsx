import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/", icon: <HomeIcon /> },
  { title: "Login", path: "/auth/login", icon: <LoginIcon /> },
  { title: "Logout", path: "/test", icon: <LogoutIcon /> },
];

const NavBar = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const drawerOpenHandler = () => {
    setIsOpenDrawer(true);
  };

  const drawerCloseHandler = () => {
    setIsOpenDrawer(false);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Chaindots</Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }} className="navCtn">
            {navLinks.map((navLink) => (
              <Button
                color="inherit"
                component={NavLink}
                key={navLink.title}
                to={navLink.path}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {navLink.title}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            size="large"
            onClick={drawerOpenHandler}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={isOpenDrawer}
        anchor="right"
        onClose={drawerCloseHandler}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} drawerCloseHandler={drawerCloseHandler}/>
      </Drawer>
    </>
  );
};

export default NavBar;
