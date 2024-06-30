import db from '@/libs/db';
import { NextResponse } from 'next/server';

export async function POST(req, res) {

      const data = await req.json();
      console.log(data);
      try {
        const newDataset = await db.dataset.create({
          data:data
        });
        return NextResponse.json(newDataset);
      } catch (error) {
        return NextResponse.json({message: "ERROR AL CREAR DATASET"},{status:500});
      }
  }

  export const GET = async (req) => {
    try {
      const datasets = await db.dataset.findMany();
      return new Response(JSON.stringify(datasets), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Error fetching datasets' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  };