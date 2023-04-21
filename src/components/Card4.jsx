import React from 'react'

const Card4 = ({bgc="#03A71E",head="Our Vission",des=""}) => {
    // console.log(bgc)
  return (
    <div className={`flex gap-4  text-white  w-[80%] mx-10 px-10 rounded-lg py-20`} style={{background:bgc}}>
      
      <div>
<h1  className='font-bold text-4xl mb-4' >{head}</h1>
        <p>{des}</p>
      </div>


    </div>
  )
}

export default Card4
