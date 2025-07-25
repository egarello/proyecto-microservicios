import React, { useState } from "react";
import './Notas.css';


const Notas: React.FC = () => {
    const [notas,setNotas] = useState<string[]>([]);
    const [nuevaNota, setNuevaNota] = useState("");
    const [showAgregarNotas,setShowAgregarNotas] = useState(false);

    const agregarNota = () => {
        if(nuevaNota.trim()){ //si el usuario no ingresó nada, entonces este .trim() retorna "" y es tomado como falso.
            setNotas([...notas,nuevaNota]);
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
                {notas.map((nota,idx) => (
                    <li key={idx} className="notas">
                        {nota}
                        <button onClick={() => eliminarNota(idx)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Notas;