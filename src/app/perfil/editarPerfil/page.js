"use client"
import { Input, Button } from '@nextui-org/react';
import Link from 'next/link'; // Importa Link de Next.js
import { Modal, ModalHeader, ModalContent, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

export default function EditProfileComponent() {
    const { isOpen, onOpenChange } = useDisclosure();

    return (
        <div className="flex h-full w-full items-center justify-center bg-background dark:bg-[#3f3d56] px-4">
            <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg border border-gray-300 dark:bg-gray-950">
                <h2 className="mb-4 text-2xl font-bold text-foreground dark:text-white">Editar perfil</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-foreground dark:text-gray-300" htmlFor="nombre">
                            Nombre
                        </label>
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Espacio para ingresar el nombre del usuario"
                            id="nombre"
                            type="text"
                            className="dark:text-gray-300 dark:placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-foreground dark:text-gray-300" htmlFor="areaTrabajo">
                            Área de trabajo
                        </label>
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Espacio para describir el área de trabajo del usuario"
                            id="areaTrabajo"
                            type="text"
                            className="dark:text-gray-300 dark:placeholder-gray-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium text-foreground dark:text-gray-300" htmlFor="lugarTrabajo">
                            Lugar de trabajo
                        </label>
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Espacio para indicar el lugar de trabajo del usuario"
                            id="lugarTrabajo"
                            type="text"
                            className="dark:text-gray-300 dark:placeholder-gray-500"
                        />
                    </div>
                    <Button
                        auto
                        rounded
                        className="w-full mb-2 mt-4 bg-primary dark:bg-green-700 dark:hover:bg-green-800 px-4 py-2 text-on-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-green-700 focus:ring-offset-2"
                        type="submit"
                        onPress={() => onOpenChange(true)}
                    >
                        Editar
                    </Button>
                    <Link href="/perfil">
                        <Button
                            auto
                            rounded
                            className="w-full bg-terciary-bg dark:bg-red-700 dark:hover:bg-red-800"
                            style={{ color: '#0E102F' }}
                            type="button"
                        >
                            Cancelar
                        </Button>
                    </Link>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}
                        className="dark:bg-gray-800 dark:text-white">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1 text-foreground dark:text-white">¿Seguro quieres editar el correo?</ModalHeader>
                                    <ModalBody>
                                        <p className="text-foreground dark:text-gray-400">
                                            Si confirmas, tu correo será editado.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Link href="/perfil">
                                            <Button color="error" variant="light" className="dark:bg-red-700 dark:hover:bg-red-800 dark:text-white" onPress={onClose}>
                                                No
                                            </Button>
                                        </Link>
                                        <Link href="/?">
                                            <Button color="primary" className="dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white" onPress={onClose}>
                                                Sí
                                            </Button>
                                        </Link>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </form>
            </div>
        </div>
    );
}

