import prisma from "@/libs/db"

// use `prisma` in your application to read and write data in your DB
export default {
  findMany: async (busqueda) => {
    try{
      const myArray = busqueda.split(" ");
      return await prisma.estudio.findMany({
        where: {
          tags: {
            in: myArray,
          },
        },
      })
    }
    catch(e){
      return null
    }
  },
  //register: async ({nombre, apellido, email, area_especializacion, password}) => {
  //  await prisma.Usuario.create({
  //    data:{
  //      nombre,
  //      apellido,
  //      email,
  //      area_especializacion,
  //      password
  //    }
  //  })
  //}
}