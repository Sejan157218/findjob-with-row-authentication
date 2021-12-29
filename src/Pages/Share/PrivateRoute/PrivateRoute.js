import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAllContext from "../../hook/useAllContext";

const PrivateRoute = ({ children }) => {
  const { auth,isloading } = useAllContext();
  let location = useLocation();
  if(isloading){

      return <CircularProgress color="secondary" />
 
  }

  if (!auth.email) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
