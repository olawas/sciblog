import db from '@/libs/db';

import { NextResponse } from 'next/server';
import Respuesta from '@/services/Respuesta'
export async function POST(req) {
	try {
		const {content,comentarioId} = await req.json();
		const respuesta = await Respuesta.create({
			comentarioId: comentarioId,
			content: content
		})
    return  NextResponse.json({message: 'Respuesta creada correctamente', data: respuesta,}, {status: 200})
	} catch (e) {
		console.error('SERVER ERROR CREANDO RESP', e)
		return NextResponse.json({ message: 'error creando respuesta'}, { status: 500 });
	}
}

export async function GET(req){
	try {
		const url = new URL(req.url)
		const param = url.searchParams.get("comentarioId")
    	const comentarioId = parseInt(param) // este debe ser un int (importante)
		const respuestas = await Respuesta.findAll({comentarioId: comentarioId})
    return  NextResponse.json({message: 'Respuesta encontrada correctamente', data: respuestas,}, {status: 200})
	} catch (e) {
		console.error('SERVER ERROR OBTENIENDO DATA', e)
		return NextResponse.json({ message: 'error encontrando respuestas'}, { status: 500 });
	}
}