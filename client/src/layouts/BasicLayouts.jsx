import React from "react";
import { Link, Outlet } from "react-router";
import Login from "../pages/Login";

function BasicLayouts() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className=" z-10 shadow-lg bg-gray-900 text-gray-300 py-5 flex flex-col sm:flex-row items-center justify-between px-8 ">
        <div className="text-3xl font-bold flex items-center gap-3 tracking-tight">
          <span role="img" aria-label="notes" className="text-4xl">
            <Link to={"/"}>👨‍💻</Link>
          </span>
          <span className="hover:text-gray-50 transition-colors duration-200">
            My App
          </span>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-4">
          <Link
            to={"/login"}
            className="bg-gray-900  border-2 border-gray-300 text-gray-300 px-5 py-2 rounded-lg font-medium shadow transition-all duration-200"
          >
            Log-in
          </Link>
          <Link
            to={"/signup"}
            className="bg-gray-100 text-gray-900 px-5 py-2 rounded-lg font-medium border-2 border-gray-300 shadow transition-all duration-200"
          >
            Sign-up
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-gray-300 text-xs text-center border-t py-3 tracking-wide">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
}

export default BasicLayouts;
