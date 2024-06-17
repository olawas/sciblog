import Axios from "@/services/Axios"

const busca = async () =>{
  const response = await Axios.get('/estudios', { myArray } )
  return response
}
const registro = async ({titulo, descripcion, tags}) =>{
  const response = await Axios.post('/estudios', { titulo, descripcion, tags } )
  return response
}
const buscaTag = async () =>{
  const response = await Axios.get('/estudios?tags=', { } )
  return response
}
export {busca, registro, buscaTag}
