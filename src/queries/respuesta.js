import Axios from "@/services/Axios"

const crearRespuesta = async ({content, comentarioId}) =>{
  const response = await Axios.post('/respuesta', { content, comentarioId } )
  return response
}

const obtenerRespuesta = async () =>{
  const response = await Axios.get('/respuesta?comentarioId=', {  } )
  return response
}
export { crearRespuesta , obtenerRespuesta}