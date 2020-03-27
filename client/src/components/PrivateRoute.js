import React, { useRef } from "react";
import { Route, Redirect } from "react-router-dom";

import { TOKEN_STORAGE_KEY } from "../constants";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    return <Route component={Component} {...rest} />;
  } else {
    return <Redirect to="/" />;
  }
};

export default PrivateRoute;
