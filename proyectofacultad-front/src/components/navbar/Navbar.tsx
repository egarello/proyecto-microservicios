// src/components/Navbar/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-link">Mi App</Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">Acerca de</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services" className="navbar-link">Servicios</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;