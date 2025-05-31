import React, { createContext, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AuthContext = createContext();
function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  function login(email, password) {
    try {
      setIsAuth(true);
      navigate("/dashboard/intro");
      Swal.fire({
        title: "Success",
        text: "Login successful!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Login failed. Please try again.",
        icon: "error",
      });
    }
  }
  function logout() {
    setIsAuth(false);
    setUserEmail(null);
    navigate("/login");
    Swal.fire({
      title: "Logged Out",
      text: "You have been logged out successfully.",
      icon: "info",
    });
  }
  return (
    <AuthContext.Provider
      value={{ login, logout, isAuth, userEmail, setUserEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
