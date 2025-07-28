import React, { useState, useEffect } from "react";
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
    // Efecto para bloquear/desbloquear el scroll
    useEffect(() => {
        if (showProfileMenu) {
            document.body.classList.add('sidebar-open');
        } else {
            document.body.classList.remove('sidebar-open');
        }

        return () => {
            document.body.classList.remove('sidebar-open');
        };
    }, [showProfileMenu]);

    const handleLogout = (opcion: string) => {
        setShowProfileMenu(false);
        switch(opcion){
            case "logout":
                localStorage.removeItem("token");
                localStorage.removeItem("userData"); 
                navigate("/");
                break;
            case 'editar':
                navigate("/perfil/editar");
                break;
        }
    };

    return(
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to={isLoged ? "/inicio" : "/"} className="navbar-link">
                        Mi App
                    </Link>
                </div>
                <div className="navbar-links">
                    {isLoged ? (
                        <button 
                            className="navbar-link"
                            onClick={() => setShowProfileMenu(!showProfileMenu)}
                        >
                            Mi Perfil
                        </button>
                    ) : (
                        <Link to="/login" className="navbar-link">Acceder</Link>
                    )}
                </div>
            </nav>
            
            <div className={`sidebar-profile-container ${showProfileMenu ? 'open' : 'close'}`}>
                {showProfileMenu && (
                    <>
                    <div className="titulo-sidebar">
                        <h4>Hola</h4>
                        <button onClick={() => setShowProfileMenu(!showProfileMenu)}>X</button>
                    </div>
                    <ul className="sidebar-profile">
                        {opciones.map(op => (
                            <li
                                key={op.key}
                                onClick={() => handleLogout(op.key)}
                            >
                                {op.label}
                            </li>
                        ))}
                    </ul>
                    </>
                )}
            </div>
        </>
    );
};

export default NavBar;