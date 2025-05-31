import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

function PrivateRoutes({ children }) {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);
  return children;
}

export default PrivateRoutes;
