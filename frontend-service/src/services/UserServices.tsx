const API_URL = 'http://localhost:8090';

export const getNotas = async () => {
    try{
        const id = localStorage.getItem("id");
        const response = await fetch(API_URL+"/notas"+`/${id}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }

        })
        if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const notas =  await response.text();
        if(!notas){
            return [];
        }
        return JSON.parse(notas);
    } catch (error) {
        console.error('Error obteniendo las notas:', error);
        return null;
    }
}