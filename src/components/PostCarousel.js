import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from '@heroicons/react/24/solid'
import MiniPost from './MiniPost'

const PostCarousel = ({className}) => {
  return (
    <div className={className}>
      <div className="flex flex-row w-full justify-center items-center">
        <ArrowLeftCircleIcon className='text-primary w-16 h-16'/>
        <div className="relative overflow-x-hidden w-4/5 ">
          <div className="flex -mx-4 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
            <div className="w-1/3 px-4 flex-shrink-0 snap-center">
              <MiniPost title={<strong>Tendencias en Uso de Tecnología Wearable en el Área de la Salud:</strong>} description=" Las tendencias emergentes en el uso de tecnología wearable para el monitoreo de la salud"/>
            </div>  
            <div className="w-1/3 px-4 flex-shrink-0 snap-center">
              <MiniPost title={<strong>Desafíos y Oportunidades en Salud Mental Infantil</strong>} description=" Desafíos actuales en el diagnóstico, tratamiento y prevención de trastornos de salud mental en niños y adolescentes"/>
            </div>
            <div className="w-1/3 px-4 flex-shrink-0 snap-center">
              <MiniPost title={<strong>Impacto de la Telemedicina en la Atención Primaria de Salud:</strong>} description=" Este informe analiza cómo la implementación de la telemedicina ha afectado la accesibilidad, eficacia y calidad de la atención primaria de salud"/>
            </div>
            <div className="w-1/3 px-4 flex-shrink-0 snap-center">
              <MiniPost title={<strong>Evaluación de la Efectividad de Programas de Vacunación:</strong>} description=" Evalúa la efectividad de los programas de vacunación en diferentes regiones, examinando tasas de cobertura, incidencia de enfermedades prevenibles por vacunación"/>
            </div>
          </div>  
        </div>
        <ArrowRightCircleIcon className='text-primary min-w-16 h-16'/>
      </div>
    </div>
  )
}

export default PostCarousel