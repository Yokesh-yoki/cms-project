import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const HandleSubmit = (e) => {
    e.preventDefault();
    login(email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[84vh] bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Login
        </h1>
        <h2 className="text-lg font-medium text-gray-700 mb-1 text-center">
          Welcome Back!
        </h2>
        <form onSubmit={HandleSubmit} className="w-full space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              autoComplete="username"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
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
              className="p-2 border border-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-gray-700 text-white rounded shadow hover:bg-gray-800 transition font-semibold w-full text-base"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
