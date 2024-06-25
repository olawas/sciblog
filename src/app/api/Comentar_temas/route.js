import db from '@/libs/db';
import { NextResponse } from 'next/server';

// Handler para solicitudes GET
export async function GET() {
  try {
    const comentarios = await prisma.comentario.findMany();
    return NextResponse.json(comentarios, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "ERROR AL OBETENER COMENTARIO" }, { status: 500 });
  }
}

// Handler para solicitudes POST
export async function POST(req) {
  const request = await req.json()

  if (!request.temaId) {
    return NextResponse.json({ error: "FALTA EL PARAMETRO temaId" }, { status: 400 });
  }


  if (!request.Texto) {
    return NextResponse.json({ error: "FALTA Texto EN EL CUERPO DE LA SOLICITUD" }, { status: 400 });
  }

  try {
    const comentario = await prisma.comentario.create({
      data: {
        Texto: request.Texto,
        Fecha: new Date(),
        tema: { connect: { id: parseInt(request.temaId) } },
      },
    });
    return NextResponse.json(comentario, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "ERROR CREANDO EL COMENTARIO" }, { status: 500 });
  }
}
