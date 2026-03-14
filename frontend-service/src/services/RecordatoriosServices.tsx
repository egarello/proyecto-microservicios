import axios from 'axios';

const API_URL = 'http://localhost:8090';

export const getActividades = async () => {
    try{
        const token = localStorage.getItem("token");
        const response = await axios.get(API_URL+"/actividades",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    }catch(error: unknown){
        if(axios.isAxiosError(error)){
            throw error.response?.data || "Error al obtener las actividades";
        }
        throw "Error desconocido al obtener las actividades";
    }
};

export const getTareas = async () => {
    try{
        console.log("TOKEN:", localStorage.getItem("token"));
        const token = localStorage.getItem("token");
        const response = await axios.get(API_URL+"/tareas",{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data;
    }catch(error: unknown){
        console.error("ERROR COMPLETO:", error);

        if(axios.isAxiosError(error)){
            console.error("DATA:", error.response?.data);
            console.error("STATUS:", error.response?.status);
            console.error("HEADERS:", error.response?.headers);
            throw error.response?.data || "Error al obtener las tareas";
        }
        throw "Error desconocido al obtener las tareas";
    }
};