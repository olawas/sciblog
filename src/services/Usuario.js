import prisma from "@/libs/db"
import { getPerfilByEmail } from "@/queries/usuarios"

// use `prisma` in your application to read and write data in your DB
export default {
  findByEmail: async (email) => {
    try{
      return await prisma.usuario.findUnique({
        where: {
          email: email,
        },
      })
    }
    catch(e){
      return null
    }
  },
  getPerfilByEmail: async (email) => await prisma.usuario.findUnique({
        where: {
          email
        },
        select: {
          area_especializacion: true,
          nombre: true,
          apellido: true,
          organizacion: true
        },
      }),
  getPerfilById: async (id) => await prisma.usuario.findUnique({
        where: {
          id
        },
        select: {
          area_especializacion: true,
          nombre: true,
          apellido: true,
          organizacion: true
        },
      })
  ,
  register: async ({nombre, apellido, email, area_especializacion, organizacion}) => {
    await prisma.Usuario.create({
      data:{
        nombre,
        apellido,
        email,
        area_especializacion,
        organizacion,
      }
    })
  },
  updatePerfil: async ({nombre, apellido, email, area_especializacion, organizacion}) =>{
    await prisma.Usuario.update({
      where: {
        email,
      },
      data: {
        nombre,
        apellido,
        area_especializacion,
        organizacion,
      },
    })
  }
}