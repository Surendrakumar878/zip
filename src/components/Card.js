import React from 'react'

const Card = ({img="post_icon_136302.svg,",name="Guest Posting"}) => {
  return (
    <div>
    <div className='flex  gap-4 bg-[#EAF3FF]  hover:bg-[#28236E] hover:text-white p-10  rounded-lg justify-items-center h-32  '> 
    <span className='w-1/6 p-1 items-center text-white ' > <img  src={img} alt='dfg' className=' text-white w-full ' /> </span> 
    <h3 className='pr-0 md:pr-0 lg:pr-28 w-[80%] items-center '>{name}</h3> </div>
    </div>
  )
}

export default Card
