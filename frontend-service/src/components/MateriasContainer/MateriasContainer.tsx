import React, { useState } from "react";
import './MateriasContainer.css';
import MateriaDetail from "../MateriaDetail/MateriaDetail";


const actividadesSample: Actividad[] = [
    {
        id: 1,
        fecha: new Date("2025-05-10"),
        tipo: "Tarea",
        titulo: "Ejercicios de álgebra",
        descripcion: "Resolver problemas del capítulo 3",
        completada: true
    },
    {
        id: 2,
        fecha: new Date("2025-05-15"),
        tipo: "Examen",
        titulo: "Parcial 1",
        descripcion: "Unidades 1 a 3",
        completada: false
    },
    {
        id: 3,
        fecha: new Date("2025-05-20"),
        tipo: "Proyecto",
        titulo: "Modelado 3D",
        descripcion: "Entregar proyecto final",
        completada: false
    }
];

const materias = [
    {id: 1, nombre: "Matemática", anio:"2021", ultimaModificacion:"10/05/2025", actividades: actividadesSample},
    {id: 2, nombre: "Lengua", anio:"2021", ultimaModificacion:"10/04/2025", actividades: actividadesSample},
    {id: 3, nombre: "Ingles", anio:"2022",ultimaModificacion:"10/03/2025", actividades: actividadesSample},
    {id: 4, nombre: "Paradigmas", anio:"2022",ultimaModificacion:"11/06/2025", actividades: actividadesSample},
    {id: 5, nombre: "Sistemas Operativos",anio:"2023", ultimaModificacion:"09/03/2025", actividades: actividadesSample},
    {id: 6, nombre: "Redes", anio:"2024",ultimaModificacion:"01/01/2025", actividades: actividadesSample},
];

interface Actividad {
    id: number;
    fecha: Date;
    tipo: "Tarea" | "Examen" | "Práctica" | "Proyecto" | "Lectura";
    titulo: string;
    descripcion: string|null;
    completada: boolean;
}


interface Materia{
    nombre: string,
    ultimaModificacion: string,
    anio: string,
    actividades: Actividad[],
}


const MateriasContainer: React.FC = () => {
    const [materiaSeleccionada,setMateriaSeleccionada] = useState<Materia|null>(null);
    const handleClose = () => {
        setMateriaSeleccionada(null);
    }
    return (
        <div>
            <h3>Materias</h3>
            <table className="tabla-materias">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Última Modificación</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    {materias.map(op => (
                        <tr key={op.id} onClick={() => setMateriaSeleccionada(op)}>
                            <td>{op.nombre}</td>
                            <td>{op.ultimaModificacion}</td>
                            <td>{op.anio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            { materiaSeleccionada && (
                <div>
                    <MateriaDetail materia={materiaSeleccionada} onClose={handleClose} />
                </div>)
            }

        </div>
    );
}

export default MateriasContainer;
