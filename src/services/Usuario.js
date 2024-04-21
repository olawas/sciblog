import prisma from "@/libs/db"

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
  register: async ({nombre, apellido, email, area_especializacion, password}) => {
    await prisma.Usuario.create({
      data:{
        nombre,
        apellido,
        email,
        area_especializacion,
        password
      }
    })
  }
}