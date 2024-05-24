import ComunidadFoto from './ComunidadFoto'

const ComunidadPost = ({className}) => {
    return (
      <div className={className}>
        <div className="flex flex-col w-full">
          <div className="relative w-full  ">
            <div className="flex flex-wrap">
              <div className="w-5/12 px-4 mt-4">
              <ComunidadFoto titulo={<strong>Grupo de Investigación en Neuropsicología</strong>} area={<strong>Neuropsicología</strong>} description="Este grupo se enfoca en la investigación y la aplicación clínica de la neuropsicología, explorando la relación entre el cerebro y el comportamiento. Los participantes discuten avances recientes en neurociencia cognitiva, comparten casos de estudio y colaboran en proyectos de investigación para avanzar en el campo."/>
              </div>  
              <div className="w-5/12 px-4 mt-4">
              <ComunidadFoto titulo={<strong>Grupo de Apoyo para Profesionales en Salud Mental</strong>} area={<strong>Bienestar y Salud Mental</strong>} description="Este grupo ofrece un espacio seguro para que los doctores en psicología compartan experiencias, desafíos y estrategias de autocuidado. Los miembros brindan apoyo mutuo, comparten recursos sobre prevención del agotamiento profesional y técnicas para mantener un equilibrio saludable entre el trabajo y la vida personal."/>
              </div>
              <div className="w-5/12 px-4 mt-4">
              <ComunidadFoto titulo={<strong>Grupo de Psicoterapia Existencial y Humanista</strong>} area={<strong>Psicoterapia Existencial y Humanista</strong>} description="Este grupo se centra en la filosofía y práctica de la psicoterapia existencial y humanista, que enfatiza la exploración del sentido de la vida, la libertad y la responsabilidad personal. Los miembros comparten técnicas terapéuticas, reflexiones filosóficas y casos clínicos desde esta perspectiva."/>
              </div>
              <div className="w-5/12 px-4 mt-4">
              <ComunidadFoto titulo={<strong>Grupo de Terapia Cognitivo-Conductual</strong>} area={<strong>Terapia Cognitivo-Conductual (TCC)</strong>} description="Este grupo está dedicado al estudio y la práctica de la terapia cognitivo-conductual, centrada en identificar y cambiar patrones de pensamiento y comportamiento que contribuyen a los problemas psicológicos. Los miembros comparten técnicas, casos clínicos y recursos para mejorar sus habilidades en TCC."/>
              </div>
            </div>  
          </div>
          
        </div>
      </div>
    )
  }
  
  export default ComunidadPost