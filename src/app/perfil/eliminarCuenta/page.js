"use client"
import { Button } from '@nextui-org/react';
import { Modal, ModalHeader, ModalContent, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

import Link from 'next/link'; // Importa Link de Next.js

export default function Component() {
    const { isOpen, onOpenChange } = useDisclosure();

    return (
        <div className="flex h-full w-full items-center justify-center bg-background dark:bg-[#3f3d56] px-4">
            <div className="w-full max-w-xl rounded-lg bg-white p-8 shadow-lg border border-gray-300 dark:bg-gray-950">
                <h2 className="mb-4 text-2xl font-bold text-foreground dark:text-white">Deshabilitar cuenta</h2>
                <p className="mb-6 text-foreground dark:text-gray-400">
                    Ingresa tu correo electrónico y contraseña para confirmar el deshabilitar de tu cuenta.
                </p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4"> {/* Agregado mb-4 para espacio debajo del label */}
                        <label className="mb-2 block text-sm font-medium text-foreground dark:text-gray-300" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-foreground dark:text-gray-100 dark:border-gray-600 dark:bg-gray-950 dark:placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary"
                            id="email"
                            placeholder="ejemplo@correo.com"
                            type="email"
                        />
                    </div>
                    <div className="mb-4"> {/* Agregado mb-4 para espacio debajo del label */}
                        <label className="mb-2 block text-sm font-medium text-foreground dark:text-gray-300" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-foreground dark:text-gray-100 dark:border-gray-600 dark:bg-gray-950 dark:placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary"
                            id="password"
                            placeholder="••••••••"
                            type="password"
                        />
                    </div>
                    <Button
                        className="w-full mb-2 mt-4 rounded-md bg-primary dark:bg-gray-800 px-4 py-2 text-on-primary dark:text-white hover:bg-[#2f2c44] dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gray-800 focus:ring-offset-2"
                        type="submit"
                        onPress={() => onOpenChange(true)}
                    >
                        Deshabilitar
                    </Button>

                    <Link href="/perfil">
                        <Button
                            auto
                            rounded
                            className="w-full bg-terciary-bg dark:bg-red-700 dark:hover:bg-red-800"
                            style={{ color: '#0E102F' }}
                        >
                            Cancelar
                        </Button>
                    </Link>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}
                        className="dark:bg-gray-800 dark:text-white">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1 text-foreground dark:text-white">¿Seguro quieres eliminar tu cuenta?</ModalHeader>

                                    <ModalBody>
                                        <p className="text-foreground dark:text-gray-400">
                                            Al confirmar, tu cuenta será deshabilitada.
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
