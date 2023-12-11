import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiHome, FiLogOut, FiPlusCircle } from "react-icons/fi";
import { LocaleCustomer } from "../contexts/LocaleContact";

function Navigation({ logout, name }) {
    return(
        <LocaleCustomer>
            {
                ({ locale, toggleLocale }) => {
                    return(
                        <nav className="navigation">
                            <ul>
                                <li><button onClick={toggleLocale} >{locale === "id" ? "en" : "id"}</button></li>
                                <li><Link to="/" ><FiHome /></Link></li>
                                <li><Link to="/add" ><FiPlusCircle /></Link></li>
                                <li><button onClick={logout} >{ name } <FiLogOut /></button></li>
                            </ul>
                        </nav>
                    );
                }
            }
        </LocaleCustomer>
    )
}

Navigation.propsTypes = {
    logout: PropsTypes.func.isRequired,
    name: PropsTypes.string.isRequired,
}

export default Navigation;