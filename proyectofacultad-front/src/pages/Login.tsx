import React, { useState } from 'react';
import Layout from '../components/layoutcomponent/Layout';
import './Login.css'
const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //acá va el control con el backend.
    }
    return(
        <Layout>
            <div className="login-container">
                <h1>Mi APP</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                    <label htmlFor="username">User</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        id = "password"
                        type = "password"
                        value = {password}
                        onChange = {e => setPassword(e.target.value)}
                        required
                    />  
                </div>
                <button type="submit">Acceder</button>
                </form> 
            </div>
        </Layout>
    );
};
export default Login;