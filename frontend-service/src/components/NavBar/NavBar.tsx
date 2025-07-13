import React from "react";
import './NavBar.css'
const NavBar: React.FC = () => {
    return(
        <nav className="navbar">
            <a href="/">Inicio</a>
            <a href="/login">Acceder</a>
        </nav>
    );
}

export default NavBar;
