'use client'
import {Button} from '@nextui-org/button'; 
import SearchBar from '@/components/SearchBar';
import ComunidadPost from '@/components/ComunidadPost';
import {useRouter} from 'next/navigation'


export default function Page() {
    const router =useRouter()

    return (
        <div className='flex flex-col w-full overflow-y-scroll'>

            <div class="flex w-full flex-row mx-0 ">
                <div className="flex flex-col w-full my-6 mx-5 px-2 space-y-4">
                    <div className='flex flex-row '>
                        <div className='flex justify-start w-full'>
                            <h1 className='font-semibold text-3xl'>Comunidad</h1>
                        </div>
                        
                    </div>
                    
                    

                    <div className='flex flex-row w-full'>
                        <SearchBar className='w-full' placeholder="Buscar Grupo"/>
                        <div className='flex flex-row w-full justify-center items-start'></div>
                        <div className='flex flex-col w-full justify-end items-end '>   
                            <Button color="primary" onClick={() => router.push('comunidad/FormuComu')}>Agregar nuevo tema</Button>
                        </div>
                    </div>
                </div>
            </div>
            <ComunidadPost className="w-full justify-start mx-0 px-2 "/>
           
        </div>
  ) 
}
  
  