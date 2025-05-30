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
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gray-100">
      <h1 className="text-6xl font-bold text-indigo-800 mb-4">Login</h1>
      <h2 className="text-2xl font-semibold text-indigo-800 mb-2">
        Welcome Back!
      </h2>
      <p className="text-gray-600 mb-6">
        Please enter your credentials to access your account.
      </p>
      <form onSubmit={HandleSubmit} className="w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-900 text-white rounded-lg shadow hover:bg-indigo-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
