import db from '@/libs/db';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {


    const requestData = await request.json();
    
    try {
        const newtema = await db.tema.create({
            data: requestData
        });

        return NextResponse.json(newtema);
    } catch (error) {
        return NextResponse.json({ message: error.toString() }, { status: 500 });
    }
}