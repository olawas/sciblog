import Image from 'next/image'
const MiniPost = ({className, title, description}) => {
  return (
    <div className={className}>
      <div className="w-full flex flex-col h-64 justify-between p-2">
        <div className="h-3/5 w-full border-2 border-primary-bg overflow-y-hidden">
          <Image 
            width={300}
            height={150}
            src={'/pre.webp'}>
          </Image></div>
        <div className="h-1/5 w-full border-2 border-primary-bg "> {title}</div>
        <div className="h-1/5 w-full border-2 border-primary-bg "> {description}</div>
      </div>
    </div>
  )
}

export default MiniPost