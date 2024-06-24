import prisma from "@/libs/db"

export default {
  create: async ({content, comentarioId}) => {
    await prisma.Respuesta.create({
      data:{
        content,
        comentarioId,
      }
    })
  },
  findAll: async ({comentarioId}) => {
    return await prisma.Respuesta.findMany({
      where: {
        comentarioId: comentarioId,
      }
    })
  }
}