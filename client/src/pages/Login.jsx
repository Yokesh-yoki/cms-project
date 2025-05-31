import React, { useState } from "react";
import Swal from "sweetalert2";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic, e.g., API call
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
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm border border-indigo-100">
        <h1 className="text-3xl font-bold text-indigo-900 mb-2 text-center">
          Login
        </h1>
        <h2 className="text-lg font-medium text-indigo-700 mb-1 text-center">
          Welcome Back!
        </h2>
        <form onSubmit={HandleSubmit} className="w-full space-y-4">
          <div>
            <label
              className="block text-indigo-700 font-medium mb-1"
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
              className="p-2 border border-indigo-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              autoComplete="username"
            />
          </div>
          <div>
            <label
              className="block text-indigo-700 font-medium mb-1"
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
              className="p-2 border border-indigo-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-700 text-white rounded shadow hover:bg-indigo-800 transition font-semibold w-full text-base"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
