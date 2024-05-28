import db from '@/libs/db';

import { NextResponse } from 'next/server';
import Foro from '@/services/Foro'
export async function POST(req) {
	try {
		const {nombre, contenido} = await req.json();
		const token = JSON.parse(req.cookies.get('auth').value)
		const tema = await Foro.create({
			email_usuario: token.email,
			nombre: nombre,
			contenido: contenido
		})
    return  NextResponse.json({message: 'Tema creado correctamente', data: tema,}, {status: 200})
	} catch (e) {
		console.error('SERVER ERROR CREANDO FORO', e)
		return NextResponse.json({ message: 'error creando tema de foro'}, { status: 500 });
	}
}
