import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../../Navigation/NavBar/NavBar";
import Footer from "../../Footer/Footer";

const RootMainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="mainBody">
      <NavBar />
      {navigation.state === "loading" && <p>Loading...</p>}
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootMainLayout;
