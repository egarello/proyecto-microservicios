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

export const deleteNotaById = async (idNota: number) => {
    const response = await fetch(API_URL+`/notas/${idNota}`,{
        method:'DELETE',
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) {
        throw new Error(`Error al eliminar la nota: ${response.status}`);
    }
    if (response.status === 204) {
        // No content to parse, simplemente retornamos
        return null;
    }

    // Si por alguna razón el backend devuelve contenido, lo parseamos
    return response.json();
}

interface NotaCreada{
    contenido: string,
    instanteCreacion: Date,
    ultimaModificacion: Date, 
} 

export const agregarNuevaNota = async (notaACrear: NotaCreada) => {
    const response = await fetch(API_URL+"/notas", {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify(notaACrear),
    })
    if(!response.ok) {
        throw new Error(`Error al crear la nota: ${response.status}`);
    }
    return response.json();
}