import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

function Navigation() {
  const { selectLanguage } = useContext(LocaleContext);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/archives">
            {selectLanguage({ id: "Terarsip", en: "Archived" })}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
