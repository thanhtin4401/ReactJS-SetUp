import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Hooks";
import CookieSetUp from "../../Services/CookieService";

const RequestPage = ({ children }) => {
  const auth = useAppSelector((state) => state.auth.isLoggedIn);
  const accessToken =
    useAppSelector((state) => state.auth.accessToken) ===
    CookieSetUp.get("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (auth && accessToken) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [auth, accessToken, navigate]);
  return <>{children}</>;
};

export default RequestPage;
