import React, { useState } from 'react'

import Card from "../components/Card";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import OurCard from "../components/OurCard";
import { BsFillClipboardFill, BsMailbox, BsPencilFill } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';
import { GiSwallow } from 'react-icons/gi';
import { BiGrid } from 'react-icons/bi';
import { VscPerson } from 'react-icons/vsc';
import { FcSearch } from 'react-icons/fc';
import Socialmenu from '../components/Socialmenu';

const LocalSeo = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div>
      <div className="bg-[#EAF3FF] pt-20 ">
        {/* <div className=""><h2></h2> </div> */}
        <h2 className="text-center font-bold text-3xl py-10">Local SEO</h2>
        <p className="text-center font-bold text-[#4E17E2] pb-10">
          {" "}
          THE SEO AGENCY THAT DRIVES MORE LEADS AND MORE SALES, PERIOD.
        </p>

        <div className="px-0 lg:px-28"></div>

        <div className=" flex justify-center pt-20 pb-20  ">
          <img
            src="front 1.png"
            alt="djvd"
          />
        </div>
        {/* <p className="text-center pb-4"> Scroll Down</p> */}
        <p className="text-center font-bold px-0 lg:px-80 pb-20 ">
          {" "}
          Every Story We Tell, Every Brand We Build, And Every Interaction We
          Create Must Not Only Look Beautiful But Has To Feel And Function
          Beautifully, Too. Crafted To Perfection.
        </p>
      </div>

      <div className=" flex flex-col p-20 justify-center  lg:gap-10 my-10 mx-0 lg:mx-20">
        <div className="w-full text-center  ">
          {" "}
          <h2 className="font-extrabold text-5xl my-10 text-green-400 ">
           LET'S GET GROWING
          </h2>
        <div><img className='m-auto' src="2nd page img.png" alt="" /></div>

        <h2 className="font-extrabold text-5xl my-10 text-green-400 ">
           LET'S GET GROWING
          </h2>
          <h2 className="font-extrabold text-5xl my-10  ">
           LET'S GET GROWING
          </h2>
          <p>
            {" "}
            Deliver compelling and engaging social experiences with our social
            media services Our social media team are experts in social trends,
            innovation, and strategies. Our full-service offering includes
            everything from community management to creative production.
          </p>{" "}
        </div>
        <div className="w-full m-auto py-10  lg:w-1/2">
        <h2 className="font-extrabold text-5xl my-10 text-green-400 ">
           LET'S GET GROWING
          </h2>
          <p>
            {" "}
            We’re here to help you to raise brand awareness, increase brand
            relevance, and drive growth for your business. We build a vibrant
            presence across social platforms to captivate the right audience
          </p>{" "}
          {" "}
          <img
            className=" m-auto py-10"
            src="3rd page img.png"
            alt="fgd"
          ></img>{" "}
        


        
       


        </div>
      </div>
     </div>

     <div className="col-span-2  ">
          <div className="grid grid-cols-2 w-[80%] m-auto gap-10">
            <div className="flex flex-col gap-2 w-full hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white">
              <span>
                <MdGroups className="text-4xl text-[#EFFF00]" />
              </span>
              <div className="flex flex-col text-sm font-semibold">
                <span>Deep </span>
                <span> Diving</span>
              </div>
              <span className="text-xs font-thin">
                As step one of onboarding, we do a thorough study of your brand,
                services and products to help you further with your
                requirements.
              </span>
            </div>

            <div className="flex flex-col gap-2 w-full hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white">
              <span>
                <BsFillClipboardFill className="text-4xl text-[#EFFF00]" />
              </span>
              <div className="flex flex-col text-sm font-semibold">
                <span>Monthly </span>
                <span> Review</span>
              </div>
              <span className="text-xs font-thin">
                As step one of onboarding, we do a thorough study of your brand,
                services and products to help you further with your
                requirements.
              </span>
            </div>
            <div className="flex flex-col gap-2 w-full hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white">
              <span>
                <BsMailbox className="text-4xl text-[#EFFF00]" />
              </span>
              <div className="flex flex-col text-sm font-semibold">
                <span>Easy </span>
                <span> Interaction</span>
              </div>
              <span className="text-xs font-thin">
                Besides believing in formal emails, we also understand that
                there is often a need for quick communication.
              </span>
            </div>
            <div className="flex flex-col gap-2 w-full hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white">
              <span>
                <BsMailbox className="text-4xl text-[#EFFF00]" />
              </span>
              <div className="flex flex-col text-sm font-semibold">
                <span>Easy </span>
                <span> Interaction</span>
              </div>
              <span className="text-xs font-thin">
                Besides believing in formal emails, we also understand that
                there is often a need for quick communication.
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-9 grid-cols-5 gap-3 text-sm mt-10 items-center justify-items-center">
        <div className="flex flex-col justify-between items-center">
          <button
            className={`${
              toggleState === 1
                ? "active-tabs border-btn bg-btn text-white"
                : "tabs  bg-btn"
            } p-4    rounded hover:scale-105  duration-300  `}
            // onClick={() => toggleTab(1)}
          >
            <div className="flex flex-col justify-center items-center">
              <FcSearch className="text-white text-xl" />
            </div>
          </button>
          <span className=" font-bold md:text-xl  text-xs text-black/70">
            Discovery
          </span>
        </div>
        <div className="w-full  hidden md:flex justify-between items-center gap-2">
          <span className="h-3 w-3 bg-btn rounded-full flex-shrink-0"></span>
          <hr className="border w-1/12 border-btn" />
          <hr className="border w-1/12 border-green-500" />
          <span className="h-3 w-3 bg-green-500 rounded-full flex-shrink-0"></span>
        </div>

        {/* Second */}
        <div className="flex flex-col justify-between items-center">
          <button
            className={`${
              toggleState === 2
                ? "active-tabs border-btn bg-green-500 text-white"
                : "tabs bg-green-500"
            } p-4    rounded hover:scale-105  duration-300  `}
            // onClick={() => toggleTab(2)}
          >
            <VscPerson className="text-white text-xl" />
          </button>
          <span className=" font-bold md:text-xl  text-xs text-black/70">
            Tailor
          </span>
        </div>
        <div className="w-full  justify-between items-center gap-2  hidden md:flex">
          <span className="h-3 w-3 bg-green-500 rounded-full flex-shrink-0"></span>
          <hr className="border w-1/12 border-green-500" />
          <hr className="border w-1/12 border-[#DD00CD]" />
          <span className="h-3 w-3 bg-[#DD00CD] rounded-full flex-shrink-0"></span>
        </div>

        {/* Third */}
        <div className="flex flex-col justify-between items-center">
          <button
            className={`${
              toggleState === 3
                ? "active-tabs border-btn bg-[#DD00CD] text-white"
                : "tabs bg-[#DD00CD]"
            } p-4    rounded hover:scale-105  duration-300  `}
            // onClick={() => toggleTab(3)}
          >
            <BiGrid className="text-white text-xl" />
          </button>
          <span className=" font-bold md:text-xl  text-xs text-black/70">
            OnBoard
          </span>
        </div>

        <div className="w-full  justify-between items-center gap-2  hidden md:flex">
          <span className="h-3 w-3 bg-[#DD00CD] rounded-full flex-shrink-0"></span>
          <hr className="border w-1/12 border-[#DD00CD]" />
          <hr className="border w-1/12 border-[#E21717]" />
          <span className="h-3 w-3 bg-[#E21717] rounded-full flex-shrink-0"></span>
        </div>

        {/* Forth */}
        <div className="flex flex-col justify-between items-center">
          <button
            className={`${
              toggleState === 4
                ? "active-tabs border-btn bg-[#E21717] text-white"
                : "tabs bg-[#E21717]"
            } p-4    rounded hover:scale-105  duration-300  `}
            // onClick={() => toggleTab(4)}
          >
            <GiSwallow className="text-white text-xl" />
          </button>
          <span className=" font-bold md:text-xl  text-xs text-black/70">
            Implement
          </span>
        </div>

        <div className="w-full  justify-between items-center gap-2 hidden md:flex">
          <span className="h-3 w-3 bg-[#E21717] rounded-full flex-shrink-0"></span>
          <hr className="border w-1/12 border-[#E21717]" />
          <hr className="border w-1/12 border-ons" />
          <span className="h-3 w-3 bg-ons rounded-full flex-shrink-0"></span>
        </div>
        <div className="flex flex-col justify-between items-center">
          <button
            className={`${
              toggleState === 4
                ? "active-tabs border-btn bg-ons text-white"
                : "tabs bg-ons"
            } p-4    rounded hover:scale-105  duration-300  `}
            // onClick={() => toggleTab(4)}
          >
            <BsPencilFill className="text-white text-xl" />
          </button>
          <span className=" font-bold md:text-xl  text-xs text-black/70">
            Refine
          </span>
        </div>
      </div>



      <h1 className='text-6xl text-center sm:font-bold text-[blue]' >case study</h1>
      <div className="h-44 bg-blue-900 w-full p-40">

      <img className='m-auto' src="4th img.png" alt="" />

      </div>


      <h2 className='text-6xl text-center sm:font-bold text-black mt-60'> higher roi</h2>

      <div className='bg-teal-50 sm:p-20 text-center '>
        <p className='p-10 sm:p-40 text-3xl'>your call local seo</p>
