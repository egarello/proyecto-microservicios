import React, { useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/layoutcomponent/Layout';
import FormNewActividad from '../components/formNewActividad/FormNewActividad';


interface Materia {
  id: number;
  nombre: string;
  descripcion: string;
  profesor: {
    id: number;
    nombre: string;
  };
  actividades: {
    id: number;
    tipoActividad: string;
    descripcion: string;
    fecha: string;
    hora: string;
    duracion?:string;
    dudasQueTengo?: string;
  }[];
}
interface NewActividad {
  tipoActividad: string;
  descripcion: string;
  fecha: string;
  hora: string;
  duracion?:string;
  dudasQueTengo?: string;
}

const MateriaDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Asegurarte de que `id` es de tipo `string`
    const [materia, setMateria] = useState<Materia | null>(null); // Estado con tipo explícito
    const [actividades, setActividades] = useState<Materia['actividades'] | null>(null); // Estado con tipo explícito
    const [showFormNewActividad, setShowFormNewActividad] = useState(false);
    const [selectedContent, setSelectedContent] = useState<React.ReactNode>(null);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchMateria = async () => {
        try {
          const response = await fetch(`http://localhost:8080/materia/${id}`);
          const data = await response.json();
          setMateria(data);
          
          const responseActividades = await fetch(`http://localhost:8080/materia/${id}/actividades`)
          const actividadesData = await responseActividades.json();
          setActividades(actividadesData);
        } catch (err) {
          console.error('Error al cargar los detalles de la materia:', err);
        }
      
      
      };
      
      fetchMateria();
    }, [id]);
    
    const handleAddActividad = async (actividad: NewActividad) => {
      const formattedHora = actividad.hora.replace(':', '.');
      const newActividad = { ...actividad, hora: formattedHora };

        // Imprime el JSON de newActividad en la consola
        console.log('Enviando actividad:', JSON.stringify(newActividad));

        const response = await fetch(`http://localhost:8080/materia/${id}/actividades/crear`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newActividad),
        });

        if (response.ok) {
            console.log("Actividad agregada con éxito");
            const savedActividad = await response.json();
            setActividades((prevActividades) => (prevActividades ? [...prevActividades, savedActividad] : [savedActividad]));
            setShowFormNewActividad(false);
        } else {
            console.error("La actividad es: ", JSON.stringify(newActividad));
            console.error('Error al agregar la actividad:', await response.text());
        }
    };
    
    const handleShowActividadDetail = (actividad: Materia['actividades'][0]) => {
      setSelectedContent(
        <div>
          <h2>Detalle de Actividad</h2>
          <p>Tipo: {actividad.tipoActividad}</p>
          <p>Descripción: {actividad.descripcion}</p>
          <p>Fecha: {actividad.fecha}</p>
          <p>Hora: {actividad.hora}</p>
          {actividad.duracion && <p>Duración: {actividad.duracion} minutos</p>}
          {actividad.dudasQueTengo && <p>Dudas: {actividad.dudasQueTengo}</p>}
          <button onClick={ () => eliminarActividad(actividad.id)}>Eliminar actividad</button>
        </div>

      )
    };
    const handleShowHistorial = (actividades: Materia['actividades']  | null) => {
      if(!actividades){
        setSelectedContent(<p>No hay actividades registradas para mostrar el historial.</p>);
        return;
      }
      else{
        setSelectedContent(
          <div>
            <p>Historial completo de actividades de la materia.</p>
            {actividades.map((actividad)=> (
              <li key={actividad.id} onClick={() => handleShowActividadDetail(actividad)}>
                {actividad.descripcion} - {actividad.fecha}
              </li>))}
          </div>
        );
      }
      
    };
    const convertirHora = (hora: number | string): string => {
      if (typeof hora === 'string') {
        return hora; // Si ya es un string, no hagas nada
      }
      
      const [horas, minutos] = hora.toFixed(2).split('.'); // Convierte el número
      return `${horas.padStart(2, '0')}:${minutos.padStart(2, '0')}`; // Asegúrate de que tenga formato "HH:mm"
    };
    

    const filtrarActividadesProximas = (actividades: Materia['actividades']): Materia['actividades'] => {
      const ahora = new Date();
    
      return actividades.filter((actividad) => {
        if (!actividad.fecha || actividad.hora === undefined) {
          console.error('Faltan datos de fecha o hora para la actividad:', actividad);
          return false;
        }
    
        const horaFormateada = convertirHora(actividad.hora); // Convierte la hora
        const fechaActividad = new Date(`${actividad.fecha}T${horaFormateada}`);
        return fechaActividad > ahora; // Filtra solo actividades futuras
      });
    };

    const eliminarMateria = async () => {
      try{
        await fetch(`http://localhost:8080/materia/${id}`,{
          method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(materia),
        })
        navigate(-1);
      }catch(err){
        console.error("Error al eliminar la materia: ", err);
      }
    }
    const eliminarActividad = async (idActividad: number) => {
      try{
        await fetch(`http://localhost:8080/actividades/borrar/${idActividad}`,{
          method: 'DELETE'
        });
      // Actualiza el estado eliminando la actividad con el id proporcionado
      setActividades((prevActividades) =>
        prevActividades ? prevActividades.filter((actividad) => actividad.id !== idActividad) : null
      );
      setSelectedContent(null);

      }catch(err){
        console.error("Error al tratar de eliminar una materia. El error es: ", err);
      }
    }
    
    return (
      <Layout>
        <div>
          {materia ? (
            <div>
              <h1>{materia.nombre}</h1>
              <p>{materia.descripcion}</p>
              <p>Profesor: {materia.profesor.nombre}</p>
              <div className='actividades'>
                <h2>Compromisos próximos de la materia.</h2>
                {actividades ? (
                  <ul>
                    {filtrarActividadesProximas(actividades).map((actividad) => (
                      <li key={actividad.id} onClick={() => handleShowActividadDetail(actividad)}>
                        {actividad.descripcion} - {actividad.fecha}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No hay actividades próximas.</p>
                )}
                  <button onClick={() => setShowFormNewActividad(true)}>Agregar actividad</button>
                  <button onClick={() => handleShowHistorial(actividades)}>Ver historial de actividades</button>
                  {showFormNewActividad && (
                    <FormNewActividad
                      onSubmit={handleAddActividad}
                      onCancel={() => setShowFormNewActividad(false)}
                    />
                  )}
              </div>
            </div> 
          ) : (
            <p>Cargando detalles...</p>
          )}
          <div style={{ flex: 1, marginLeft: '20px', border: '1px solid #ccc', padding: '10px' }}>
            {selectedContent}
          </div>
          <button onClick={eliminarMateria}>Eliminar materia.</button>
        </div>
      </Layout>
      
    );
};
  
export default MateriaDetail;
