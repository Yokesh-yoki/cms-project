import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import BasicLayouts from "../layouts/BasicLayouts";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import DashboardLayouts from "../layouts/DashboardLayouts";
import Intro from "../pages/Dashboard/Intro";
import TodoList from "../pages/Dashboard/TodoList";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoutes from "./PrivateRoutes";
import Counter from "../pages/Dashboard/Counter";
import StopWatch from "../pages/Dashboard/StopWatch";
import Calculator from "../pages/Dashboard/Calculator";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <DashboardLayouts />
          </PrivateRoutes>
        }
      >
        <Route path="/dashboard/intro" element={<Intro />} />
        <Route path="/dashboard/todolist" element={<TodoList />} />
        <Route path="/dashboard/counter" element={<Counter />} />
        <Route path="/dashboard/stopwatch" element={<StopWatch />} />
        <Route path="/dashboard/calc" element={<Calculator />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
