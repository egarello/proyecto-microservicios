import React from 'react'
import { Link } from 'react-router-dom';
import './MateriaCard.css'; // Archivo CSS para los estilos

interface Materia {
    id: number | null;
    nombre: string;
    notaFinal: number | null;
    profesor: {
      id: number;  
      nombre: string;
    };
}

const MateriaCard: React.FC<{ materia: Materia}> = ({ materia }) => {
    return(<div className="materia-card">
        <Link to={`/materia/${materia.id}`} className="materia-link">
            <h2>{materia.nombre}</h2>
            <p>Profesor: {materia.profesor.nombre}</p>
        </Link>
      </div>
    );
};

export default MateriaCard;