import Image from 'next/image';
const PreviewPost = ({className, titulo}) => {
  return (
    <div className={className}>
      <div className="w-full flex flex-row">
        <div className="w-96 h-60 border-2 border-gray-700 rounded-md ">
          <Image
            width={400}
            height={500}
            src={'/pre.webp'}>
          </Image>
        </div>
        <div className="bg-primary-bg text-on-primary w-3/4 h-60 flex flex-col border-2 border-gray-700 rounded-md ">
          <div className="">
            <p className="text-lg font-semibold m-4">{titulo} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewPost