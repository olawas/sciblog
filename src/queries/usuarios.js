import Axios from "@/services/Axios"

const registro = async ({nombre, apellido, area_especializacion}) =>{
  const response = await Axios.post('/usuarios', { nombre, apellido, area_especializacion } )
  return response
}
export {registro}