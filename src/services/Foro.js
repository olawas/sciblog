import prisma from "@/libs/db"

export default {
  create: async ({nombre, contenido, email_usuario}) => {
    return await prisma.$transaction( 
      async t=>{
        const usuario = await t.usuario.findUnique({
          where: {
            email: email_usuario
          },
        })
        return await t.Tema.create({
          data:{
            nombre,
            contenido,
            usuarioId: usuario.id
          }
        })
      }
    )
  },

}