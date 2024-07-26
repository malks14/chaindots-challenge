import React from "react";
import { useRouteError } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar/NavBar";
import { Container, Typography } from "@mui/material"; 

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    let title = 'An error occured';
    let message = 'Something went wrong'

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = "Not found"
        message = "Could not find page";
    }

    
  return (
    <>
      <NavBar />
      <main>
        <Container>
          <Typography variant="h1" component="h1" align="center">404</Typography>
          <Typography variant="h2" component="h2" align="center">Page not found</Typography>
        </Container>
      </main>
    </>
  );
};

export default ErrorPage;
