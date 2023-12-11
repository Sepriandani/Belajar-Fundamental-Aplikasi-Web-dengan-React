import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiHome, FiLogOut, FiPlusCircle } from "react-icons/fi";

function Navigation({ logout, name }) {
    return(
        <nav className="navigation">
            <ul>
                <li><Link to="/" ><FiHome /></Link></li>
                <li><Link to="/add" ><FiPlusCircle /></Link></li>
                <li><button onClick={logout} >{ name } <FiLogOut /></button></li>
            </ul>
        </nav>
    )
}

Navigation.propsTypes = {
    logout: PropsTypes.func.isRequired,
    name: PropsTypes.string.isRequired,
}

export default Navigation;