import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar: React.FC = () => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="navbar-link">Mi App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/login" className="navbar-link">Acceder</Link>
            </div>
        </nav>
    );
}

export default NavBar;
