import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="bg-zinc-800 w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
