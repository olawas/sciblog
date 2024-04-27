import FotoForo from './FotoForo'

const ForoPost = ({className}) => {
    return (
      <div className={className}>
        <div className="flex flex-col w-full">
          
          <div className="relative w-full  ">
            <div className="flex flex-col w-full">
              <div className="w-full px-4 mt-4">
              <FotoForo nombre={<strong>Diego:</strong>} description="Encuesta sobre perdida del cabello"/>
              </div>  
              <div className="w-full px-4 mt-4">
              <FotoForo nombre={<strong>Harry:</strong>} description="pido opiniones sobre la depresion"/>
              </div>
              <div className="w-full px-4 mt-4">
              <FotoForo nombre={<strong>Tomas:</strong>} description="Apoyo emocional para pacientes con enfermedades crónicas"/>
              </div>
              <div className="w-full px-4 mt-4">
              <FotoForo nombre={<strong>Carlos:</strong>} description="La importancia del autocuidado en el manejo de enfermedades crónicas: Estrategias para mantener un equilibrio emocional"/>
              </div>
            </div>  
          </div>
          
        </div>
      </div>
    )
  }
  
  export default ForoPost