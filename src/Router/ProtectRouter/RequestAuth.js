import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Hooks";
import CookieSetUp from "../../Services/CookieService";

const RequestAuth = ({ children }) => {
  const auth = useAppSelector((state) => state.auth.isLoggedIn);
  const accessToken =
    useAppSelector((state) => state.auth.accessToken) ===
    CookieSetUp.get("accessToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth || !accessToken) navigate("/login");
  }, [auth, navigate]);
  return <>{children}</>;
};

export default RequestAuth;
