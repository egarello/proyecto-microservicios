import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MateriaCard from '../components/materiacard/MateriaCard';
import Layout from '../components/layoutcomponent/Layout';
import { getProfesores } from '../ApiService';// Importa la función getProfesores
import './AñoDetail.css';

interface Materia {
    id: number;
    nombre: string;
    notaFinal: number | null;
    descripcion: string;
    nroAnio: number,
    profesor: {
      id: number;
      nombre: string;
    };
}

interface NewMateria{
    nombre: string,
    descripcion: string,
    notaFinal: number | null,
    año_id: number,
    profesor_id:number,
}

interface Año {
    nroAño: number;
    nombreAño: string;
    listaMaterias: Materia[];
}

interface Profesor {
    id: number;
    nombre: string;
}

const AñoDetail: React.FC = () => {
    const { nroAnio } = useParams<{ nroAnio: string }>();
    const [año, setAño] = useState<Año | null>(null);
    const [profesores, setProfesores] = useState<Profesor[]>([]);
    const [showForm, setShowForm] = useState(false);    
    const [newMateria, setNewMateria] = useState<NewMateria>({
        nombre: '',
        notaFinal: null,
        descripcion: '',
        año_id: parseInt(nroAnio ?? '0',10),
        profesor_id: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/anio/${nroAnio}`);
                const data = await response.json();
                setAño(data);
                const profesoresData = await getProfesores();
                setProfesores(profesoresData);
            } catch (err) {
                console.error('Error al cargar los datos:', err);
            }
        };

        fetchData();
    }, [nroAnio]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'profesor.id') {
            const selectedProfesor = profesores.find(profesor => profesor.id === parseInt(value, 10));
            setNewMateria((prev) => ({
                ...prev,
                profesor_id: selectedProfesor?.id || 0 ,
            }));
        } else {
            setNewMateria((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // No necesitas incluir anioId si no es parte de la estructura de Materia
            const response = await fetch(`http://localhost:8080/materias`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMateria),
            });
            console.info(newMateria);
            if (response.ok) {
                const savedMateria = await response.json();
                setAño((prevAño) => {
                    if (!prevAño) return null;
                    return {
                        ...prevAño,
                        listaMaterias: [...prevAño.listaMaterias, savedMateria],
                    };
                });
                setShowForm(false);
            } else {
                console.error('Error al agregar la materia HOLLLAAA:', response.body);
            }
        } catch (err) {
            console.error('Error al agregar la materia:', err);
        }
    };
    return (
        <Layout>
            <div className="materia-container">
                {año ? (
                    <>
                        <h1>{año.nombreAño} - {año.nroAño}</h1>
                        <div className="materia-content">
                            <div className="materia-list">
                                { año.listaMaterias.length > 0 ? (
                                    año.listaMaterias.map((materia) => 
                                        (<MateriaCard key={materia.id} materia={materia} />)
                                    
                                    )) : (
                                    <p>No hay materias cargadas.</p>
                                    )
                                }
                            </div>
                            <div className="materia-form-container">
                                <button onClick={() => setShowForm(!showForm)}>
                                    {showForm ? "Cancelar" : "Agregar Materia"}
                                </button>
                                {showForm && (
                                    <form onSubmit={handleSubmit} className="materia-form">
                                        <h3>Agregar Materia</h3>
                                        <div>
                                            <label>Nombre:</label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={newMateria.nombre}
                                                onChange={handleInputChange}
                                                required // Esto te obliga a completar el campo antes de poder guardar la materia.
                                            />
                                        </div>
                                        <div>
                                            <label>Descripción:</label>
                                            <textarea
                                                name="descripcion"
                                                value={newMateria.descripcion}
                                                onChange={handleInputChange}
                                                required // Esto te obliga a completar el campo antes de poder guardar la materia.
                                            />
                                        </div>
                                        <div>
                                            <label>Nota Final:</label>
                                            <input
                                                type="number"
                                                name="notaFinal"
                                                value={newMateria.notaFinal || ''}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label>Profesor:</label>
                                            <select
                                                name="profesor.id"
                                                value={newMateria.profesor_id} 
                                                onChange={handleInputChange}
                                                required // Esto te obliga a completar el campo antes de poder guardar la materia.
                                            >
                                                <option value="">Seleccione un profesor</option>
                                                {profesores.map((profesor) => (
                                                    <option key={profesor.id} value={profesor.id}>
                                                        {profesor.nombre}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <button type="submit">Guardar Materia</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Cargando detalles...</p>
                )}
            </div>
        </Layout>
    );
};

export default AñoDetail;