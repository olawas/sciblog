"use client"

import React from 'react'
import { Button } from '@nextui-org/react';
import LogoColor from '@/assets/LogoColor';
import {signIn, useSession, signOut} from 'next-auth/react'

const TopBar = ({className, options=[], optionGetLabel=(val)=>val, optionGetHref=(val)=>val}) => {
  const {data, status}  = useSession()
  return (
    <div className={className}>
      <div className="flex flex-row h-full w-full items-center font-bold ">

        <div className='w-2/3 flex justify-center items-center'>
          <LogoColor className="w-12 h-12"/>
          SCIBLOG
        </div>
        <div className='w-1/3 flex justify-center items-center'>
        {
          data?.user
          ?(
            <>Bienvenido {data.user.name}</>
          )
          :(
            <Button color="primary" onClick={()=>signIn()}>
              Iniciar sesión
            </Button>  
          )
        }

        </div>
        {status === 'authenticated' && <Button color="secondary" onClick={()=> signOut()}> Cerrar Sesión</Button>}
      </div>
    </div>
  )
}

export default TopBar;