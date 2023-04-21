import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import ChooseUs from '../components/Home/ChooseUs'
import HomeBlog from '../components/HomeBlog'
import HomePopup from '../components/HomePopup'
import SwiperMainPage from '../components/SwiperMainPage'
import image from '../assets/Subtraction 2.png'
import image1 from '../assets/Subtraction 3.png'
import img from '../assets/WEB_LOGO.png'
import img1 from '../assets/logo full.png'
import img2 from '../assets/Logo png.png'
import img3 from '../assets/trainman_logo_full.png'
import { BsFillEyeFill, BsArrowRight, BsFillClipboardFill, BsMailbox, BsPieChartFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { VscPerson } from 'react-icons/vsc';
import { GiSwallow } from 'react-icons/gi';
import { BiGrid } from 'react-icons/bi';
import { FcSearch } from 'react-icons/fc';
import { BsPencilFill } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';
import { GiRoad } from 'react-icons/gi';
import CollapsMenu from '../components/CollapsMenu'
import HomeCarousel from '../components/HomeCarousel'
import img4 from '../assets/Rectangle 4307.png'
import img6 from "../assets/Group 39825.png";
import img7 from "../assets/Mask Group 24.png";
import { BsEnvelopePaper } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import map from '../assets/map.jpg.jpeg'
import rectangle from '../assets/Rectangle 22639.png'
import imgcurv from '../assets/Group 40306.png'
import { BsStarFill, BsStarHalf } from 'react-icons/bs';




// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { EffectCube } from "swiper";
import { EffectCoverflow } from "swiper";
import { EffectFlip } from "swiper";
import { EffectCards } from "swiper";
import { EffectCreative } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Whoweare from "../components/Whoweare";


const HomePage = () => {
    const [showMyModal, setShowMyModal] = useState(true)
    const [toggleState, setToggleState] = useState(1);
    const [perView, setPerView] = useState(2);

    const handleOnClose = () => {
        setShowMyModal(false)
    }
    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <>

            <SwiperMainPage />

            <Whoweare />

            <ChooseUs />

            {/* Blog */}
            <div >
                <div className='w-11/12 m-auto grid justify-items-center  p-3 md:grid-cols-3 grid-cols-1 gap-5 md:gap-4 bg-white2 py-16 my-10' >

                    <div className='bg-white1 flex flex-col justify-center items-center gap-4 hover:bg-btn hover:text-white p-4 rounded-md  text-black shadow-md w-full text-center' >
                        <h2 className='text-xl font-semibold ' >We'll Prepare A Proposala</h2>
                        <p className='text-sm' >Required scope, timeline & approx. pricing will be provided with the given information about the project</p>
                    </div>

                    <div className='bg-white1 flex flex-col justify-center items-center gap-4 hover:bg-btn hover:text-white p-4 rounded-md text-start text-black shadow-md w-full ' >
                        <h2 className='text-xl font-semibold ' >Together We Discuss </h2>
                        <p className='text-sm' >Discussing all the possible variants & options</p>
                    </div>

                    <div className='bg-white1 flex flex-col justify-center items-center gap-4 hover:bg-btn hover:text-white p-4 rounded-md text-start text-black shadow-md w-full' >
                        <h2 className='text-xl font-semibold text-center ' >Lets Start Building</h2>
                        <p className='text-sm text-center' >When the contract is signed & all the goals are set, we can start the first sprint</p>
                    </div>

                </div>
            </div>

            {/* Toggle Wala */}

            <div className='w-10/12 m-auto' >

                <div className='flex flex-col justify-center items-center gap-4 py-5' >
                    <h1 className='text-5xl font-black' >"Our Methedology"</h1>
                    <span className='text-3xl font-bold' >How We Work?</span>
                </div>

                <div className="grid md:grid-cols-9 grid-cols-5 gap-3 text-sm mt-10 items-center justify-items-center">

                    <div className='flex flex-col justify-between items-center' >
                        <button
                            className={`${toggleState === 1 ? "active-tabs border-btn bg-btn text-white" : "tabs  bg-btn"
                                } p-4    rounded hover:scale-105  duration-300  `}
                            onClick={() => toggleTab(1)}
                        >
                            <div className='flex flex-col justify-center items-center' >
                                <FcSearch className='text-white text-xl' />
                            </div>
                        </button>
                        <span className=' font-bold md:text-xl  text-xs text-black/70' >Discovery</span>
                    </div>
                    <div className='w-full  hidden md:flex justify-between items-center gap-2' >
                        <span className='h-3 w-3 bg-btn rounded-full flex-shrink-0' ></span>
                        <hr className='border w-1/12 border-btn' />
                        <hr className='border w-1/12 border-green-500' />
                        <span className='h-3 w-3 bg-green-500 rounded-full flex-shrink-0' ></span>
                    </div>

                    {/* Second */}
                    <div className='flex flex-col justify-between items-center' >
                        <button
                            className={`${toggleState === 2 ? "active-tabs border-btn bg-green-500 text-white" : "tabs bg-green-500"
                                } p-4    rounded hover:scale-105  duration-300  `}
                            onClick={() => toggleTab(2)}
                        >
                            <VscPerson className='text-white text-xl' />
                        </button>
                        <span className=' font-bold md:text-xl  text-xs text-black/70' >Tailor</span>
                    </div>
                    <div className='w-full  justify-between items-center gap-2  hidden md:flex' >
                        <span className='h-3 w-3 bg-green-500 rounded-full flex-shrink-0' ></span>
                        <hr className='border w-1/12 border-green-500' />
                        <hr className='border w-1/12 border-[#DD00CD]' />
                        <span className='h-3 w-3 bg-[#DD00CD] rounded-full flex-shrink-0' ></span>
                    </div>

                    {/* Third */}
                    <div className='flex flex-col justify-between items-center' >
                        <button
                            className={`${toggleState === 3 ? "active-tabs border-btn bg-[#DD00CD] text-white" : "tabs bg-[#DD00CD]"
                                } p-4    rounded hover:scale-105  duration-300  `}
                            onClick={() => toggleTab(3)}
                        >
                            <BiGrid className='text-white text-xl' />
                        </button>
                        <span className=' font-bold md:text-xl  text-xs text-black/70' >OnBoard</span>
                    </div>

                    <div className='w-full  justify-between items-center gap-2  hidden md:flex' >
                        <span className='h-3 w-3 bg-[#DD00CD] rounded-full flex-shrink-0' ></span>
                        <hr className='border w-1/12 border-[#DD00CD]' />
                        <hr className='border w-1/12 border-[#E21717]' />
                        <span className='h-3 w-3 bg-[#E21717] rounded-full flex-shrink-0' ></span>
                    </div>

                    {/* Forth */}
                    <div className='flex flex-col justify-between items-center' >
                        <button
                            className={`${toggleState === 4 ? "active-tabs border-btn bg-[#E21717] text-white" : "tabs bg-[#E21717]"
                                } p-4    rounded hover:scale-105  duration-300  `}
                            onClick={() => toggleTab(4)}
                        >
                            <GiSwallow className='text-white text-xl' />
                        </button>
                        <span className=' font-bold md:text-xl  text-xs text-black/70' >Implement</span>
                    </div>


                    <div className='w-full  justify-between items-center gap-2 hidden md:flex' >
                        <span className='h-3 w-3 bg-[#E21717] rounded-full flex-shrink-0' ></span>
                        <hr className='border w-1/12 border-[#E21717]' />
                        <hr className='border w-1/12 border-ons' />
                        <span className='h-3 w-3 bg-ons rounded-full flex-shrink-0' ></span>
                    </div>
                    <div className='flex flex-col justify-between items-center' >
                        <button
                            className={`${toggleState === 4 ? "active-tabs border-btn bg-ons text-white" : "tabs bg-ons"
                                } p-4    rounded hover:scale-105  duration-300  `}
                            onClick={() => toggleTab(4)}
                        >
                            <BsPencilFill className='text-white text-xl' />
                        </button>
                        <span className=' font-bold md:text-xl  text-xs text-black/70' >Refine</span>
                    </div>

                </div>

                {/* Blogs */}
                <div className=" my-20 text-black">
                    <div className=" rounded-2xl h-full">
                        <div className={`${toggleState === 1 ? "block" : "hidden"} `}>
                            <div className='bg-white2 md:w-10/12 w-full p-4 rounded-md text-2xl' >
                                Through a quick 30 minute call, we go over a series of questions with your business to develop a thorough understanding of your operations and target market. Then we communicate with you to understand your goals involving digital marketing services and look to identify any additional value that we can deliver.
                            </div>
                        </div>

                        <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
                            <div className='bg-white2 md:w-10/12 w-full p-4 rounded-md text-2xl' >
                                tailor lorem Through a quick 30 minute call, we go over a series of questions with your business to develop a thorough understanding of your operations and target market. Then we communicate with you to understand your goals involving digital marketing services and look to identify any additional value that we can deliver.
                            </div>
                        </div>

                        <div className={`${toggleState === 3 ? "block" : "hidden"}`}>
                            <div className='bg-white2 md:w-10/12 w-full p-4 rounded-md text-2xl' >
                                onboard ipsum Through a quick 30 minute call, we go over a series of questions with your business to develop a thorough understanding of your operations and target market. Then we communicate with you to understand your goals involving digital marketing services and look to identify any additional value that we can deliver.
                            </div>
                        </div>
                        <div className={`${toggleState === 4 ? "block" : "hidden"}`}>
                            <div className='bg-white2 md:w-10/12 w-full p-4 rounded-md text-2xl' >
                                implement ipsum Through a quick 30 minute call, we go over a series of questions with your business to develop a thorough understanding of your operations and target market. Then we communicate with you to understand your goals involving digital marketing services and look to identify any additional value that we can deliver.
                            </div>
                        </div>
                        <div className={`${toggleState === 5 ? "block" : "hidden"}`}>
                            <div className='bg-white2 md:w-10/12 w-full p-4 rounded-md text-2xl' >
                                refine ipsum Through a quick 30 minute call, we go over a series of questions with your business to develop a thorough understanding of your operations and target market. Then we communicate with you to understand your goals involving digital marketing services and look to identify any additional value that we can deliver.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}

            <div className='w-11/12 m-auto relative  min-h-[80vh]   grid-cols-3 hidden md:grid' >
                <img className='absolute top-0  -z-10' src={rectangle} alt="" />
                <img className='absolute w-8/12 top-1/2 -z-10 right-0 h-24' src={rectangle} alt="" />
                <img src={imgcurv} className="absolute bottom-0 w-full object-contain translate-y-1/2" alt="" />
                <div className='grid justify-items-center  pt-7 text-3xl font-bold text-white  ' >
                    WHY CHOOSE US</div>

                <div className='col-span-2  ' >
                    <div className='flex gap-5  justify-center items-center' >

                        <div className='flex flex-col gap-2 w-48 hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white' >
                            <span><MdGroups className='text-4xl text-[#EFFF00]' /></span>
                            <div className='flex flex-col text-sm font-semibold' >
                                <span>Deep </span>
                                <span> Diving</span>
                            </div>
                            <span className='text-xs font-thin' >As step one of onboarding, we do a thorough study of your brand, services and products to help you further with your requirements.</span>
                        </div>

                        <div className='flex flex-col gap-2 w-48 hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white' >
                            <span><BsFillClipboardFill className='text-4xl text-[#EFFF00]' /></span>
                            <div className='flex flex-col text-sm font-semibold' >
                                <span>Monthly  </span>
                                <span> Review</span>
                            </div>
                            <span className='text-xs font-thin' >As step one of onboarding, we do a thorough study of your brand, services and products to help you further with your requirements.</span>
                        </div>
                        <div className='flex flex-col gap-2 w-48 hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white' >
                            <span><BsMailbox className='text-4xl text-[#EFFF00]' /></span>
                            <div className='flex flex-col text-sm font-semibold' >
                                <span>Easy </span>
                                <span> Interaction</span>
                            </div>
                            <span className='text-xs font-thin' >Besides believing in formal emails, we also understand that there is often a need for quick communication.</span>
                        </div>
                    </div>
                </div>



                <div> </div>

                <div className='p-3 flex flex-col   justify-center gap-5 absolute w-4/12 bottom-20' >
                    <div className='flex flex-col  text-xl md:text-4xl font-bold text-btn ' >
                        <span>Driven By Data.</span>
                        <span>Inspired By Creativity.</span>
                    </div>
                    <p>We're Checkmate a group of award winning designers and developers helping brands tell stories, build audiences, and deliver content via the web, mobile, and social media. We've built platforms, websites, apps, and campaigns that help our clients engage users delivering effective brand experiences across multiple devices.</p>

                    <button className='font-bold text-xl px-4 py-2 rounded-md bg-btn text-white flex gap-2 text-center justify-center items-center' >
                        View Portfolio
                        <BsFillEyeFill />
                    </button>
                </div>

                <div className='col-span-2' >
                    <div className='flex gap-5  justify-center items-center' >

                        <div className='flex flex-col gap-2 w-48 hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white' >
                            <span><GiRoad className='text-4xl text-[#EFFF00]' /></span>
                            <div className='flex flex-col text-sm font-semibold' >
                                <span>Core
                                </span>
                                <span> Transparency</span>
                            </div>
                            <span className='text-xs font-thin' >While the first meeting is held with an agenda to discuss the plan of action for the coming month,</span>
                        </div>

                        <div className='flex flex-col gap-2 w-48 hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white' >
                            <span><BiTimeFive className='text-4xl text-[#EFFF00]' /></span>
                            <div className='flex flex-col text-sm font-semibold' >
                                <span>Years Of
                                </span>
                                <span> Experience</span>
                            </div>
                            <span className='text-xs font-thin' >We have +14 years of experience in B2B and e-commerce marketing Our clients have access to key .</span>
                        </div>
                        <div className='flex flex-col gap-2 w-48 hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white' >
                            <span><BsPieChartFill className='text-4xl text-[#EFFF00]' /></span>
                            <div className='flex flex-col text-sm font-semibold' >
                                <span>Track
                                </span>
                                <span> Records</span>
                            </div>
                            <span className='text-xs font-thin' >Over the years, we’ve helped hundreds of businesses: Grow their online presence Enter new markets.</span>
                        </div>


                    </div>
                </div>

            </div>

            <div className='w-11/12 m-auto flex flex-col justify-center items-center text-center gap-5 md:hidden ' >
                <h2 className='font-black text-4xl' >Why Choose Us</h2>
                <hr className='border w-1/12 border-btn' />
                <h3 className='font-bold text-2xl text-btn flex flex-col  items-center justify-center' >Driven By Data.
                    <span>Inspired By Creativity.</span>
                </h3>
                <span>

                    We're Checkmate a group of award winning designers and developers helping brands tell stories, build audiences, and deliver content via the web, mobile, and social media. We've built platforms, websites, apps, and campaigns that help our clients engage users delivering effective brand experiences across multiple devices.
                </span>

                {/* Swiper */}
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, EffectCube]}
                    effect="flip"
                    spaceBetween={20}
                    slidesPerView={perView}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="bg-white2 w-full   mt-10"
                >
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 items-start justify-start text-start border-btn bg-btn  p-2 rounded-md text-white" >
                            <span><MdGroups className='text-2xl text-[#EFFF00]' /></span>
                            <span className="flex flex-col items-start text-sm" >
                                <span>Deep</span>
                                <span>Diving</span>
                            </span>
                            <p className="text-xs" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore, incidunt quisquam voluptatum accusantium p</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 items-start justify-start text-start border-btn bg-btn  p-2 rounded-md text-white" >
                            <span><MdGroups className='text-2xl text-[#EFFF00]' /></span>
                            <span className="flex flex-col items-start text-sm" >
                                <span>Deep</span>
                                <span>Diving</span>
                            </span>
                            <p className="text-xs" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore, incidunt quisquam voluptatum accusantium p</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 items-start justify-start text-start border-btn bg-btn  p-2 rounded-md text-white" >
                            <span><MdGroups className='text-2xl text-[#EFFF00]' /></span>
                            <span className="flex flex-col items-start text-sm" >
                                <span>Deep</span>
                                <span>Diving</span>
                            </span>
                            <p className="text-xs" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore, incidunt quisquam voluptatum accusantium p</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 items-start justify-start text-start border-btn bg-btn  p-2 rounded-md text-white" >
                            <span><MdGroups className='text-2xl text-[#EFFF00]' /></span>
                            <span className="flex flex-col items-start text-sm" >
                                <span>Deep</span>
                                <span>Diving</span>
                            </span>
                            <p className="text-xs" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore, incidunt quisquam voluptatum accusantium p</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 items-start justify-start text-start border-btn bg-btn  p-2 rounded-md text-white" >
                            <span><MdGroups className='text-2xl text-[#EFFF00]' /></span>
                            <span className="flex flex-col items-start text-sm" >
                                <span>Deep</span>
                                <span>Diving</span>
                            </span>
                            <p className="text-xs" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore, incidunt quisquam voluptatum accusantium p</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 items-start justify-start text-start border-btn bg-btn  p-2 rounded-md text-white" >
                            <span><MdGroups className='text-2xl text-[#EFFF00]' /></span>
                            <span className="flex flex-col items-start text-sm" >
                                <span>Deep</span>
                                <span>Diving</span>
                            </span>
                            <p className="text-xs" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore, incidunt quisquam voluptatum accusantium p</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 items-start justify-start text-start border-btn bg-btn  p-2 rounded-md text-white" >
                            <span><MdGroups className='text-2xl text-[#EFFF00]' /></span>
                            <span className="flex flex-col items-start text-sm" >
                                <span>Deep</span>
                                <span>Diving</span>
                            </span>
                            <p className="text-xs" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolore, incidunt quisquam voluptatum accusantium p</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>

            {/* Our Clients */}
            <div className='relative pb-10 my-20' >
                <div className='flex flex-col justify-center items-center text-center w-11/12 gap-4 m-auto py-5  ' >
                    <div className='flex flex-col items-center justify-center gap-5 pb-14' >
                        <h1 className='font-black text-5xl' >"Our Clients"</h1>
                        <p className='w-9/12 text-xl font-semibold text-black/80 m-auto' >We work for our clients, sure. More importantly, we work with them. A relationship rooted in mutual trust, transparency, and support in a way that our clients are an extension of our own team. By the client, with the client, for the client.</p>
                    </div>

                    <img className='absolute left-0 top-0 hidden md:block' src={image} alt="" />
                    <img className='absolute right-0 top-0 hidden md:block' src={image1} alt="" />

                    <div class=" flex overflow-x-hidden w-10/12 gap-10 ">

                        <div class="py-1  animate-marquee whitespace-nowrap flex gap-3 w-full ">
                            <img className='w-96  p-4 h-16 box-border object-contain' src={img} alt="" />
                            <img className='w-96  p-4 h-16 box-border object-contain' src={img2} alt="" />
                            <img className='w-96  p-4 h-16 box-border object-contain' src={img3} alt="" />
                            <img className='w-96  p-4 h-16 box-border object-contain' src={img1} alt="" />
                            <img className='w-96  p-4 h-16 box-border object-contain ' src={img2} alt="" />
                            <img className='w-96  p-4 h-16 box-border object-contain' src={img2} alt="" />

                        </div>

                        <div class="  animate-marquee2 whitespace-nowrap flex gap-3 w-full  ">
                            <img className='w-96  p-4 h-16 box-border object-contain' src={img} alt="" />
                            <img className='w-96  p-4 h-16 box-border object-contain' src={img2} alt="" />
                            <img className='w-96  p-4 h-16 box-border object-contain' src={img3} alt="" />
                            <img className='w-96  p-4 h-16 box-border object-contain' src={img1} alt="" />
                            <img className='w-96  p-4 h-16 box-border object-contain ' src={img2} alt="" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Map */}
            <div className='flex justify-center flex-col items-center gap-7 py-12 relative' >
                {/* <MdLocationPin className='absolute top-1/2 left-80' />

                <MdLocationPin className='absolute top-1/4  left-60' />

                <MdLocationPin className='absolute top-36  right-36' />
                <MdLocationPin className='absolute top-44  left-32' />
                <MdLocationPin className='absolute bottom-24  right-28' /> */}
                <h1 className='text-5xl font-black ' >Worked All Over The Global</h1>
                <img className='object-contain w-10/12 m-auto' src={map} alt="" />
            </div>

            {/* One Number */}
            <div className='bg-white2 ' >

                <div className='grid justify-items-center items-center grid-cols-1 md:grid-cols-2 p-10 gap-10 relative' >

                    <div className='h-4 w-4 rounded-full bg-ons absolute right-10 top-7' ></div>
                    <div className='h-4 w-4 rounded-full bg-ons absolute right-22 top-1/2' ></div>
                    <div className='h-8 w-8 rounded-full bg-ons absolute right-1/2 top-20' ></div>

                    <div className='flex flex-col gap-5 items-center md:items-start text-center md:text-start md:justify-start w-7/12' >
                        <span className=' text-2xl font-semibold ' >Our Number</span>
                        <hr className='border border-btn w-24' />

                        <h2
                            className='font-black text-4xl '
                        >WE MAKE YOUR BUSINESS BRIGHT</h2>
                        <p className='text-2xl font-semibold' >Passion, when combined with consistency of efforts , leaves a mark, These are ours.</p>

                        <button className='flex gap-3 items-center justify-center px-4 py-2 rounded-md text-sm text-white bg-btn' >
                            View Portfolio
                            <BsFillEyeFill />
                        </button>
                    </div>

                    <div className='grid grid-cols-1 items-center justify-items-center gap-4' >
                        <div className='grid-cols-2 grid gap-4 justify-items-center items-center' >
                            <div className='flex text-2xl font-semibold text-white p-10 text-center rounded-3xl bg-[#DD00CD] flex-col justify-center items-cetner' >
                                <span>600+</span>
                                <span className='text-sm ' >Project</span>
                            </div>
                            <div className='flex text-2xl font-bold text-white p-14 rounded-3xl bg-[#28236E] flex-col text-center' >
                                <span>514K+</span>
                                <span className='text-sm' >Users</span>
                            </div>
                        </div>
                        <div className='flex text-2xl font-bold text-white p-14 rounded-3xl bg-[#03A71E] flex-col text-center' >
                            <span>94%</span>
                            <span className='text-sm' >Happy Customer</span>
                        </div>
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-items-center ' >

                    {/* <div className='bg-reactangle w-full h-full  ' > */}
                    <div className="relative" >
                        <div className=" absolute -bottom-2 inset-x-0  bg-btn backdrop-blur-md rounded h-72 left-14 origin-bottom -right-10">
                        </div>

                        <div className="bg-white w-56 absolute z-10 top-20 h-20 rounded-md" >
                            <div className="flex gap-1 p-3" >
                                <span className="flex flex-col gap-1 items-center justify-center" >
                                    <img className="h-10 w-10 rounded-md object-cover" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                    <span className="flex  text-xs text-yellow-500" >
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarHalf />
                                    </span>
                                </span>
                                <span>
                                    <div className="flex flex-col items-start justify-start text-xs  gap-1" >
                                        <span className="text-xs" >Lorem ipsum dolor sit amet consectetur .</span>
                                        <span>Project Manager</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="bg-white w-56 absolute z-10 bottom-10 -right-12 h-20 rounded-md" >
                            <div className="flex gap-1 p-3" >
                                <span className="flex flex-col gap-1 items-center justify-center" >
                                    <img className="h-10 w-10 rounded-md object-cover" src="https://img.freepik.com/free-photo/happy-curly-haired-girl-makes-thumbs-up-sign-demonstrates-support-respect-someone-smiles-pleasantly-achieves-desirable-goal-wears-white-t-shirt-isolated-yellow-wall_273609-27736.jpg" alt="" />
                                    <span className="flex  text-xs text-yellow-500" >
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarHalf />
                                    </span>
                                </span>
                                <span>
                                    <div className="flex flex-col items-start justify-start text-xs  gap-1" >
                                        <span className="text-xs" >Lorem ipsum dolor sit amet consectetur .</span>
                                        <span>Project Manager</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className='relative flex flex-col gap-3 justify-center items-center py-5' >
                            <img src={img4} className="  max-w-sm  " alt="" />
                            {/* <div className=' w-36 h-36 border bg-btn absolute -bottom-5  -right-5 z-0' ></div> */}
                            <button className='px-6 md:hidden  py-2 bg-btn rounded-md text-white flex items-center gap-3 absolute -bottom-16' >
                                <span>contact us</span>
                                <BsArrowRight />
                            </button>

                        </div>
                    </div>

                    <div className='order-first md:order-none px-10' >
                        <div className='flex items-center justify-center md:justify-start flex-col md:items-start gap-6 text-center md:text-start md:w-6/12' >
                            <h1 className='text-4xl font-black' >Want To Start Project With Us</h1>
                            <span
                                className='text-ons font-bold text-xl'
                            >A Day With A Marketer
                                30 Minute Chat.</span>
                            <p>
                                Pick my brain with any marketing and digital marketing questions that you have and get an expert opinion.
                            </p>
                            <button className='px-6 hidden  py-2 bg-btn rounded-md text-white md:flex items-center gap-3' >
                                <span>contact us</span>
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10" >
                <HomeBlog />
            </div>

            {/* Carousel */}
            <HomeCarousel />

            {/* Collaps Menu */}
            <CollapsMenu />

            <div  className="relative min-h-[90vh] -mt-8 mb-10 grid md:grid-cols-3 gap-3 grid-cols-1 md:justify-items-start justify-items-center text-center md:text-start w-10/12  m-auto">
                <div className="w-full bg-ons h-24 absolute  bottom-0 right-0">
                    <img
                        className="absolute  bottom-0 right-0 h-24 object-contain "
                        src={img6}
                        alt=""
                    />
                </div>

                <img src={img7}
                    className="absolute left-full opacity-40 md:opacity-100 -translate-x-full h-96 bottom-4 z-0"
                    alt="" />

                <div className="absolute  top-full sm:left-0 md:-translate-y-20 -translate-y-24">
                    <div className="flex gap-1 p-4 flex-col md:flex-row pt-4">
                        <span className="bg-btn text-white rounded-md px-3 py-2  flex gap-2 items-center">
                            <BsEnvelopePaper className="text-white text-2xl" />
                            Book A Free Appointment
                        </span>
                        <span className="bg-white  font-semibold text-btn rounded-md px-3 py-1  flex gap-2 items-center">
                            <FiPhoneCall className="text-btn text-2xl" />
                            call A +91 8200493681
                        </span>
                    </div>
                </div>

                <div className='col-span-2 w-10/12 flex flex-col items-center justify-center md:items-start ' >
                    <h2 className=" text-3xl font-thin ">Choose Us</h2>

                    <hr className='border border-btn w-1/12 my-7' />

                    <div className="z-10">
                        <h2 className="text-3xl font-black py-6 md:w-6/12 w-full ">
                            We Make Your Business Bright
                        </h2>

                        <p className='md:mb-14 sm:mb-28 mb-24 text-sm md:text-md'>
                            we listen, we think, we create, We start by understanding of
                            your business and its aspirations; we apply our knowledge and
                            expertise with a conceptulization to visualize different
                            branding phenomenon and implement it with the great output of
                            marketing collateral, website, Online Campaigns to boost your
                            products or services as a brand in real world. In simple terms
                            we'll become your very own team of creative geniuses, on-line
                            strategists and friendly geeks. Call for a jargon free chat or
                            if you're too busy use this form.
                        </p>
                    </div>
                </div>
            </div>


            <div className='z-[100]' >
                <HomePopup onClose={handleOnClose} visible={showMyModal} />
            </div>

        </>
    )
}

export default HomePage
