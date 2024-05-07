import ComunidadFoto from './ComunidadFoto'

const ComunidadPost = ({className}) => {
    return (
      <div className={className}>
        <div className="flex flex-col w-full">
          
          <div className="relative w-full  ">
            <div className="flex flex-col w-full">
              <div className="w-full px-4 mt-4">
              <ComunidadFoto titulo={<strong>Diego</strong>} area={<strong>Neu</strong>} description="Encuesta sobre perdida del cabello"/>
              </div>  
              <div className="w-full px-4 mt-4">
              <ComunidadFoto nombre={<strong>Harry</strong>} area={<strong>Diego</strong>} description="pido opiniones sobre la depresion"/>
              </div>
              <div className="w-full px-4 mt-4">
              <ComunidadFoto nombre={<strong>Tomas</strong>} area={<strong>Diego</strong>} description="Apoyo emocional para pacientes con enfermedades crónicas"/>
              </div>
              <div className="w-full px-4 mt-4">
              <ComunidadFoto nombre={<strong>Carlos</strong>} area={<strong>Diego</strong>} description="La importancia del autocuidado en el manejo de enfermedades crónicas: Estrategias para mantener un equilibrio emocional"/>
              </div>
            </div>  
          </div>
          
        </div>
      </div>
    )
  }
  
  export default ComunidadPost