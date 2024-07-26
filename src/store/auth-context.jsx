import React, { useState } from "react";

const AuthContext = React.createContext({
  userName: "",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState("")

  const userIsLoggedIn = !!token;

  const loginHandler = (token, userName) => {
    setToken(token);
    setUserName(userName)
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    userName,
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;