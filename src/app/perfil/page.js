"use client"
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./data";
import { Avatar } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Card, CardBody } from "@nextui-org/react";
import { TrashIcon, PencilIcon, ShareIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'; // Importa Link de Next.js

const Componente = () => {
  return (
    <div className="bg-white p-8 w-full">
      {/* Primera columna con 3 divs en fila */}
      <div className="flex w-full mb-24">
        <div className="w-1/3">
          <Link href="/perfil/eliminarCuenta">
            <button className="p-2 rounded bg-red-500 hover:bg-red-700 text-white">
              <TrashIcon className="h-5 w-5" />
            </button>
          </Link>
          <Link href="/perfil/editarPerfil">
            <button className="p-2 rounded bg-blue-500 hover:bg-blue-700 text-white">
              <PencilIcon className="h-5 w-5" />
            </button>
          </Link>
          <div className="">
            <div className="font-bold text-lg">Doofenshmirtz</div>
            <div className="text-sm">Doctor</div>
            <div className="text-sm">Clínica Universitaria</div>
          </div>
        </div>
        <div className="flex w-1/3 justify-center">
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
        </div>

        <div className="flex-col w-1/3 space-y-2">
          <div className="flex justify-end"> 
            <Select
              items={animals}
              label="Elegir Tema"
              placeholder="Selecciona un tema"
              className="max-w-xs"
            >
              {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>}
            </Select>
          </div>
          <div className="flex justify-end space-x-2 ">
            <button className="flex p-2 rounded bg-green-500 hover:bg-green-700 text-white">
              <ShareIcon className="h-5 w-5 mr-2" /> Compartir Perfil
            </button>
            <Link href="/perfil/editarEmail">
              <button className="flex p-2 rounded bg-blue-500 hover:bg-blue-700 text-white">
                <EnvelopeIcon className="h-5 w-5 mr-2" /> Editar Email
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Segunda columna */}
      <Card>
        <CardBody>
        <div className="flex justify-center mx-6 ">
          
          <div className="flex w-1/2 justify-center">
            <Dropdown >
              <DropdownTrigger>
                <Button
                  variant="bordered"
                >
                  Publicaciones Guardadas
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="new" href="/#">Publicación</DropdownItem>
                <DropdownItem key="copy" href="/#">Publicación</DropdownItem>
                <DropdownItem key="new" href="/#">Publicación</DropdownItem>
                <DropdownItem key="copy" href="/#">Publicación</DropdownItem>
                <DropdownItem key="new" href="/#">Publicación</DropdownItem>
                <DropdownItem key="copy" href="/#">Publicación</DropdownItem>
                <DropdownItem key="new" href="/#">Publicación</DropdownItem>
                <DropdownItem key="copy" href="/#">Publicación</DropdownItem>
                <DropdownItem key="new" href="/#">Publicación</DropdownItem>
                <DropdownItem key="copy" href="/#">Publicación</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="flex w-1/2 justify-center">
            <Dropdown >
              <DropdownTrigger>
                <Button
                  variant="bordered"
                >
                  Mis Publicaciones
                </Button>
              </DropdownTrigger>
              
              <DropdownMenu>
                <DropdownItem key="new" href="/#">Publicación</DropdownItem>
                <DropdownItem key="copy" href="/#">Publicación</DropdownItem>
                <DropdownItem key="new" href="/#">Publicación</DropdownItem>
                <DropdownItem key="copy" href="/#">Publicación</DropdownItem>
                <DropdownItem key="new" href="/#">Publicación</DropdownItem>
                <DropdownItem key="copy" href="/#">Publicación</DropdownItem>
                <DropdownItem key="new" href="/#">Publicación</DropdownItem>
                <DropdownItem key="copy" href="/#">Publicación</DropdownItem>
                <DropdownItem key="new" href="/#">Publicación</DropdownItem>
                <DropdownItem key="copy" href="/#">Publicación</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
            
        </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Componente;