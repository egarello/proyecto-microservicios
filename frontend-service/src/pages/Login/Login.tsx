import React, { useState } from 'react'

const Login: React.FC = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        //Acá tengo que hacer la validación de la entrada de usuario.
    }
    return(
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
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
            </form>

        </div>
    );
}

export default Login;