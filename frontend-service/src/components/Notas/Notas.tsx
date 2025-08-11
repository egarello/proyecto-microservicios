import React, { useState, useEffect } from "react";
import { getNotas, deleteNotaById, agregarNuevaNota } from "../../services/UserServices";
import './Notas.css';

interface NotaCreada{
    contenido: string,
    instanteCreacion: Date,
    ultimaModificacion: Date, 
} // esta interface se usa cuando creamos una nota -> ya que el id se crea en el back.
interface Nota{
    id: number,
    contenido: string,
    instanteCreacion: Date,
    ultimaModificacion: Date, 
}
const Notas: React.FC = () => {
    const [notas,setNotas] = useState<Nota[]>([]);
    const [nuevaNota, setNuevaNota] = useState("");
    const [showAgregarNotas,setShowAgregarNotas] = useState(false);
    useEffect(()=>{
        const fetchNotas = async () => {
            const notasDesdeService= await getNotas();
            if(notasDesdeService){
                setNotas(notasDesdeService);
            }
        }
        fetchNotas();
    },[])
    const agregarNota = async () => {
        try{
            if(nuevaNota.trim()){ //si el usuario no ingresó nada, entonces este .trim() retorna "" y es tomado como falso.
                const notaCreada: NotaCreada = {
                    contenido: nuevaNota,
                    instanteCreacion:new Date(),
                    ultimaModificacion: new Date(),
                }
                const notaYaCreada: Nota = await agregarNuevaNota(notaCreada);

                setNotas([...notas, notaYaCreada]);
                setNuevaNota("");   
            } 
        }catch(error){
            console.error("Error al agregar una nueva nota: ",error);
            alert("No se pudo agregar la nota. Intenta nuevamente.");
        }

    };
    const eliminarNota = async (id: number) => {
        try{
            await deleteNotaById(id);
            const nuevasNotas = notas.filter( nota => nota.id != id); 
            setNotas(nuevasNotas);
        }catch(error){
            console.error("Error al eliminar la nota: ",error);
            alert("No se pudo eliminar la nota. Intenta nuevamente.");
        }
    }

    return(
        <div className="notas-container">
            <h3>Notas</h3>
            <div className="agregar-nota-container">
                {!showAgregarNotas ? (
                    <button className="agregar-button" onClick={() => setShowAgregarNotas(!showAgregarNotas)}>
                        Nueva +
                    </button>
                ):(
                    <button className="agregar-button" onClick={() => setShowAgregarNotas(!showAgregarNotas)}>
                        Cancelar
                    </button>
                )
                }
                {showAgregarNotas && (
                    <div className="agregar-nota">
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                agregarNota();
                                setShowAgregarNotas(false);
                            }}
                        >
                            <textarea
                                value={nuevaNota}
                                onChange={e => setNuevaNota(e.target.value)}
                                placeholder="Escribir nueva nota"
                            />
                            <button className="guardar-nota" type="submit">
                                Guardar
                            </button>
                        </form>
                    </div>
                )}
            </div>
            <ul className="lista-notas">  
                {notas.map((nota) => (
                    <li key={nota.id} className="notas">
                        {nota.contenido}
                        <button onClick={() => eliminarNota(nota.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Notas;