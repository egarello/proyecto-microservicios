
import { useState, useEffect } from "react";
import { getPromedio } from "../../ApiService";

const PromedioDisplay = () => {
    const [promedio, setPromedio] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchPromedio = async () => {
            try {
              const result = await getPromedio(); // Aquí se espera el float directamente.
              setPromedio(result); // Guardar el promedio en el estado.
            } catch (err) {
              console.error(err);
              setError("Error al cargar el promedio."); // Mensaje de error.
            }
        };
        fetchPromedio();

    },[]);
    return (
        <div>
          {error ? (
            <p>{error}</p> // Mostrar error si ocurre.
          ) : promedio !== null ? (
            <p>El promedio de las materias es: {promedio.toFixed(2)}</p> // Mostrar promedio con 2 decimales.
          ) : (
            <p>Cargando promedio...</p> // Indicar que está cargando.
          )}
        </div>
    );
}
export default PromedioDisplay;