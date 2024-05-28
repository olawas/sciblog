import Axios from "@/services/Axios"

const crearTema = async ({nombre, contenido}) =>{
  const response = await Axios.post('/foro', { nombre, contenido } )
  return response
}
export { crearTema }