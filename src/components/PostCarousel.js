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
              <MiniPost title="Cancer" description="Mucho cancer en chile"/>
            </div>  
            <div className="w-1/3 px-4 flex-shrink-0 snap-center">
              <MiniPost title="Diabetes en watones" description="No comas tanto amigo, deja los azucares"/>
            </div>
            <div className="w-1/3 px-4 flex-shrink-0 snap-center">
              <MiniPost title="Calambre ahhh" description="Como evitar los calambritos"/>
            </div>
            <div className="w-1/3 px-4 flex-shrink-0 snap-center">
              <MiniPost title="Muerte subdita en chile" description="Hay gente que se muere porque si"/>
            </div>
          </div>  
        </div>
        <ArrowRightCircleIcon className='text-primary min-w-16 h-16'/>
      </div>
    </div>
  )
}

export default PostCarousel