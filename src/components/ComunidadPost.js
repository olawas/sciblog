import ComunidadFoto from './ComunidadFoto'

const ComunidadPost = ({className}) => {
    return (
      <div className={className}>
        <div className="flex flex-col w-full">
          <div className="relative w-full  ">
            <div className="flex flex-wrap">
              <div className="w-5/12 px-4 mt-4">
              <ComunidadFoto titulo={<strong>Grupo de Pediatría Pediátrica Estrella</strong>} area={<strong>Pediatría</strong>} description="Este grupo se enfoca en discutir los últimos avances en el cuidado y tratamiento de enfermedades pediátricas, compartiendo casos clínicos y promoviendo la educación continua entre pediatras."/>
              </div>  
              <div className="w-5/12 px-4 mt-4">
              <ComunidadFoto titulo={<strong>Círculo Oncológico Esperanza</strong>} area={<strong>Oncología</strong>} description="Una comunidad dedicada a apoyar a pacientes con cáncer y a sus familiares, brindando información sobre tratamientos, recursos de apoyo emocional y compartiendo historias de superación."/>
              </div>
              <div className="w-5/12 px-4 mt-4">
              <ComunidadFoto titulo={<strong>Asociación Pediátrica del Futuro</strong>} area={<strong> Pediatría</strong>} description="Una asociación que se centra en impulsar la investigación y la innovación en el campo de la pediatría. Este grupo reúne a pediatras, investigadores y profesionales de la salud infantil para colaborar en proyectos que mejoren la atención médica pediátrica y promuevan la salud y el bienestar de los niños."/>
              </div>
              <div className="w-5/12 px-4 mt-4">
              <ComunidadFoto titulo={<strong>Sociedad de Neurología Cerebral</strong>} area={<strong>Neurología</strong>} description="Esta sociedad está dedicada al estudio y la comprensión del cerebro y el sistema nervioso. Reúne a neurocientíficos, neurólogos, y otros profesionales del campo para discutir avances en la investigación cerebral, diagnóstico y tratamiento de enfermedades neurológicas, y promover la conciencia pública sobre la importancia del cuidado del cerebro para la salud general."/>
              </div>
            </div>  
          </div>
          
        </div>
      </div>
    )
  }
  
  export default ComunidadPost