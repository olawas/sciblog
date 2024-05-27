"use client"
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { Input, Textarea, Button } from '@nextui-org/react';

export default function Component() {
  const router = useRouter(); // Initialize useRouter

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#3f3d56] px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-950">
        <h2 className="mb-4 text-2xl text-white font-bold">Nueva Publicación</h2>
        <form>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="linkPowerBi">
              Link Power BI
            </label>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Ingresa el enlace de Power BI"
              id="linkPowerBi"
              type="text"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="description">
              Añadir descripción
            </label>
            <Textarea
              bordered
              fullWidth
              color="primary"
              placeholder="Escribe una descripción aquí"
              id="description"
            />
          </div>
          <Button
            className="w-full mb-2 mt-4 rounded-md bg-[#3f3d56] px-4 py-2 text-white hover:bg-[#2f2c44] focus:outline-none focus:ring-2 focus:ring-[#3f3d56] focus:ring-offset-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={(e) => {
              e.preventDefault();
              console.log('El botón ha sido presionado');
              router.push('/publicacion'); // Navigate to the desired route
            }}
          >
            Terminar publicación
          </Button>
        </form>
      </div>
    </div>
  );
}