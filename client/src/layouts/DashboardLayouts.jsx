import React from "react";
import { Link, Outlet } from "react-router";

const paths = [
  { path: "/dashboard/intro", text: "Intro" },
  { path: "/dashboard/todolist", text: "TodoList" },
];
function DashboardLayouts(props) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 bg-gray-900 text-white py-8 px-4 flex flex-col gap-6 sticky top-0 h-screen">
        <span className="font-bold text-xl mb-8">DashBoard</span>
        <div className="flex flex-col gap-2 flex-1">
          {paths.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="px-3 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              {item.text.charAt(0).toUpperCase() + item.text.slice(1)}
            </Link>
          ))}
        </div>
        <div className="mt-auto">
          <Link
            to={"/"}
            className="no-underline px-4 py-2 rounded font-medium text-red-500 hover:bg-red-600 hover:text-white transition-colors block"
          >
            Logout
          </Link>
        </div>
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayouts;
