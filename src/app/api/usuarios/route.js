import Usuario from "@/services/Usuario"
import { NextResponse } from "next/server"
import db from "@/libs/db"

export const POST = async (req)  => {
  try{
    const token = JSON.parse(req.cookies.get('auth').value)
    if(!token) return NextResponse.json({message: 'Necesita tener sesión iniciada'}, {status: 401,})
    if(token.registered === true) return NextResponse.json({message: "Usuario ya registrado"}, {status: 409,})
    const {nombre, apellido, area_especializacion, organizacion} = await req.json()
    const usuario = await Usuario.register({
      email: token.email,
      nombre: nombre,
      apellido: apellido,
      area_especializacion: area_especializacion,
      organizacion: organizacion,
    })
    const response = NextResponse.json({message: 'Usuario registrado correctamente', data: usuario,}, {status: 200})
    response.cookies.delete('next-auth.session-token')
    return response
  }
  catch(e){
    console.error('SERVER ERROR CREACION USUARIO', e)
    return NextResponse.json({message: 'Error en el servidor'}, {status:500})
  }
}

export async function PUT(req){
  try{
    const token = JSON.parse(req.cookies.get('auth').value) 
    if(!token) return NextResponse.json({message: 'Necesita tener sesión iniciada'}, {status: 401,})
    const {nombre, apellido, area_especializacion, organizacion} = await req.json()
    const result = await Usuario.updatePerfil({
      email: token.email,
      nombre: nombre,
      apellido: apellido,
      area_especializacion: area_especializacion,
      organizacion: organizacion
    })
    const response = NextResponse.json({message: 'Perfil de usuario editado correctamente', data: result,}, {status: 200})
    return response
  }
  catch(e){
    console.error('SERVER ERROR EDICION PERFIL', e)
    return NextResponse.json({message: 'Error en el servidor'}, {status:500})
  }
}

export async function GET(){
  const usuarios = await db.usuario.findMany()
  return NextResponse.json(usuarios)
}