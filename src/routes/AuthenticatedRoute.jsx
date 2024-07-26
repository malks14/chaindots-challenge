import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const AuthenticatedRoute = ({ element }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? element : <Navigate to="/auth/login" />;
};

export default AuthenticatedRoute;
