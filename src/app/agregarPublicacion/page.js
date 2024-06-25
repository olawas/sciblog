"use client"// Importaciones necesarias
import { useRouter } from 'next/navigation'; // Asegúrate de importar desde 'next/router'
import { Input, Textarea, Button } from '@nextui-org/react';
import TagsSelection from '@/components/TagsSelection';
import { useState } from 'react';
import { useMutation } from 'react-query';
import Axios from '@/services/Axios';

export default function Component() {
  const router = useRouter(); // Inicializa useRouter
  const [tags, setTags] = useState([]);
  const mutationFn = async (data) => await Axios.post('/estudios', data);
  const postMutation= useMutation(mutationFn, {
    onError(err, variables, onMutateValue) {
       // error handling logic
       // fires after the mutate-level handler
    }
  })
  const [titulo, setTitulo] = useState(''); // Inicializa el estado del título
  const [descripcion, setDescripcion] = useState(''); // Inicializa el estado de la descripción
  const [enlace, setEnlace] = useState(''); // Inicializa el estado del enlace (linkPowerBi
  // Inicializa el estado de las etiquetas [tags
  return (
    <div className="flex h-full w-full items-center justify-center bg-background dark:bg-[#3f3d56] px-4">
      <div className="w-full max-w-xl rounded-lg bg-azul p-8 shadow-lg border border-gray-300 dark:bg-gray-950">
        <form>
          <div className='mb-4 text-white'>
            <Input
              type="text"
              label="Título"
              labelPlacement="outside-left"
              placeholder="Título de la publicación"
              value={titulo}
              onValueChange={(value) => setTitulo(value)}
              classNames={{label: 'text-white', mainWrapper:'w-full', inputWrapper: 'bg-slate-100'}}
            />
          </div>
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
              value={enlace}
              onValueChange={(value) => setEnlace(value)}
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
              value={descripcion}
              onValueChange={(value) => setDescripcion(value)}
              className="dark:text-gray-300 dark:placeholder-gray-500"
            />
          </div>
          <TagsSelection onChange={(values)=>setTags(values)} values={tags}/>
          <Button
            className="w-full mb-2 mt-4 rounded-md bg-primary dark:bg-gray-800 px-4 py-2 text-on-primary dark:text-white hover:bg-[#2f2c44] dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gray-800 focus:ring-offset-2"
            onClick={(e) => {
              e.preventDefault();
              postMutation.mutate({titulo, descripcion, tags, enlace});

    //          router.push('/publicacion'); // Navega a la ruta deseada
            }}
          >
            Terminar publicación
          </Button>
        </form>
      </div>
    </div>
  );
}
