import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse -z-10" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse -z-10" />

        <div className="text-indigo-900 text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-2xl tracking-tight text-center transition-all duration-300">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Application
          </span>
        </div>

        <Link
          to={"/login"}
          className="bg-gradient-to-r from-indigo-900 via-purple-600 to-pink-500 hover:from-indigo-700 hover:to-pink-700 text-white px-8 py-4 rounded-full shadow-lg font-bold text-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
