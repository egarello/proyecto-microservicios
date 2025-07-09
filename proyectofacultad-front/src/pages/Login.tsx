import React, { useState } from 'react';
import Layout from '../components/layoutcomponent/Layout';

const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //acá va el control con el backend.
    }
    return(
        <Layout>
            <div className="login-form">
                <form onSubmit={handleSubmit}></form>
                <div>
                    <label htmlFor="username">User</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        id = "password"
                        type = "password"
                        value = {password}
                        onChange = {e => setPassword(e.target.value)}
                        required
                    /> 
                    <button type="submit">Acceder</button>
                </div>
            </div>
        </Layout>
    );
};
export default Login;