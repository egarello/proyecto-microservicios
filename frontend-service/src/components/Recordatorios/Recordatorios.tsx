import React, { useState } from "react";
import './Recordatorios.css';
const recordatorios = [
    {id:1, desc:"Hacer tarea de matemática", fecha:"10/05/2025"},
    {id:2, desc:"Tarea de inglés", fecha:"10/05/2025"},
];

const Recordatorios: React.FC = () => {
    const [hayRecordatorios, setHayRecordatorios] = useState(true);
    return(
        <div className="recordatorios">
            <h3 className="titulo">Recordatorios</h3>
            {hayRecordatorios ? (
                <ul className="lista-recordatorios">
                    {recordatorios.map(rec => (
                        <li>
                            <h4>{rec.desc}</h4>
                            <h4>{rec.fecha}</h4>
                        </li>
                    ))}
                </ul>
                ):
                <h4>No hay recordatorios programados</h4> 
            }
        </div>
    );
}

export default Recordatorios;