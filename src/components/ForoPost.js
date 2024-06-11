import { useQuery } from 'react-query'
import FotoForo from './FotoForo'
import { obtenerTemas  } from '@/queries/foro'
const ForoPost = ({className}) => {
  const {data, isLoading} = useQuery( ['get-foros'], ()=> obtenerTemas())
  console.log('data', data)
    return (
      <div className={className}>
        <div className="flex flex-col w-full">
          
          <div className="relative w-full  ">
            <div className="flex flex-col w-full">
             {
              data?.data.data.map(
                (item, index)=>(
                  <div className="w-full px-4 mt-4" key={index}>
                    <FotoForo nombre={<strong>{item.usuario_tema.nombre +' '+item.usuario_tema.apellido}</strong>} description={item.nombre}/>
                  </div>
                )
              )
             }
            </div>  
          </div>
          
        </div>
      </div>
    )
  }
  
  export default ForoPost