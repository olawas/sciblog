"use client"// Importaciones necesarias
import { useRouter } from 'next/navigation'; // Asegúrate de importar desde 'next/router'
import { Input, Textarea, Button } from '@nextui-org/react';

export default function Component() {
  const router = useRouter(); // Inicializa useRouter

  return (
    <div className="flex h-full w-full items-center justify-center bg-background dark:bg-[#3f3d56] px-4">
      <div className="w-full max-w-xl rounded-lg bg-azul p-8 shadow-lg border border-gray-300 dark:bg-gray-950">
        <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">Nueva Publicación</h2>
        <form>
          <div className="mb-4"> {/* Agregado mb-4 para espacio debajo del Input */}
            <label className="mb-2 block text-sm font-medium text-foreground dark:text-gray-300" htmlFor="linkPowerBi">
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
              className="dark:text-gray-300 dark:placeholder-gray-500"
            />
          </div>
          <div className="mb-4"> {/* Agregado mb-4 para espacio debajo del Textarea */}
            <label className="mb-2 block text-sm font-medium text-foreground dark:text-gray-300" htmlFor="description">
              Añadir descripción
            </label>
            <Textarea
              bordered
              fullWidth
              color="primary"
              placeholder="Escribe una descripción aquí"
              id="description"
              className="dark:text-gray-300 dark:placeholder-gray-500"
            />
          </div>
          <Button
            className="w-full mb-2 mt-4 rounded-md bg-primary dark:bg-gray-800 px-4 py-2 text-on-primary dark:text-white hover:bg-[#2f2c44] dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gray-800 focus:ring-offset-2"
            onClick={(e) => {
              e.preventDefault();
              console.log('El botón ha sido presionado');
              router.push('/publicacion'); // Navega a la ruta deseada
            }}
          >
            Terminar publicación
          </Button>
        </form>
      </div>
    </div>
  );
}
