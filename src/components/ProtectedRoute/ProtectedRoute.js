import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function ProtectedRoute({ component: Component, ...props}) {
  return props.isLoading ? <Preloader /> : props.loggedIn ? <Component { ...props } /> : < Navigate replace to="/" />
}

export default ProtectedRoute;