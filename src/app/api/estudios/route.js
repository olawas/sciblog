import db from '@/libs/db';
import Estudio from "@/services/Estudio"
import { NextResponse } from "next/server" 

export async function GET(req){
  try{
    const url = new URL(req.url)
    const myArray = url.searchParams.get("tags")
    const tags = myArray.split(" ")
    //console.log('n9',myArray)
    const estudios = await Estudio.findAll({ tags: tags }) //arreglo de coincidencias con busqueda
    const response = NextResponse.json({message: 'Estudios encontrados correctamente', data: estudios,}, {status: 200})
    //response.cookies.delete('next-auth.session-token')
    return response
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
