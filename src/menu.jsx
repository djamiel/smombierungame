import { Route, Routes, Link } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import React from "react";
import Room from "./Room";
import Wating from "./Wating";

export default function menu() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/wating" element={<Wating />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </div>
  );
}
