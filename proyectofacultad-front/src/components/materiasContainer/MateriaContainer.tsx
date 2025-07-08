import React, { useEffect, useState } from "react";
import { getMaterias } from "../../ApiService";
import MateriaCard from "../materiacard/MateriaCard";
import Layout from "../layoutcomponent/Layout";

interface Materia {
  id: number;
  nombre: string;
  profesor: {
    id: number;
    nombre: string;
  };
}

const MateriaContainer: React.FC = () => {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const data = await getMaterias(); 
        setMaterias(data);

        console.log("Datos recibidos:", data); //imprime los datos como los recibo en la consola del navegador.
      } catch (err){
        console.error("Error al obtener las materias:", err); //imprime en la consola del navegador el error. 
        setError("Error al cargar las materias");
      }
    };

    fetchMaterias();
  }, []);

  return (
    <Layout>
        <div className="home">
          <h1>Materias</h1>
          {error && <p>{error}</p>}
          <div className="materia-container">
            {materias.map((materia) => (
              <MateriaCard key={materia.id} materia={materia} />
            ))}
          </div>
        </div>
    </Layout>
    
  );
};

export default MateriaContainer;