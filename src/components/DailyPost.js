import React from 'react'
import Image  from 'next/image';
import DailyPostComments from './DailyPostComments';

const DailyPost = ({className}) => {
  return (
    <div className={className}>
      <div className='w-full m-18'>
        <div className='border-2 flex flex-col'>
          <div className='border-2 flex flex-row h-96'>
            <div className='border-2 w-4/5'>
              <Image
                width={800}
                height={1000}
                src={'/pre2.png'}>
              </Image>
              
            </div>
            <div className='border-2 w-2/5 min-w-min'>
              <div className='w-full h-full'>
                <DailyPostComments className="w-full h-full"/>
              </div>
            </div>
          </div>
          <div className='text-on-primary bg-primary-bg w-full flex flex-row min-h-content p-2'>
            <div className='flex flex-col w-1/4 m-6'>
              <p className='text-xl'>José Luis Romero</p>
              <p>Nutricionista</p>
            </div>
            <div className='w-3/4 m-6'>
              <p>Este informe examina las tendencias actuales en los patrones alimentarios de la población, incluyendo el consumo de alimentos procesados, ultraprocesados, y la disponibilidad de opciones saludables. Se analiza el impacto de estos patrones en la salud pública, incluyendo la prevalencia de enfermedades crónicas como la obesidad, diabetes y enfermedades cardiovasculares. Además, se identifican estrategias efectivas para promover una alimentación saludable y combatir la malnutrición en todas sus formas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyPost