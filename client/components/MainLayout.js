import React, { Children } from "react";
import Footer from "./Footer";
import MainNavbar from "./MainNavbar";


const MainLayout = ({ children }) => {
  return (
    <div className="bg-zinc-800">
      <MainNavbar />   
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
