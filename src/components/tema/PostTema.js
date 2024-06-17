import FotoTema from './FotoTema'

const PostTema = ({className}) => {
    return (
      <div className={className}>
        <div className="flex flex-col w-full">
          
          <div className="relative w-full  ">
            <div className="flex flex-col w-full">
              <div className="w-full px-4 mt-4">
              <FotoTema nombre={<strong>Diego</strong>} titulo={<strong>Encuesta sobre perdida del cabello</strong>} description="¿A que edad creen que se comienza a perder el cabello?,y ¿Por que ?"/>
              </div>  
            </div>  
          </div>
          
        </div>
      </div>
    )
  }
  
  export default PostTema