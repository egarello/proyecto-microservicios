import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import './InicioUser.css';
import MateriasContainer from "../../components/MateriasContainer/MateriasContainer";
import Recordatorios from "../../components/Recordatorios/Recordatorios";
import Notas from "../../components/Notas/Notas";
import Calendario from "../../components/Calendario/Calendario";


const opciones = [
    { key: "materias", label: "Materias" },
    { key: "calendario", label: "Calendario" },
    { key: "notas", label: "Notas" }
];


const InicioUser: React.FC = () => {
    const [seleccion, setSeleccion] = useState("materias");

    const renderContenido = () =>{
        switch(seleccion){
            case "materias":
                return <MateriasContainer/>;
            case "calendario":
                return <Calendario/>;
            case "notas":
                return <Notas/>;
        }
    }

    return(
        <Layout>
            <div className="inicio-user-content">
                <div className="side-bar">
                    <ul className="sidebar-menu">
                        {opciones.map(op => (
                            <li
                                key={op.key}
                                className={seleccion === op.key ? "active" : ""}
                                onClick={() => setSeleccion(op.key)}
                            >
                                {op.label}
                            </li>
                        ))}
                    </ul>
                </div>    
                <div className="center-content">
                    {renderContenido()}
                </div>  
                <div className="right-side-content">
                    <Recordatorios/>
                </div>  
            </div>

        </Layout>

    );
}

export default InicioUser