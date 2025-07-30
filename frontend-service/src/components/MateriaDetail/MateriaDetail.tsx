import React from "react";
import './MateriaDetail.css';
interface MateriaProps{
    materia: {
        nombre: string,
        ultimaModificacion: string,
        anio: string,
    };
    onClose: () => void;
}
const MateriaDetail: React.FC<MateriaProps> = ({ materia, onClose }) => {
    return(
        <>
            <div className="materia-detail">
                <div className="header-materia-detail">
                    <h3>{materia.nombre}</h3>
                    <button className="cerrar-materia-detail" onClick={onClose}>
                        ×
                    </button>
                </div>
                <p>Año: {materia.anio}</p>
                <p>Última modificación: {materia.ultimaModificacion}</p>
            </div>
        </>
    );    
}
export default MateriaDetail;