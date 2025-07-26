import React, { useState } from "react";
import './Agenda.css';

interface Tarea{
    id: string,
    titulo: string,
    descripcion?: string,
    completada: boolean,
}
interface BloqueHora{
    hora: number,
    tareas: Tarea[],   
}
interface Dia{
    fecha: Date,
    bloques: BloqueHora[],
}
const miSemana: Dia[] = [
  {
    fecha: new Date(2023, 10, 20), // 20-Nov-2023
    bloques: [
      {
        hora: 9,
        tareas: [
          {
            id: '1',
            titulo: 'Jugar al futbol 5',
            completada: false
          }
        ]
      },
      {
        hora: 14,
        tareas: [
          {
            id: '2',
            titulo: 'Tarea de la semana',
            descripcion: 'Tengo que terminar la tarea que me quedó pendiente',
            completada: false
          }
        ]
      }
    ]
  }
];
const Agenda: React.FC = () => {
    const [listaPorHora, setListaPorHora] = useState<BloqueHora[]>();
    return(
        <div className="horarios-container">
            
        </div>
    );
}
export default Agenda;