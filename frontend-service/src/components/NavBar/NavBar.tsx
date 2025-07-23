import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar: React.FC = () => {
    const isLoged = localStorage.getItem("token");
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                { isLoged ? (
                    <Link to="/inicio" className="navbar-link">Mi App</Link>
                ):(
                    <Link to="/" className="navbar-link">Mi App</Link>
                )}

            </div>
            <div className="navbar-links">
                {isLoged ? (
                    <Link to="/perfil" className="navbar-link">Mi Perfil</Link>

                ) : 
                (
                    
                    <Link to="/login" className="navbar-link">Acceder</Link>

                )}
            </div>
        </nav>
    );
}

export default NavBar;
