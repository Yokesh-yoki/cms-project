import React, { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      Swal.fire({
        title: "Login Successful",
        text: "Welcome back!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please enter valid credentials.",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] ">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm flex flex-col items-center border border-indigo-100">
        <h1 className="text-3xl font-extrabold text-indigo-900 mb-2 tracking-tight drop-shadow">
          Sign Up
        </h1>
        <p className="text-gray-500 mb-6 text-base">
          Create your account below
        </p>
        <form onSubmit={HandleSubmit} className="w-full flex flex-col gap-4">
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              autoComplete="email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-gradient-to-r from-indigo-700 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:from-indigo-800 hover:to-purple-700 transition-all duration-200 w-full text-base"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-indigo-700 font-semibold hover:underline"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
