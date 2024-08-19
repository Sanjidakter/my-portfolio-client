// src/components/Layout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
