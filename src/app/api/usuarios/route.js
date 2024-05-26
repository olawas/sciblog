import Usuario from "@/services/Usuario"
import { NextResponse } from "next/server"
import db from "@/libs/db"

export const POST = async (req)  => {
  try{
    const token = JSON.parse(req.cookies.get('auth').value)
    if(!token) return nextResponse.json({message: 'Necesita tener sesión iniciada'}, {status: 401,})
    if(token.registered === true) return NextResponse.json({message: "Usuario ya registrado"}, {status: 409,})
    const {nombre, apellido, area_especializacion} = await req.json()
    console.log('n9',nombre)
    const usuario = await Usuario.register({
      email: token.email,
      nombre: nombre,
      apellido: apellido,
      area_especializacion: area_especializacion,
      password: '',
    })
    const response = NextResponse.json({message: 'Usuario registrado correctamente', data: usuario,}, {status: 200})
    response.cookies.delete('next-auth.session-token')
    return response
  }
  catch(e){
    console.error('SERVER ERROR', e)
    return NextResponse.json({message: 'Error en el servidor'}, {status:500})
  }
}

export async function GET(){
  const usuarios = await db.usuario.findMany()
  return NextResponse.json(usuarios)
}