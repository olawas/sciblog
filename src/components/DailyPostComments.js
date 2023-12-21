import React from 'react'


const comments = [
  { user: "User", comment: "Me gustó" },
  { user: "Maria", comment: "Muy interesante" },
  { user: "Juan", comment: "No estoy de acuerdo" },
]
const DailyPostComments = ({className}) => {
  return (
    <div className={className}>
      <div className='w-full flex flex-col justify-start items-center p-4 bg-slate-200'>
        {comments.map(
          comment=>(
            <div key={comment.user} className='w-full  mx-2 my-1 rounded bg-slate-700 text-white flex flex-col justify-center items-center'>
              <p className='mx-2 my-1 p-1 w-full text-white text-start'>
                {comment.user}
              </p>
              <div className='w-full m-2 p-2 bg-slate-200 '>
                <p className=' mx-2 my-1 w-full text-black text-start'>
                  {comment.comment}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default DailyPostComments