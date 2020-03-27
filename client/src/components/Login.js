import React, { useRef } from "react";
import axios from "axios";

import { BASE_API, TOKEN_STORAGE_KEY } from "../constants";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const usernameField = useRef();
  const passwordField = useRef();

  const handleLogin = ev => {
    ev.preventDefault();
    const username = usernameField.current.value;
    const password = passwordField.current.value;
    axios.post(`${BASE_API}/login`, { username, password }).then(res => {
      window.localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(res.data.payload));
      props.history.push("/bubbles");
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Welcome to the Bubble App!</h1>
      <label>
        Username: <input name="username" type="text" ref={usernameField} />
      </label>
      <br />
      <label>
        Password: <input name="password" type="password" ref={passwordField} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Login;
