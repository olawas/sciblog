import prisma from '@/libs/db';
import Estudio from '@/services/Estudio';
import { NextResponse } from 'next/server';


export async function GET(req, {params}) {
  try {
    const id = params.id;
    const estudio = await Estudio.findByPk(parseInt(id));
    console.log(estudio)
    if (!estudio) {
      return NextResponse.json({ message: 'Estudio not found' }, { status: 404 });
    }
    return NextResponse.json(estudio);
  } catch (e) {
    console.error('SERVER ERROR', e);
    return NextResponse.json({ message: 'Error en el servidor' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const id = params.id;
    const estudio = await prisma.estudio.delete({
      where: {
        id: parseInt(id),
      },
    });
    if (!estudio) {
      return NextResponse.json({ message: 'Estudio not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Estudio deleted successfully' });
  } catch (e) {
    console.error('SERVER ERROR', e);
    return NextResponse.json({ message: 'Error en el servidor' }, { status: 500 });
  }
}