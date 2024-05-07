import {Button} from '@nextui-org/button'; 
import SearchBar from '@/components/SearchBar';
import ComunidadPost from '@/components/ComunidadPost';

export default function Page() {

    return (
        <div className='flex flex-col w-full'>

             <div class="flex w-full flex-row mx-5  h-full ">
                <div className="flex flex-col w-full my-6 mx-5 px-2 space-y-4">
                    <h1 className='font-semibold text-3xl'>Comunidad</h1>

                    <div className='flex flex-row w-full'>
                        <SearchBar className='w-full' placeholder="Buscar Grupo"/>
                        <div className='flex flex-row w-full justify-center items-start'></div>
                        <div className='flex flex-col w-full justify-end items-center mr-4'>   
                            <Button color="primary" >Agregar nuevo tema</Button>
                        </div>
                    </div>
                </div>
            </div>

            <ComunidadPost className="w-1/2"/>
        </div>
  ) 
}
  
  