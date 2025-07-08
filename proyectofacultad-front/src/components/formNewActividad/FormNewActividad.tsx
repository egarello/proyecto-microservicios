import React, { useState } from 'react';

interface FormNewActividadProps {
    onSubmit: (actividad: NewActividad) => void;
    onCancel: () => void;
}

interface NewActividad {
    tipoActividad: string;
    descripcion: string;
    fecha: string;
    hora: string;
    duracion?: string;
    dudasQueTengo?: string;
}

const FormNewActividad: React.FC<FormNewActividadProps> = ({ onSubmit, onCancel }) => {
    const [tipoActividad, setTipoActividad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [duracion, setDuracion] = useState('');
    const [dudasQueTengo, setDudasQueTengo] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const actividad: NewActividad = { tipoActividad, descripcion, fecha, hora };
        if (tipoActividad === 'Parcial') {
            actividad.duracion = duracion;
        } else if (tipoActividad === 'Trabajo Práctico') {
            actividad.dudasQueTengo = dudasQueTengo;
        }
        onSubmit(actividad);
        setTipoActividad('');
        setDescripcion('');
        setFecha('');
        setHora('');
        setDuracion('');
        setDudasQueTengo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Tipo de Actividad:</label>
                <select value={tipoActividad} onChange={(e) => setTipoActividad(e.target.value)} required>
                    <option value="">Seleccione un tipo</option>
                    <option value="Parcial">Parcial</option>
                    <option value="Trabajo Práctico">Trabajo Práctico</option>
                    <option value="Seguimiento">Seguimiento</option>
                </select>
            </div>
            <div>
                <label>Descripción:</label>
                <input
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Fecha:</label>
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Hora:</label>
                <input
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    required
                />
            </div>
            {tipoActividad === 'Parcial' && (
                <div>
                    <label>Duración:</label>
                    <input
                        type="text"
                        value={duracion}
                        onChange={(e) => setDuracion(e.target.value)}
                        required
                    />
                </div>
            )}
            {tipoActividad === 'Trabajo Práctico' && (
                <div>
                    <label>Dudas que tengo:</label>
                    <input
                        type="text"
                        value={dudasQueTengo}
                        onChange={(e) => setDudasQueTengo(e.target.value)}
                        required
                    />
                </div>
            )}
            <button type="submit">Guardar</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default FormNewActividad;