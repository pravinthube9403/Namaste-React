import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err=useRouteError();
  console.log(err);
  return (
    <div>
      <h1>oops!</h1>
      <div>Oops! Something went wrong.</div>
      <p>{err.status}: {err.statusText}</p>
    </div>
  );
};

export default Error;
