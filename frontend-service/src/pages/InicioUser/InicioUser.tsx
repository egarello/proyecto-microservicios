import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import './InicioUser.css';
import MateriasContainer from "../../components/MateriasContainer/MateriasContainer";
import Recordatorios from "../../components/Recordatorios/Recordatorios";
import Notas from "../../components/Notas/Notas";
import Agenda from "../../components/Agenda/Agenda";

const opciones = [
    { key: "materias", label: "Materias" },
    { key: "notas", label: "Notas" },
    { key: "agenda", label: "Agenda" },
];


const InicioUser: React.FC = () => {
    const [seleccion, setSeleccion] = useState("materias");
    const [showSideBar,setShowSideBar] = useState(true);
   
    const renderContenido = () =>{
        switch(seleccion){
            case "materias":
                return <MateriasContainer/>;
            case "notas":
                return <Notas/>;
            case "agenda":
                return <Agenda/>;
        }
    }

    return(
        <Layout>
            <div className="inicio-user-content">
                <div className={`side-bar ${showSideBar ? 'open' : 'close'}`}>
                    <button 
                        className="menu-toggle"
                        onClick={() => setShowSideBar(!showSideBar)}
                    >
                    ☰
                    </button>

                    {showSideBar && (
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
                    )}
                </div>
                <div className="resizer" id='resizer'></div>
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