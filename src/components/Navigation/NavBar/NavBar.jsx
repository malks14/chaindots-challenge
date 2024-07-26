import React, { useContext, useState } from "react";
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../../store/auth-context";

const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const navigate = useNavigate();
  
  const drawerOpenHandler = () => {
    setIsOpenDrawer(true);
  };

  const drawerCloseHandler = () => {
    setIsOpenDrawer(false);
  };

  const logoutHandler = () => {
    authCtx.logout(); // Assuming your context has a logout function
    navigate("/"); // Redirect to login page or home page after logout
  };

  const navLinks = [
    { title: "Home", path: "/", icon: <HomeIcon /> },
    ...(!authCtx.isLoggedIn) ?
    [{ title: "Login", path: "/auth/login", icon: <LoginIcon /> }] :
    [
      { title: "My Cities", path: "/city/my-cities", icon: <FavoriteIcon /> },
      { title: "Logout", action: logoutHandler, icon: <LogoutIcon /> },
    ],
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
          <Typography sx={{cursor: 'pointer'}} component="a" onClick={() => navigate('/')}>Chaindots</Typography>
          <Typography component="p">Hello, {authCtx.userName}</Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }} className="navCtn">
            {navLinks.map((navLink) => (
              navLink.action ? (
                <Button
                  key={navLink.title}
                  color="inherit"
                  onClick={navLink.action}
                >
                  {navLink.title}
                </Button>
              ) : (
                <NavLink
                  key={navLink.title}
                  to={navLink.path}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? 'secondary.main' : 'inherit', // Use your color theme or styling here
                  })}
                >
                  <Button
                    color="inherit"
                  >
                    {navLink.title}
                  </Button>
                </NavLink>
              )
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
        sx={{ display: { sm: "block", md: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} drawerCloseHandler={drawerCloseHandler} logoutHandler={logoutHandler}/>
      </Drawer>
    </>
  );
};

export default NavBar;
