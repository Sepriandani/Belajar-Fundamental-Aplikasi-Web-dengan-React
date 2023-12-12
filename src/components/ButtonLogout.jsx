import React from "react";
import { FiLogOut } from "react-icons/fi";
import PropTypes from "prop-types";

function ButtonLogout({ logout, name }) {
  return (
    <button className="button-logout" type="button" onClick={logout}>
      <FiLogOut /> {name}
    </button>
  );
}

ButtonLogout.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ButtonLogout;
