import React from 'react'

const Card5 = ({logo="",head="",des=""}) => {
  return (
    <div className='flex flex-col gap-4 text-center justify-center w-80 m-auto p-10 rounded-lg'>
      
     
        <div className='bg-[#EAF3FF] flex justify-center rounded-full h-20 m-auto w-20'>


        <img src={logo} className='w-10 m-auto h-10' alt="" />
        </div>
<h1  className='font-bold text-xl mb-4' >{head}</h1>
        <p>{des}</p>
      


    </div>
  )
}

export default Card5
