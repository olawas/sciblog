import FotoCom from './FotoCom'

const Postcom = ({className}) => {
    return (
      <div className={className}>
        <div className="flex flex-col w-full">
          
          <div className="relative w-full  ">
            <div className="flex flex-col w-full">
              <div className="w-full px-4 mt-4">
              <FotoCom nombre={<strong>Mario</strong>} description="La pérdida de cabello puede comenzar a ser evidente en la mayoría de las personas a partir de los 30 años"/>
              </div>  
              <div className="w-full px-4 mt-4">
              <FotoCom nombre={<strong>Harry</strong>} description=" La predisposición genética juega un papel importante en la pérdida de cabello, especialmente la alopecia androgenética."/>
              </div>
              <div className="w-full px-4 mt-4">
              <FotoCom nombre={<strong>Tomas</strong>} description=" A medida que envejecemos, la velocidad de crecimiento del cabello puede disminuir y la calidad del cabello puede cambiar."/>
              </div>
              <div className="w-full px-4 mt-4">
              <FotoCom nombre={<strong>Carlos</strong>} description=" A los 50 años, tienes el 50% de mostrar calvicie"/>
              </div>
            </div>  
          </div>
          
        </div>
      </div>
    )
  }
  
  export default Postcom