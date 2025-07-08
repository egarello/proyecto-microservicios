import React, { useEffect, useState } from "react";
import { getAños, getPromedio } from "../../ApiService";
import { Link } from "react-router-dom";
import './AñoContainer.css'
import Layout from "../layoutcomponent/Layout";
interface Materia {
    id: number;
    nombre: string;
    descripcion: string;
    profesor: {
      id: number;
      nombre: string;
    };
}
  
interface Año {
    nroAño: number;
    nombreAño: string;
    listaMaterias: Materia[];
}

const AñoContainer: React.FC = () => {
    const [años, setAños] = useState<Año[]>([]);
    const [promedio, setPromedio] = useState<number | null> (null);
    const [error, setError] = useState<string | null>(null);


    useEffect(()=> {
        const fetchData = async () => {
            try{
                const data = await getAños();
                setAños(data);
                const prom = await getPromedio();
                setPromedio(prom);
                console.log("Datos recibidos:",data, " y el promedio es de: ", prom);
            }catch(err){
                console.log("Error al obtener los años o el promedio:",err);
                setError("Error al cargar los datos o el promedio");
            }
        }
        

        fetchData();
    } , []);

    return(
        <Layout showBackButton={false}>
            <div className="home-años">
                <h1>Años académicos</h1>
                {error && <p>{error}</p>}
                <div className="año-container">
                    <ol>
                        {años.map((año) => (
                            <li key={año.nroAño}>
                                <Link to={`/anio/${año.nroAño}`} className="año-link">
                                    {año.nombreAño} - {año.nroAño}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </div>
                {!error && promedio !== null && (
                    <p>Promedio general de las materias: {promedio.toFixed(2)}</p> // Mostrar el promedio.
                )}
            </div>        
        </Layout>
    
    );
}
export default AñoContainer;