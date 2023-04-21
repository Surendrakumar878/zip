import React, { useState } from 'react'
// import Card from './Card'
import Card from './../components/Card';

const Services = () => {
const [card,setCard]=useState([
{  img:"Icon awesome-lightbulb.svg",
  name:"Branding"},
  {  img:"Icon open-copywriting.svg",
  name:"Content Writing"},
  {  img:"post_icon_136302.svg",
  name:"Guest \n Posting"},
  {  img:"Union 1.svg",
  name:"Google \n Ads"},
  {  img:"Icon awesome-chart-pie.svg",
  name:"Local \n SEO"},
  {  img:"Icon material-view-quilt.svg",
  name:"User Interface & \nUser Experience"},
  {  img:"Icon awesome-pen-nib.svg",
  name:"Website Desiging"},

  {  img:"Icon material-perm-media.svg",
  name:"Search Engine Optimization"},
  {  img:"Icon material-developer-board.svg",
  name:"Website Developement"},
  {  img:"Icon simple-hipchat.svg",
  name:"Social Media \n Marketing"},
])


  return (
    <div>
       

      
       <div className="container mx-auto mt-4 p-8 sm:px-28 md:p-8">
      {/* <div  > <img src="5-Types-Of-Chairs-You-Should-Know-About.jpg" alt="" srcset="" /> </div> */}
      <h2 className='text-center font-bold text-3xl py-10'>"Services Just For You"</h2>
       <p className='text-center font-bold text-[#4E17E2] pb-10'> Choose A Service To Enter The New Beginning</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-2 ">

        {
          card.map((item)=>(<Card key={item.name} name={item.name} img={item.img} />))
        }
        
      </div>
      </div>
    </div>
  )
}

export default Services
