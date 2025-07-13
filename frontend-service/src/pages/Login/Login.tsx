import React, { useState } from 'react'
import { login } from '../../services/AuthServices';

const Login: React.FC = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); 
        try{
            const token = await login(username, password);
            localStorage.setItem('token',token);
            setError('');
            console.log('Inicio de sesión exitoso. Token: ', token);
        }catch(error){
            if(error instanceof Error){
                setError(error.message);
            }
            setError('Error desconocido durante el login');
        }
    }
    return(
        <div className="login-container">
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
    );
}

export default Login;