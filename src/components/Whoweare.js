import React from 'react'

const Whoweare = () => {


  return (
    <>

    <div className='bg-[#EAF3FF] pb-10'>

      <div  className='main-video'>
        <div className='video-row'>
          <div className='video-col-1'>
            {/* <video controls autoPlay> */}
            <iframe width="450" height="305" src="https://www.youtube.com/embed/kSIo0O51CqA?start=139" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            {/* </video> */}
          </div>
          <div className='video-col-2'>
            <h1>WHO WE ARE</h1>
          </div>
        </div>
      </div>

      <div className="whowe">
        <div className='whowe-row'>
          <div className=" whowecol whowecol-1">
            <h1>WHO WE ARE</h1>
            <p className='p1'>Who we Are?</p>
            <p>Reimagine.</p>
            <p>Your Digital Impact</p>
          </div>
          <div className="whowecol whowecol-2">
            <img src="./img/fish.png" alt="" />
          </div>
          <div className="whowecol whowecol-3">
            <p><a href=""><i className="fa-brands fa-square-facebook"></i></a></p>
            <p><a href=""><i className="fa-brands fa-twitter"></i></a></p>
            <p><a href=""><i className="fa-brands fa-instagram"></i></a></p>
            <span>follow us</span>
          </div>
        </div>

        <div className="who-text">

          <div className="text-col">
            <p>We’re a full-service creative team, specialising in copywriting, website development and digital marketing.</p>
            <p>With an eye across continents & industries, our approach is heavily inspired by various cultures which shape the world we live in. From using the human brand experience, to art and design which resonates with the universal emotions; our aim remains the same – to turn ideas into impact, invention into education, and data into emotion. So, it doesn’t matter where you’re from, what matters is where you’d like to go.</p>
            <p>Specializing in strategy, brand identity, digital marketing, website and app development, our work is spread across services. As a strategic partner, we help multiple brands through the lens of integrated communications which streamlines the process for maximum efficiency.</p>
          </div>
          <div className="text-col text-col-2">
            <span>follow us</span>
            <a href=""><i className="fa-brands fa-square-facebook"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
          </div>
          <div className="text-col">
            <a href=""> <button>View Portfolio <i className="fa-solid fa-eye"></i></button></a>
          </div>


        </div>
      </div>
    </div>

    </>
  )
}

export default Whoweare
