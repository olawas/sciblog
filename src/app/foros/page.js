'use client'
import {Button} from '@nextui-org/button'; 
import ForoPost from '@/components/ForoPost';
import {useRouter} from 'next/navigation'
import SearchBar from '@/components/SearchBar';

export default function Page() {
  const router =useRouter()

    return (
      <div class="flex w-full flex-col mx-5 overflow-y-scroll h-full ">

        <div className="flex flex-row w-full my-6 mx-5 px-2">
          <h1 className='font-semibold text-3xl'>FORO</h1>
        </div>

        <div className="flex flex-row w-full space-y-0 my-2 mx-5 px-2 ">
          <div className='flex w-full justify-start items-start'>
            <h1 className='text-xl font-semibold'>Temas</h1>
          </div>
          <div className='flex w-full justify-center items-start'>
            <SearchBar className='w-full' placeholder="Buscar tema"/>
          </div>
          <div className="flex w-full justify-end items-center mr-7 ">
            <Button color="primary" onClick={() => router.push('foros/FormuForo')}>Agregar nuevo tema</Button>
          </div>
          
        </div>
        <div className='w-full justify-start items-start flex flex-col my-6 mx-2 px-1 space-y-0 '>
          <a onClick={() => router.push('/Tema')}><ForoPost className="w-full"/></a>
          
        </div>
      </div>
  )
}
  
  