"use client"
import { Input, Button } from '@nextui-org/react';
import { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';

import Link from 'next/link'; // Importa Link de Next.js

export default function EmailEditorComponent() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSave = () => {
        // Aquí iría la lógica para guardar el correo
        console.log('Correo guardado:', email);
    };

    const handleCancel = () => {
        // Aquí iría la lógica para cancelar la edición
        console.log('Edición cancelada');
    };

    return (
        <div className="flex h-full w-full items-center justify-center bg-[#3f3d56] px-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Editor de correo</h2>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="newEmail">
                        Nuevo correo:
                    </label>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Nuevo correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="newEmail"
                        type="text"
                    />
                </div>
                {error && (
                    <div className="mt-4 flex items-center justify-between bg-red-500 text-white p-2 rounded">
                        <span>{error}</span>
                        <XIcon className="h-5 w-5 cursor-pointer" onClick={() => setError('')} />
                    </div>
                )}
                <div className="flex justify-between mt-4">
                    <Link href="/perfil">
                        <Button auto flat color="success" onClick={handleSave}>
                            Guardar
                        </Button>
                    </Link>
                    <Link href="/perfil">
                        <Button auto flat color="error" onClick={handleCancel}>
                            Cancelar
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