<button className='bg-blue-800 rounded-lg p-4'> let's chat </button>
      </div>

      <div className=" m-auto sm:flex">
        <div className="sm:w-1/2 sm:p-20 text-center ">
          <h1 className="text-[#4E17E2] text-5xl font-bold font-sans py-5">
            LET’S GET{" "}
          </h1>
          <h1 className="text-[#03A71E] text-5xl font-bold font-sans py-5">
            GROWING
          </h1>

          <p>
            For too long, these platforms have been used by businesses and their
            digital agencies as a place to show off. The problem is, creating
            this hype doesn’t make you hip when the results can’t be seen.
            Nothing is more frustrating than wasting time and effort on
            marketing tactics that don’t stick, and we see this common problem
            with social media ads all the time. There is more to being active on
            these networks, and it takes years of experience to know what those
            secrets are.
          </p>
          <p>
            At Shout, we see social media management as a profit centre, but
            that all comes with a highly strategic social media strategy that’s
            100% tailored to your individual brand. From start to finish, we
            ensure your campaign drives traffic, leads and sales, giving you
            more than just basic ‘likes’.
          </p>
          <p>
            Looking for a one-stop-shop social media agency to kickstart your
            brand awareness?
          </p>
        </div>
        <div className="w-1/2 p-20">
          <img className="w-96" src="6th_img.png" alt="" />
        </div>
      </div>

      <div className='text-center' >

      <h2 className="font-extrabold text-5xl my-10 text-green-400 ">
           LET'S GET GROWING
          </h2>
          <h2 className="font-extrabold text-5xl my-10  ">
           LET'S GET GROWING
          </h2>
          <p>
            At Shout, we see social media management as a profit centre, but
            that all comes with a highly strategic social media strategy that’s
            100% tailored to your individual brand. From start to finish, we
            ensure your campaign drives traffic, leads and sales, giving you
            more than just basic ‘likes’.
          </p>

          <img src="7th img.png" alt="" />
          <img className='m-auto' src="google img.png" alt="" />
          <p>
            At Shout, we see social media management as a profit centre, but
            that all comes with a highly strategic social media strategy that’s
            100% tailored to your individual brand. From start to finish, we
            ensure your campaign drives traffic, leads and sales, giving you
            more than just basic ‘likes’.
          </p>
          <h2 className="font-extrabold text-5xl  my-10 text-green-400 ">
           LET'S GET GROWING
          </h2>
          <h2 className="font-extrabold text-5xl my-10  ">
           LET'S GET GROWING
          </h2>
          <p>
            At Shout, we see social media management as a profit centre, but
            that all comes with a highly strategic social media strategy that’s
            100% tailored to your individual brand. From start to finish, we
            ensure your campaign drives traffic, leads and sales, giving you
            more than just basic ‘likes’.
          </p>
      </div>
      <div className=" bg-[#00BBFF] min-h-96 p-5" >
        <div className="w-11/12 m-auto grid md:grid-cols-2 grid-cols-1 justify-items-center items-center gap-11" >
          <div className="flex flex-col gap-2 text-white md:w-9/12" >
            <div className="flex flex-col text-3xl font-black" >
              <span>Let's Help Your </span>
              <span>Brand Grow</span>
            </div>
            <span className="text-sm " >You could be a start-up pining for brand recognition or a big player looking for a soaring online presence know that you are at the right place at the right time. Let's connect tell us about your needs - content development, design, or digital marketing, and we'll be delighted to showcase our experience to you.</span>
          </div>
          <div className="relative flex justify-center items-center " >
            <img src="Group 40381.png" className="absolute -top-4" alt="" />
            <img src="cirle girl img.png" alt="" className="w-80  " />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl text-center mt-10 mb-10">
          Our Process
        </h1>
        <h1 className="font-bold text-3xl text-center mt-10 mb-10">
          seo Process
        </h1>
        <p>
            At Shout, we see social media management as a profit centre, but
            that all comes with a highly strategic social media strategy that’s
            100% tailored to your individual brand. From start to finish, we
            ensure your campaign drives traffic, leads and sales, giving you
            more than just basic ‘likes’.
          </p>
      </div>
      <div className=" relative my-10  flex flex-col gap-8  sm:flex sm:flex-row sm:gap-8 lg:px-60 sm:my-20">
        <div className="m-auto lg:m-0 ">
          <OurCard
            logo="1.jpg"
            head="Envision"
            des="This role is played by our out of the box thinkers who bring in endless propositions."
          />
        </div>
        <div className="m-auto lg:m-0 ">
          <OurCard
            logo="2.jpg"
            head="Establish"
            des="To conclude a plan, we intensely understand the brand, the culture, the market, and beyond. The idea which fits the best survives."
          />
        </div>
        <img
          className=" hidden sm:block top-44 absolute right-80"
          src="l22.png"
          alt=""
        />
      </div>
      <div className=" relative sm:justify-end lg:justify-end  flex flex-col gap-8  sm:flex sm:flex-row sm:gap-8 lg:px-60  sm:my-20">
        <div className="m-auto lg:m-0 ">
          <OurCard
            logo="3.jpg"
            head="Execute"
            des="It's the plan implementation stage where the best of the bests is carried out to drive results. Echo"
          />
        </div>
        <div className="m-auto lg:m-0 ">
          <OurCard
            logo="4.jpg"
            head="Execute"
            des="from step 1. Why? It is paramount to cautiously monitor the upshots and make periodic alterations to continue seeing the desired results."
          />
          <img
            className="hidden sm:block -top-20 absolute left-72"
            src="lineuu.png"
            alt=""
          />
        </div>
      </div>
      
      <h1 className="font-bold text-3xl text-center mt-10 mb-10">
      SEO FAQS
        </h1>
        <Socialmenu />
    </div>
  )
}

export default LocalSeo
