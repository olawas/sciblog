import db from '@/libs/db';
import Estudio from "@/services/Estudio"
import { NextResponse } from "next/server" 

export const GET = async ()  => {
  try{
    const estudios = await db.estudio.findMany() //arreglo de coincidencias con busqueda

    //const response = NextResponse.json({message: 'Estudios encontrados correctamente', data: estudio,}, {status: 200})
    //response.cookies.delete('next-auth.session-token')
    return NextResponse.json(estudios);  //response
  }
  catch(e){
    console.error('SERVER ERROR', e)
    return NextResponse.json({message: 'Error en el servidor'}, {status:500})
  }
}

export async function POST(req) {
	try {
		const {titulo, descripcion, tags, enlace} = await req.json();
    const token = JSON.parse(req.cookies.get('auth').value) 
    console.log(token.usuario.id)
		const estudio = await Estudio.create({
			titulo: titulo,
			descripcion: descripcion,
			tags: tags,
      enlace: enlace,
      userId:token.usuario.id
		})
    return  NextResponse.json({message: 'Tema creado correctamente', data: estudio,}, {status: 200})
	} catch (e) {
		console.error('SERVER ERROR CREANDO FORO', e)
		return NextResponse.json({ message: 'error creando estudio'}, { status: 500 });
	}
}
// dataSet Dataset  @relation(fields: [datasetId], references: [id])
// tuve que desabilitar por mientras este parametro de Estudio
// estudios Estudio[]
// y este en Dataset
// en el archivo schema.prisma, ya que aun no se crean Dataset
