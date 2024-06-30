import Estudio from '@/services/Estudio';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const estudios = await Estudio.getLatestThree();
    return NextResponse.json(estudios);
  } catch (e) {
    console.error('SERVER ERROR', e);
    return NextResponse.json({ message: 'Error en el servidor' }, { status: 500 });
  }
}