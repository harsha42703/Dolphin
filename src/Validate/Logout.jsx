import React, { useContext, useEffect } from "react";
import { Authenticate } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const { setAuth } = useContext(Authenticate);
  const navigate = useNavigate();
  useEffect(() => {
    setAuth(false);
    toast.success("Logout Successfully!");
    navigate("/");
  });
  return <></>;
};

export default Logout;
