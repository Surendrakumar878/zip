import React from 'react'

const Card6 = ({logo="post_icon_136302.svg,",name="Guest Posting",bgc="#28236E"}) => {
  return (
    <div>
    <div className='flex   gap-4 bg-[#EAF3FF]  hover:bg-[#28236E] hover:text-white   rounded-lg justify-center  py-4 '> 
    <span className='sm:w-1/6 px-4 items-center text-white ' > <img src={logo} alt='dfg' className=' text-white ' /> </span> 
    <h3 className='pr-0 md:pr-0 lg:pr-28 sm:w-[90%] h-10 items-center '>{name}</h3> </div>
    </div>
  )
}

export default Card6
