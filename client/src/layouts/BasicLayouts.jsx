import React from "react";
import { Outlet } from "react-router";

function BasicLayouts() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-indigo-800 text-white py-4 shadow-md flex flex-col sm:flex-row items-center justify-between px-6">
        <div className="text-2xl font-semibold flex items-center gap-2">
          <span role="img" aria-label="notes">
            <h2>👨‍💻</h2>
          </span>{" "}
          My app
        </div>
        <div className="mt-3 sm:mt-0 flex gap-3">
          <div className="bg-indigo-800 border-2 text-white px-4 py-2 rounded cursor-pointer">
            <h4>log-in</h4>
          </div>
          <div className="bg-white text-black px-4 py-2 rounded  cursor-pointer">
            <h4>sign-up</h4>
          </div>
        </div>
      </header>
      <main className="bg-white flex-1">
        <Outlet />
      </main>
      <footer className="bg-indigo-100 text-indigo-700 text-xs text-center border-t">
        © {new Date().getFullYear()} Notes App. All rights reserved.
      </footer>
    </div>
  );
}

export default BasicLayouts;
