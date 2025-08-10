import React, { useState } from 'react'
import { login } from '../../services/AuthServices';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Layout from '../../components/Layout/Layout';
//import Layout from '../../components/Layout/Layout';
const Login: React.FC = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); 
        try{
            const token = await login(username, password);
            localStorage.setItem('token',token);
            const payload = JSON.parse(atob(token.split('.')[1]));
            localStorage.setItem('id',payload.id);
            localStorage.setItem('rol',payload.rol);
            localStorage.setItem('username',payload.sub);
            setError('');
            console.log('Inicio de sesión exitoso. Token: ', token);
            navigate('/inicio')
        }catch(error){
            if(error instanceof Error){
                setError(error.message);
            }
            setError('Error desconocido durante el login');
        }
    }
    return(
        <Layout>
            <div className="login-container">
                <div className="login-content">
                    <h2>Iniciar sesión</h2>
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="login-form-inner-div">
                            <label htmlFor="username">Usuario</label>
                            <input 
                                id="username"
                                value={username}
                                type="text"
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-form-inner-div">
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                id="password"
                                type="password"
                                value= {password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Acceder</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Login;