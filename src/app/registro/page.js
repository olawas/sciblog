"use client";

import { registro } from '@/queries/usuarios';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { useMutation } from 'react-query';
import { useState } from 'react'
import { useRouter, } from 'next/navigation'
import { useSession } from 'next-auth/react';
const Page = () => {
  const { data, status } = useSession()
  const especializaciones = [
    {
      label: 'Oncología',
      description: 'Especialización en carcinomas y enfermedades cancerigenas',
      value: 'Oncología',
    },
    {
      label: 'Pediatría',
      description: 'Sección infántil de la salud',
      value: 'Pediatría',
    },
    {
      label: 'Neurología',
      description: 'Estudio de la salud cerebral y sistema nerviosa',
      value: 'Neurología'
    }
  ]
  const router = useRouter()
  const registroMutation = useMutation({
    mutationFn: (data) => registro(data),
    onSuccess: () => {
      console.log('pushing')
      router.push('/registro/completado')

    },
    onError: (error) => console.error('error api registro', error)
  })

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [organizacion, setOrganizacion] = useState('')
  const [especializacion, setEspecializacion] = useState([])

  const onRegistrar = (event) => {
    event.preventDefault()
    console.log(especializacion)
    registroMutation.mutate({
      nombre, apellido, area_especializacion: [...especializacion][0], organizacion
    })
  }
  if (status === 'unauthenticated') router.push('/')
  return (
    <div className='w-full flex flex-col justify-start items-center p-8 md:mt-16'>
      <form onSubmit={onRegistrar} className='w-full max-w-3xl flex flex-col items-center space-y-4'>
        <div className="text-4xl mb-12 font-bold text-slate-700"> Registrar </div>
        <div className='text-sm text-slate-700 font-light text-center'>Hemos detectado que su cuenta es nueva por aquí. Proporcione más información sobre usted para terminar con el registro de la cuenta, podrá cambiarlo mas adelante si lo desea.</div>
        <div className='w-full m-2 flex flex-row space-x-2'>
          <Input id="name" type="name" label="Nombre" placeholder="Ingrese su nombre" value={nombre} onValueChange={setNombre} />
          <Input id="lastname" type="lastname" label="Apellido" placeholder="Ingrese su apellido" value={apellido} onValueChange={setApellido} />
        </div>
        <div className="w-full">
          <Select
            items={especializaciones}
            label="Área de especialización"
            placeholder="Eliga su área principal de desempeño académico"
            className="w-full placeholder:text-slate-400"
            name="especializacion"
            id="especializacion"
            onSelectionChange={setEspecializacion}
            selectedKeys={especializacion}
          >
            {(especializacion) => <SelectItem key={especializacion.value}>{especializacion.label}</SelectItem>}
          </Select>
        </div>
        <div className="w-full">
          <Input
            label="Organización"
            placeholder="Escriba la organización a la que pertenece"
            className="w-full placeholder:text-slate-400"
            name="organizacion"
            id="organizacion"
            onValueChange={setOrganizacion}
            value={organizacion}
          />
        </div>

        <div className='w-full'>
          <Button type='submit'>Registrarse</Button>
        </div>
      </form>
    </div>
  )
}

export default Page