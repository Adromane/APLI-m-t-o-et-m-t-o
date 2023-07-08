import React from "react";
import { Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import Main from "./pages/Main";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/:city/weather" element={<Weather />}/>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
