import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

function LoginInput({ login }) {
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");

  const onClickButtonLoginHandler = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={onEmailChangeHandler}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button type="button" onClick={onClickButtonLoginHandler}>
        Login
      </button>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
