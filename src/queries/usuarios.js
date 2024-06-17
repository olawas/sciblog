import Axios from "@/services/Axios"

const registro = async ({nombre, apellido, area_especializacion, organizacion}) =>{
  const response = await Axios.post('/usuarios', { nombre, apellido, area_especializacion, organizacion } )
  return response
}
const getPerfilByEmail = async ({email}) => {
  const response = await Axios.get(`/usuarios/${encodeURIComponent(email)}`)
  return response
}
const getPerfilById = async ({id}) => {
  const response = await Axios.get(`/usuarios/${id}`)
  return response
}
export {registro, getPerfilById, getPerfilByEmail}