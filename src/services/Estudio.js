import prisma from "@/libs/db"

// use `prisma` in your application to read and write data in your DB
export default {
  create: async ({titulo, descripcion, tags}) => {
    console.log('n',tags)
    await prisma.Estudio.create({
      data:{
        titulo,
        descripcion,
        tags,
        datasetId: 1, // por ahora es un numero cualquiera
      }
    })
  },
  findAll: async ({tags}) => {
    try{
      //console.log('n',tags)
      return await prisma.Estudio.findMany({
        where: {
          tags: {
            hasSome: tags,
          }
        }
      })
    }
    catch(e){
      return null
    }
  }
}