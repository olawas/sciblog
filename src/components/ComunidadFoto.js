import Image from 'next/image'
const ComunidadFoto = ({className, titulo, area, description}) => {
  return (
    <div className='w-full space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 bg-violet-300'>
        <div className=' flex flex-row w-1/3 justify-center space-y-4 items-center'>
            <Image 
                width={130}
                height={130}
                src={'/perfil.png'}>
            </Image>
        </div>
        <div className='flex flex-col justify-start items-start'>
                <div className="border-primary-bg justify-start items-center "> {titulo}</div>
                <div className="border-primary-bg justify-start items-center "> {area}</div>
                <div className="flex-col w-full justify-start items-center text-start text-xl"> {description}</div>
        </div>
    </div>
  )
}
 
export default ComunidadFoto