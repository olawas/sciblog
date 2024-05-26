"use client"
import SearchBar from '@/components/SearchBar';
import PostCarousel from '@/components/PostCarousel';
import { Select, SelectItem, Button } from '@nextui-org/react';
import { useState } from 'react';
import { fechasPublicacion, areasMedicas, paises, universidades, idiomas } from "./data";

import Link from 'next/link'; // Importa Link de Next.js

export default function Component() {
    const [fechaPublicacion, setFechaPublicacion] = useState('');
    const [area, setArea] = useState('');
    const [pais, setPais] = useState('');
    const [universidad, setUniversidad] = useState('');
    const [idioma, setIdioma] = useState('');

    const handleFilter = () => {
        // Lógica para manejar el filtrado
        console.log({
            fechaPublicacion,
            area,
            pais,
            universidad,
            idioma
        });
    };
    
    return (
        <div className="bg-white p-8 w-full">
            {/* Primera columna con 3 divs en fila */}
            <div className='flex flex-col w-full justify-center space-y-4 items-center'>
                <h1 className='font-semibold text-3xl'>Buscar</h1>
                <Link href="/?"> 
                    <SearchBar className='w-full' />
                </Link>
                <div className='w-full p-8 rounded-lg bg-[#3f3d56]'>
                    <div className="text-white text-lg mb-2">FILTROS</div>
                    <div className="flex space-x-2 mb-4">
                        <Select
                            clearable
                            bordered
                            placeholder="Fecha de publicación"
                            onChange={setFechaPublicacion}
                            className="max-w-xs"
                        >
                            {fechasPublicacion.map((fecha) => (
                                <SelectItem key={fecha.value}>{fecha.label}</SelectItem>
                            ))}
                        </Select>
                        <Select
                            clearable
                            bordered
                            placeholder="Área"
                            onChange={setArea}
                            className="max-w-xs"
                        >
                            {areasMedicas.map((area) => (
                                <SelectItem key={area.value}>{area.label}</SelectItem>
                            ))}
                        </Select>
                        <Select
                            clearable
                            bordered
                            placeholder="País"
                            onChange={setPais}
                            className="max-w-xs"
                        >
                            {paises.map((pais) => (
                                <SelectItem key={pais.value}>{pais.label}</SelectItem>
                            ))}
                        </Select>
                        <Select
                            clearable
                            bordered
                            placeholder="Universidad/Institución"
                            onChange={setUniversidad}
                            className="max-w-xs"
                        >
                            {universidades.map((universidad) => (
                                <SelectItem key={universidad.value}>{universidad.label}</SelectItem>
                            ))}
                        </Select>
                        <Select
                            clearable
                            bordered
                            placeholder="Idioma"
                            onChange={setIdioma}
                            className="max-w-xs"
                        >
                            {idiomas.map((idioma) => (
                                <SelectItem key={idioma.value}>{idioma.label}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    <Button auto color="primary" onClick={handleFilter}>
                        Filtrar
                    </Button>
                </div>                
            </div>

            <div className='w-full justify-center flex flex-row'>
                <PostCarousel className="w-4/5" />
            </div>
        </div>
    )
}