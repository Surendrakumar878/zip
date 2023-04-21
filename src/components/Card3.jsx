import React from 'react'

const Card3 = ({heading="" ,title="",bgc="#F4F5F7",cor="white"}) => {
  return (
    <div className='flex gap-4  text-center hover:bg-indigo-900  p-10 rounded-lg' style={{background:bgc,
      
    color:cor}}>
      
      <div>
<h1  className='font-bold text-xl mb-4' >{heading}</h1>
        <p>{title}</p>
      </div>


    </div>
  )
}

export default Card3
