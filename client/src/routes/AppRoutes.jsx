import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import BasicLayouts from "../layouts/BasicLayouts";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
