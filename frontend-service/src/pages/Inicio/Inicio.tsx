import React from 'react';
import Layout from '../../components/Layout/Layout';
import './Inicio.css'

const Inicio: React.FC = () => {
    return(
        <Layout>
            <div className="cards-inicio-container">
                <div className="card">
                    <h3 className="card-titulo">Registrá tus materias</h3>
                    <p className="card-desc">
                        Subí los apuntes de tus materias para poder mantener todo organizado.
                    </p>
                </div>
                <div className="card">
                    <div className="card-logo">
                    </div>
                    <h3 className="card-titulo">Armá tu agenda inteligente</h3>
                    <p className="card-desc">
                        Registrá los proximos eventos y recibí recordatorios con un apartado de agendas inteligentes que te permite organizarte con el uso de IA
                    </p>
                </div>
                <div className="card">
                    <h3 className="card-titulo">Creá tu propia comunidad</h3>
                    <p className="card-desc">
                        Creá una comunidad mediante los foros, en donde es posible tener contacto con miles de personas
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Inicio;