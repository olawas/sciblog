import Axios from "@/services/Axios"

const registro = async ({nombre, apellido, area_especializacion, organizacion}) =>{
  const response = await Axios.post('/usuarios', { nombre, apellido, area_especializacion, organizacion } )
  return response
}
export {registro}