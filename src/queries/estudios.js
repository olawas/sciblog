import Axios from "@/services/Axios"

const busca = async ({busqueda}) =>{
  const response = await Axios.get('/estudios', { busqueda } )
  return response
}
export {busca}