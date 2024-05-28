import Axios from "@/services/Axios"

const crearTema = async ({nombre, contenido}) =>{
  const response = await Axios.post('/foro', { nombre, contenido } )
  return response
}

const obtenerTemas = async () =>{
  const response = await Axios.get('/foro', {  } )
  return response
}
export { crearTema , obtenerTemas}