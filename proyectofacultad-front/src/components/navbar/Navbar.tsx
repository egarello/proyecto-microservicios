// src/components/Navbar/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const isLoggedIn = !!localStorage.getItem('token');
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-link">Mi App</Link>
      </div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <li className="navbar-item">
            <Link to="/profile" className="navbar-link">Mi perfil</Link>
          </li>
        ) : (
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Acceder</Link>
          </li>
        )

        }
      </ul>
    </nav>
  );
};

export default Navbar;