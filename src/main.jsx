import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./menu.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  </React.StrictMode>
);
