import React, { useContext } from "react";
import { SiGoogletranslate } from "react-icons/si";
import LocaleContext from "../contexts/LocaleContext";

function ToggleLocale() {
  const { toggleLocale } = useContext(LocaleContext);

  return (
    <button className="toggle-locale" type="button" onClick={toggleLocale}>
      <SiGoogletranslate />
    </button>
  );
}

export default ToggleLocale;
