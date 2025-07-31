import React from "react";
import './MateriaDetail.css';
interface MateriaProps{
    materia: {
        nombre: string,
        ultimaModificacion: string,
        anio: string,
        actividades: Actividad[]
    };
    onClose: () => void;
}
interface Actividad {
    id: number;
    fecha: Date;
    tipo: "Tarea" | "Examen" | "Práctica" | "Proyecto" | "Lectura";
    titulo: string;
    descripcion: string | null;
    completada: boolean;
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
                {
                    materia.actividades.length>0 && (
                        <div className="actividades-detail">
                            {materia.actividades.map( actividad => (
                                <div className="actividad-particular">
                                    <p>{actividad.titulo}</p>
                                    <p>{actividad.fecha.toLocaleDateString()}</p>
                                    <p>{actividad.tipo}</p>
                                    {actividad.descripcion && <p>{actividad.descripcion}</p>}
                                    <p>{actividad.completada ? '✓' : '○'}</p>
                                </div>
                            )
                            )}
                        </div>
                    )
                }


            </div>
        </>
    );    
}
export default MateriaDetail;