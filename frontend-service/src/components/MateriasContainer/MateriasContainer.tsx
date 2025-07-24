import React from "react";
import './MateriasContainer.css';

const materias = [
    {id: 1, nombre: "Matemática", anio:"2021", ultimaModificacion:"10/05/2025"},
    {id: 2, nombre: "Lengua", anio:"2021", ultimaModificacion:"10/04/2025"},
    {id: 3, nombre: "Ingles", anio:"2022",ultimaModificacion:"10/03/2025"},
    {id: 4, nombre: "Paradigmas", anio:"2022",ultimaModificacion:"11/06/2025"},
    {id: 5, nombre: "Sistemas Operativos",anio:"2023", ultimaModificacion:"09/03/2025"},
    {id: 6, nombre: "Redes", anio:"2024",ultimaModificacion:"01/01/2025"},
];

const MateriasContainer: React.FC = () => {
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
                        <tr key={op.id}>
                            <td>{op.nombre}</td>
                            <td>{op.ultimaModificacion}</td>
                            <td>{op.anio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MateriasContainer;
