import { Input, Button } from '@nextui-org/react';
import Link from 'next/link'; // Importa Link de Next.js

export default function EditProfileComponent() {
    return (
        <div className="flex h-full w-full items-center justify-center bg-[#3f3d56] px-4">
            <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg dark:bg-gray-950">
                <h2 className="mb-4 text-2xl text-white font-bold">Editar perfil</h2>
                <form className="space-y-4">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="nombre">
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
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="areaTrabajo">
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
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="lugarTrabajo">
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
                        />
                    </div>
                    <Button
                        auto
                        rounded
                        className="w-full mb-2 mt-4 bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
                        type="submit"
                    >
                        Editar
                    </Button>
                    <Link href="/perfil">
                        <Button
                            auto
                            rounded
                            className="w-full bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800"
                            type="button"
                        >
                            Cancelar
                        </Button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
