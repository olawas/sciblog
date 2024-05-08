"use client"
import { Button } from '@nextui-org/react';

import Link from 'next/link'; // Importa Link de Next.js

export default function Component() {

    return (
        <div className="flex h-full w-full items-center justify-center bg-[#3f3d56] px-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-950">
                <h2 className="mb-4 text-2xl text-white font-bold">Eliminar cuenta</h2>
                <p className="mb-6 text-gray-500 dark:text-gray-400">
                    Ingresa tu correo electrónico y contraseña para confirmar la eliminación de tu cuenta.
                </p>
                <form>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-950 dark:text-gray-100 dark:placeholder-gray-400"
                            id="email"
                            placeholder="ejemplo@correo.com"
                            type="email"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-950 dark:text-gray-100 dark:placeholder-gray-400"
                            id="password"
                            placeholder="••••••••"
                            type="password"
                        />
                    </div>
                    <Button
                        className="w-full mb-2 mt-4 rounded-md bg-[#3f3d56] px-4 py-2 text-white hover:bg-[#2f2c44] focus:outline-none focus:ring-2 focus:ring-[#3f3d56] focus:ring-offset-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        type="submit"
                    >
                        Eliminar
                    </Button>

                    <Link href="/perfil">
                        <Button
                            auto
                            rounded
                            className="w-full bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800"
                        >
                            Cancelar
                        </Button>
                    </Link>
                    
                </form>
            </div>
        </div>
    )
}