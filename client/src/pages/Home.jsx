import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[84vh] px-4 relative overflow-hidden ">
        <div className="text-gray-900 text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-2xl tracking-tight text-center transition-all duration-300">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Application
          </span>
        </div>

        <Link
          to={"/login"}
          className="bg-gradient-to-r from-gray-900 via-white-600 to-gray-500 hover:from-gray-700 hover:to-gray-500 text-white px-8 py-4 rounded-full shadow-lg font-bold text-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
