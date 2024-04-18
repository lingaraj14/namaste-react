import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("error:", error);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h3>Somthing went wrong!!</h3>
      <p>{`${error.status}: ${error.statusText}`}</p>
    </div>
  );
};

export default Error;
