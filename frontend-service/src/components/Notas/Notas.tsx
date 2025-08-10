import React, { useState, useEffect } from "react";
import { getNotas } from "../../services/UserServices";
import './Notas.css';

interface Nota{
    id: number,
    contenido: string,
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
    const agregarNota = () => {
        if(nuevaNota.trim()){ //si el usuario no ingresó nada, entonces este .trim() retorna "" y es tomado como falso.
            setNotas([...notas, { id: Date.now(), contenido: nuevaNota, ultimaModificacion: new Date() }]);
            setNuevaNota("");   
        } 
    };
    const eliminarNota = (index: number) => {
        const nuevasNotas = [...notas]; 
        nuevasNotas.splice(index,1);
        setNotas(nuevasNotas);
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