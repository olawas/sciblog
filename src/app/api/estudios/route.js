import Estudio from "@/services/Estudio"
import { NextResponse } from "next/server" 

export const GET = async (req)  => {
  try{

    const {busqueda} = await req.json()
    console.log('n9',busqueda)

    const estudios = await Estudio.findMany(busqueda) //arreglo de coincidencias con busqueda

    //const response = NextResponse.json({message: 'Estudios encontrados correctamente', data: estudio,}, {status: 200})
    //response.cookies.delete('next-auth.session-token')
    return estudios //response
  }
  catch(e){
    console.error('SERVER ERROR', e)
    return NextResponse.json({message: 'Error en el servidor'}, {status:500})
  }
}