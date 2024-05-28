"use client"
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./data";
import { Avatar } from "@nextui-org/react";
import { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Card, CardBody } from "@nextui-org/react";
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalContent, useDisclosure } from '@nextui-org/react';
import { TrashIcon, PencilIcon, ShareIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'; // Importa Link de Next.js
import ThemeSwitch from "@/components/ThemeSwitch";

const Componente = () => {
  const { isOpen, onOpenChange } = useDisclosure();

  const [copied, setCopied] = useState(false);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // El mensaje "Copiado" desaparecerá después de 2 segundos
    }, () => {
      console.error('No se pudo copiar el texto');
    });
  };

  return (
    <div className="bg-white p-8 w-full">
      {/* Primera columna con 3 divs en fila */}
      <div className="flex w-full mb-24">
        <div className="w-1/3 space-x-1">
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
          <div>
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
            <ThemeSwitch></ThemeSwitch>
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              className="rounded-md text-white"
              color="success"
              onPress={() => onOpenChange(true)}
            >
              <ShareIcon className="h-5 w-5" />
              Compartir Perfil
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                <ModalHeader className="flex flex-col">Compartir Enlace</ModalHeader>
                <ModalBody>
                  <label
                    className="text-md text-gray-500 mb-4 cursor-pointer"
                    onClick={() => copyToClipboard('google.com')}
                  >
                    google.com
                  </label>
                  {copied && <div className="text-sm text-green-500">Copiado</div>}
                </ModalBody>
              </ModalContent>
            </Modal>
            <Link href="/perfil/editarEmail">
              <Button rounded-sm className="text-white bg-blue-500">
                <EnvelopeIcon className="h-5 w-5" /> Editar Email
              </Button>
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
                  className="w-full"
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
                  className="w-full"
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