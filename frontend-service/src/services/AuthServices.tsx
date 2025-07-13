import axios from 'axios';

const API_URL = 'http://localhost:8090/auth/login';

export const login = async (username: string, password: string) => {
    try{
        const response = await axios.post(API_URL,{
            username:username,
            password:password,
        })
        return response.data.token;
    }catch(error: unknown){
        if(axios.isAxiosError(error)){
            throw error.response?.data || "Error al iniciar sesión";
        }
        throw "Error desconocido al iniciar sesión.";
    }
};