import React from "react";
import PropTypes from "prop-types";

function ActionButton({ title, icon, onClick }) {
  return (
    <button className="action" type="button" title={title} onClick={onClick}>
      {icon}
    </button>
  );
}

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;
