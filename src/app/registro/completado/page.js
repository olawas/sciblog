'use client'
import { CheckBadgeIcon } from "@heroicons/react/24/solid"
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () =>{
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000); //miliseconds
  }, []);

  if(session?.data?.registrado === true) router.push('/')
  return(
    <div className="w-full flex flex-row space-x-4 justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-6">  
        <p className="text-4xl text-slate-700 text-bold">Registrado correctamente</p>
        <p className="text-md text-slate-800">Vuelva a iniciar sesión para ingresar en su cuenta registrada</p>
      </div>
      <CheckBadgeIcon className="fill-lime-500 w-24 h-24"></CheckBadgeIcon>
    </div>
  )
}
export default Page