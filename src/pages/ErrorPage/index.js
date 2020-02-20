import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ErrorPageWrapper } from "./styles/styles";

function ErrorPage() {
  const { state } = useLocation();

  return (
    <ErrorPageWrapper>
      <center>
        <h1>Something was wrong..</h1>
        <h3>{state ? state.error.message : "The page was not found"}</h3>
        <NavLink to="/" exact>
          <h3>Go to Home</h3>
        </NavLink>
      </center>
    </ErrorPageWrapper>
  );
}

export default ErrorPage;
