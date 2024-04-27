import Image from 'next/image'
const Fotoforo = ({className, nombre, description}) => {
  return (
    <div className='w-full space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 bg-violet-300'>
        <div className=' flex flex-col w-1/3 justify-start space-y-4 items-center'>
        <Image 
            width={130}
            height={130}
            src={'/perfil.png'}>
          </Image>
          <div className="border-primary-bg justify-center items-center "> {nombre}</div>
        </div>
        <div className="flex-col w-full justify-center items-center text-start text-xl"> {description}</div>
    </div>
  )
}
 
export default Fotoforo