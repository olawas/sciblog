import Axios from "@/services/Axios"

const updatePerfil = async ({nombre, apellido, area_especializacion, organizacion}) =>{
  const response = await Axios.put('/usuarios', { nombre, apellido, area_especializacion, organizacion } )
  return response
}
export { updatePerfil}