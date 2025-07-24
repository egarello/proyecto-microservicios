import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'

const opciones = [
    {key: "editar", label:"Editar Perfil" },
    {key: "logout", label:"Cerrar sesión" }
];

const NavBar: React.FC = () => {
    const isLoged = localStorage.getItem("token");
    const navigate = useNavigate();
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const handleLogout = () => {
        localStorage.removeItem("token");
        setShowProfileMenu(false);
        navigate("/");
    }

    return(
        <>
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
                        <button 
                            className="navbar-link"
                            onClick={() => {setShowProfileMenu(!showProfileMenu)}}
                        >
                            Mi Perfil
                        </button>
                    ) : 
                    (  
                        <Link to="/login" className="navbar-link">Acceder</Link>
                    )}
                </div>
            </nav>
            <div>
                {showProfileMenu && (
                    <ul className="sidebar-profile">
                        {opciones.map(op => (
                            <li
                                key={op.key}
                            >
                                <button onClick={handleLogout}>{op.label}</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>

    );
}

export default NavBar;
