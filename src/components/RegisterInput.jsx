import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

function RegisterInput({ register }) {
  const [name, onNameChangeHandler] = useInput("");
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const [confirmPassword, onConfirmPasswordChangeHandler] = useInput("");

  const onClickButtonRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("Password dan Confirm Password harus sama");
    }

    register({ name, email, password });
  };

  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={onNameChangeHandler}
      />
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
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={onConfirmPasswordChangeHandler}
      />
      <button type="button" onClick={onClickButtonRegister}>
        Register
      </button>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
