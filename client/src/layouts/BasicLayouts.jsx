import React from "react";
import { Link, Outlet } from "react-router";
import Login from "../pages/Login";

function BasicLayouts() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className=" z-10 shadow-lg bg-gradient-to-r from-indigo-900 via-purple-600 to-pink-500 text-white py-5 flex flex-col sm:flex-row items-center justify-between px-8 ">
        <div className="text-3xl font-bold flex items-center gap-3 tracking-tight">
          <span role="img" aria-label="notes" className="text-4xl">
            <Link to={"/"}>👨‍💻</Link>
          </span>
          <span className="hover:text-indigo-300 transition-colors duration-200">
            My app
          </span>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-4">
          <Link
            to={"/login"}
            className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-indigo-600 hover:to-indigo-400 border-2 border-indigo-700 text-white px-5 py-2 rounded-lg font-medium shadow transition-all duration-200"
          >
            log-in
          </Link>
          <Link
            to={"/signup"}
            className="bg-gradient-to-r from-white to-indigo-100 hover:from-indigo-50 hover:to-indigo-200 text-indigo-900 px-5 py-2 rounded-lg font-medium border-2 border-indigo-200 shadow transition-all duration-200"
          >
            sign-up
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gradient-to-r from-indigo-100 via-white to-indigo-200 text-indigo-700 text-xs text-center border-t py-3 tracking-wide">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
}

export default BasicLayouts;
