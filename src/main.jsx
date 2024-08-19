import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
