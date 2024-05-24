import Image from 'next/image'
const ComunidadFoto = ({className, titulo, area, description}) => {
  return (
    <div className='w-4/5 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 bg-violet-300'>
      <div className='flex flex-col'>
        <div className="border-primary-bg space-y-4 mx-5"> {titulo}</div>

        <div className='flex flex-row'>
          <div className=' flex flex-row w-full justify-center items-start'>
            <div className='flex justify-center w-1/2'>
              <Image 
                    width={130}
                    height={130}
                    src={'/perfil.png'}>
                </Image>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start w-full '>
                  <div className="flex border-primary-bg justify-start items-center "> {area}</div>
                  <div className="flex w-wrap w-full justify-start items-start text-start text-l"> {description}</div>
          </div>
        </div>
      </div>
        
    </div>
  )
}
 
export default ComunidadFoto