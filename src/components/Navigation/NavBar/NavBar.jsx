import { useState, useContext } from "react";
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import { useNavigate } from "react-router-dom";


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
    authCtx.logout();
    navigate('/');
  };

  const navLinks = [
    { title: "Home", path: "/", icon: <HomeIcon /> },
    ...(!authCtx.isLoggedIn) ?
    [{ title: "Login", path: "/auth/login", icon: <LoginIcon /> }] :
    [{title: "My Cities", path: "city/my-cities", icon: <FavoriteIcon />}],
  ];
  return (
    <>
      <AppBar position="static">
        <Toolbar component="nav" sx={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
          <Typography component="a" onClick={() => navigate('/')}>Chaindots</Typography>
          {authCtx.isLoggedIn && (<Typography component="p">Hello, {authCtx.userName}</Typography>)}
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
              {authCtx.isLoggedIn && (
              <Button
                color="inherit"
                onClick={logoutHandler}
              > Logout
              </Button>
            )}
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
        <NavListDrawer navLinks={navLinks} drawerCloseHandler={drawerCloseHandler} logoutHandler={logoutHandler}/>
      </Drawer>
    </>
  );
};

export default NavBar;
