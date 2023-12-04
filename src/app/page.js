"use client";
import { useState } from 'react';

function Botonsito() {
  return(
    <button className='border-2 border-gray-600 hover:bg-gray-400 active:m-2'>xd</button>
  )
}

export default function Home() {
  const [num, setNum] = useState(0);
  const arregloComponents = [];
  for (let i = 0; i < num; i++) {
    arregloComponents.push(
      <Botonsito key={i}/>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='text-black flex flex-col'>
        CAMBIE ESTO XD
        <button onClick={()=>setNum(num+1) }>Agregar 1</button>
        <div>
          cantidad de veces presionado: {num}
        </div>
        {
          arregloComponents
        }
      </div>
    </main>
  )
}
