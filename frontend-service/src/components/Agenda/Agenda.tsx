import React, { useState } from "react";
import './Agenda.css';

interface Tarea {
    id: string;
    titulo: string;
    descripcion?: string;
    completada: boolean;
}

interface BloqueHora {
    hora: number; // 0-23
    tareas: Tarea[];   
}

interface Dia {
    fecha: Date;
    bloques: BloqueHora[];
}

const generarBloquesCompletos = (bloquesExistente: BloqueHora[] = []): BloqueHora[] => {
    const bloques: BloqueHora[] = [];
    
    for (let hora = 0; hora < 24; hora++) {
        const bloqueExistente = bloquesExistente.find(b => b.hora === hora);
        bloques.push({
            hora,
            tareas: bloqueExistente?.tareas || []
        });
    }
    return bloques;
};

const miSemana: Dia[] = [
    {
        fecha: new Date(2023, 10, 20),
        bloques: generarBloquesCompletos([
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
                        descripcion: 'Tengo que terminar la tarea pendiente',
                        completada: false
                    }
                ]
            }
        ])
    }
];

const Agenda: React.FC = () => {
    const [unidadTiempo, setUnidadTiempo] = useState("dia");
    const [diaActual,setDiaActual] = useState<Dia>(miSemana[0]);

    const formatearHora = (hora: number): string => {
        return `${hora.toString().padStart(2, '0')}:00`;
    };
    const cambiarEstadoTarea = (tareaActualizada: Tarea) => {
        setDiaActual(prev => ({
        ...prev,
        bloques: prev.bloques.map(bloque => ({
            ...bloque,
            tareas: bloque.tareas.map(tarea => 
            tarea.id === tareaActualizada.id
                ? { ...tarea, completada: !tarea.completada }
                : tarea
            )
        }))
        }));
    };
    return (
        <div className="agenda-container">
            <div className="agenda-header">
                <h2>Agenda Personal</h2>
                <div className="controles">
                    <select
                        value={unidadTiempo}
                        onChange={(e) => setUnidadTiempo(e.target.value)}
                        className="selector-tiempo"
                    >
                        <option value="dia">Día</option>
                        <option value="semana">Semana</option>
                        <option value="mes">Mes</option>
                    </select>
                </div>
            </div>

            {unidadTiempo === "dia" && (
                <div className="agenda-content">
                    <h3 className="dia-titulo">
                        {diaActual.fecha.toLocaleDateString('es-ES', { 
                            weekday: 'long', 
                            day: 'numeric', 
                            month: 'long',
                            year: 'numeric',
                        })}
                    </h3>
                    <div className="contenedor-scroll">
                        <div className="linea-tiempo">
                            {diaActual.bloques.map((bloque) => (
                                <div key={bloque.hora} className="bloque-tiempo">
                                    <div className="marcador-hora">
                                        <span>{formatearHora(bloque.hora)}</span>
                                    </div>
                                    <div className={`contenido-tareas ${bloque.tareas.length > 0 ? 'con-tareas' : 'sin-tareas'}`}>
                                        {bloque.tareas.length > 0 ? (
                                            <ul className="lista-tareas">
                                                {bloque.tareas.map((tarea) => (
                                                    <li key={tarea.id} className="tarea">
                                                        <div className="tarea-contenido">
                                                            <h4>{tarea.titulo}</h4>
                                                            {tarea.descripcion && <p>{tarea.descripcion}</p>}
                                                        </div>
                                                        <button 
                                                            className={`estado-tarea ${tarea.completada ? 'completada' : 'pendiente'}`}
                                                            aria-label={tarea.completada ? 'Marcar como pendiente' : 'Marcar como completada'}
                                                            onClick={() => cambiarEstadoTarea(tarea)}
                                                        >
                                                            {tarea.completada ? '✓' : '○'}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className="placeholder-tarea">No hay tareas</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Agenda;