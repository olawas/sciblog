import prisma from '@/libs/db';
import Estudio from '@/services/Estudio';
import { NextResponse } from 'next/server';


export async function GET(req, { params }) {
  try {
    const userId = parseInt(params.userId);
    const estudios = await prisma.estudio.findMany({ where: { userId } });
    console.log(estudios);
    if (estudios.length === 0) {
      return NextResponse.json({ message: 'No estudios found for the user' }, { status: 404 });
    }
    return NextResponse.json(estudios);
  } catch (e) {
    console.error('SERVER ERROR', e);
    return NextResponse.json({ message: 'Error en el servidor' }, { status: 500 });
  }
}
