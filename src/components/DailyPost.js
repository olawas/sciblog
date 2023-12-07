import React from 'react'

const DailyPost = ({className}) => {
  return (
    <div className={className}>
      <div className='w-full m-18'>
        <div className='border-2 flex flex-col'>
          <div className='border-2 flex flex-row h-96'>
            <div className='border-2 w-4/5'>

            </div>
            <div className='border-2 w-2/5 min-w-min'>
              <div className='w-60'></div>
            </div>
          </div>
          <div className='text-on-primary bg-primary-bg w-full flex flex-row min-h-content p-2'>
            <div className='flex flex-col w-1/4 m-6'>
              <p className='text-xl'>Raúl Arredondo</p>
              <p>Nutricionista</p>
            </div>
            <div className='w-3/4 m-6'>
              <p>Este estudio realizado en marzo del 2023 nos desmuestra como a diario mueren mas 15000 estudiantes por excesivas tareas que dejan los docentes. Se puede ver que existe una correlación entre el suicidio joven y las clases de la miriam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyPost