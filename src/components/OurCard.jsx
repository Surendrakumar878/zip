import React from 'react'

const OurCard = ({logo="" ,head="", des=""}) => {
  return (
    <div className='flex gap-4 bg-[#F4F5F7] sm:w-96 w-80  p-10 rounded-lg'>
      <div className='w-full'> <img className='w-[40%]' src={logo} alt="" /> </div>
      <div>
<h1  className='font-bold text-xl mb-4' >{head}</h1>
        <p>{des}</p>
      </div>


    </div>
  )
}

export default OurCard
