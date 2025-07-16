import React from 'react';
import Layout from '../../components/Layout/Layout';
import './Inicio.css'
import imagenInicio from '../../assets/imagen-inicio.png'
const Inicio: React.FC = () => {
    return(
        <Layout>
            <img 
                src={imagenInicio} 
                alt="Imagen de inicio" 
                className="imagen-inicio"
            />
            <div className="cards-inicio-container">
                <div className="card">
                    <h3 className="card-titulo">Titulo card1</h3>
                    <p className="card-desc">
                        Parrafo alkajlkjd asjndjdnf cdjn ajsnfl jdfnlas mfdnlna
                    </p>
                </div>
                <div className="card">
                    <h3 className="card-titulo">Titulo card2</h3>
                    <p className="card-desc">
                        Parrafo alkajlkjd asjndjdnf cdjn ajsnfl jdfnlas mfdnlna
                    </p>
                </div>
                <div className="card">
                    <h3 className="card-titulo">Titulo card</h3>
                    <p className="card-desc">
                        Parrafo alkajlkjd asjndjdnf cdjn ajsnfl jdfnlas mfdnlna
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Inicio;