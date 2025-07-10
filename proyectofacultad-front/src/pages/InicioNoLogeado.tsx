import React from 'react';
import Layout from '../components/layoutcomponent/Layout';
const InicioNoLogeado: React.FC = () => {
    return(
        <Layout showBackButton={false}>
            <h1>No se ha logeado todavía</h1>
        </Layout>  
        
    );
}

export default InicioNoLogeado;