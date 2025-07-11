import axios from "axios";

// Configura la URL base de tu back-end
// const API_BASE_URL = "http://localhost:8080"; Sin el API Gateway 
const API_BASE_URL = "http://localhost:8090"; //con API Gateway
const MATERIAS_SERVICE = "proyectofacultad-service"
export const getMaterias = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${MATERIAS_SERVICE}/materias`);
    return response.data;
  } catch (error) {
    console.error("Error fetching materias:", error);
    throw error;
  }
};
export const getPromedio = async () => {
  try{
    const response = await axios.get(`${API_BASE_URL}/${MATERIAS_SERVICE}/materias/promedio`)
      return response.data;
  }catch(error){
    console.error("Error fetching promedio: ", error);
    throw error;
  }
  
}

export const getAños = async () => {
  try{
    const response = await axios.get(`${API_BASE_URL}/${MATERIAS_SERVICE}/anios`)
    return response.data;
  }
  catch(error){
    console.error("Error fetching años:", error);
    throw error;
  }
}

export const getProfesores = async () => {
  try{
    const response = await axios.get(`${API_BASE_URL}/${MATERIAS_SERVICE}/profesores`)
    return response.data;
  }catch(error){
    console.error("Error fetching profesores:", error);
    throw error;
  }
}

export const getActividadesPorMateria = async (id: number) => {
  try{
    const response = await axios.get(`${API_BASE_URL}/${MATERIAS_SERVICE}/materia/${id}/actividades`)
    return response.data.json;
  }catch(err){
    console.error("Error: ", err);
    return 
  }
}
