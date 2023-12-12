import React, { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import ThemeContext from "../contexts/ThemeContext";

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="toggle-theme" type="button" onClick={toggleTheme}>
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
}

export default ToggleTheme;