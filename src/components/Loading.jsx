import React, { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ThemeContext from "../contexts/ThemeContext";

function Loading() {
  const { theme } = useContext(ThemeContext);
  const [color, setColor] = useState("#FFF");

  useEffect(() => {
    theme === "light" ? setColor("#000") : setColor("#FFF");
  }, [theme]);

  return (
    <div className="loading">
      <ClipLoader color={color} size={100} />
    </div>
  );
}

export default Loading;
