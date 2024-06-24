import db from '@/libs/db';
import Estudio from "@/services/Estudio"
import { NextResponse } from "next/server" 
import db from '@/libs/db';

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

export const POST = async (req)  => {
  try{

    const nuevo_post = await req.json()
    console.log('n9',nuevo_post)

    const estudio = await db.estudio.create({
      data: nuevo_post
    })
    if (!estudio){
      return NextResponse.json({message: "ERROR AL CREAR ESTUDIO"},{status:400})
    }

    //const response = NextResponse.json({message: 'Estudios encontrados correctamente', data: estudio,}, {status: 200})
    //response.cookies.delete('next-auth.session-token')
    return NextResponse.json(estudio); //response
  }
  catch(e){
    console.error('SERVER ERROR', e)
    return NextResponse.json({message: 'Error en el servidor'}, {status:500})
  }
}


export async function POST(req) {
	try {
		const {titulo, descripcion, tags} = await req.json();
		const estudio = await Estudio.create({
			titulo: titulo,
			descripcion: descripcion,
			tags: tags
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
