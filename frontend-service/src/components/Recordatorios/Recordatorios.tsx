import React, { useEffect, useState } from "react";
import './Recordatorios.css';
import { getActividades, getTareas } from "../../services/RecordatoriosServices";

type Recordatorio = {
    id: number,
    desc: string,
    fecha: string,
}

type Actividad = {
  id: number;
  descripcion: string;
  fecha: string;
};
// hacer servicio que consulte recordatorios. Los recordatorios pueden ser Actividades (EvSeg, Parcial, TP / todas en facultad-service) o una Tarea (usuario-server)
// entonces -> buscar Tareas en usuario-server, buscar Actividades en facultad-service del usuario
const Recordatorios: React.FC = () => {
    const [recordatorios, setRecordatorios] = useState<Recordatorio[]>([]);

    useEffect(()=>{
        try{
            const fetchRecordatorios = async () => {
                //const actividades = await getActividades();
                const actividades: Actividad[] = []; //esto es de prueba
                const tareas = await getTareas();
                
                const actividadesFormateadas = actividades.map( (a: any) => ({
                    id: a.id,
                    desc: a.descripcion,
                    fecha: a.fecha,
                }));

                const tareasFormateadas = tareas.map ((a:any)=> ({
                    id: a.id,
                    desc: a.titulo,
                    fecha: a.fechaYhora,
                }))
                setRecordatorios([
                    ...actividadesFormateadas,
                    ...tareasFormateadas,
                ])
            }
            fetchRecordatorios();
        }catch(error){
            console.error("Error cargando recordatorios", error);
        }
    },[]);
    return(
        <div className="recordatorios">
            <h3 className="titulo">Recordatorios</h3>
            { recordatorios.length > 0 ? (
                <ul className="lista-recordatorios">
                    {recordatorios.map(rec => (
                        <li key={rec.id}>
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