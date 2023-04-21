import React, { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import image from '../assets/Group 40525.png'
import image1 from '../assets/Scroll Group 10.png'
import image3 from '../assets/Group 40691.png'
import image4 from '../assets/Group 41110.png'
import image5 from "../assets/Group 40273.png"
import image6 from '../assets/Group 40263.png'
import image7 from '../assets/Group 40336.png'
import image8 from '../assets/Group 40263.png'
import image9 from '../assets/Group 40475.png'
import image10 from '../assets/Group 40472.png'
import { IoEyeSharp } from 'react-icons/io5';
import image2 from '../assets/Group 40788.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import { EffectCube } from 'swiper';
import { EffectCoverflow } from 'swiper';
import { EffectFlip } from 'swiper';
import { EffectCards } from 'swiper';
import { EffectCreative } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperNavButton from './SwiperNavButton';


const SwiperMainPage = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay]}
                effect='coverflow'
                autoplay={{
                    delay: 12000,
                    disableOnInteraction: false
                }}
                loop
                spaceBetween={20}
                slidesPerView={1}
                // pagination={{ clickable: true }}
                navigation
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                className="bg-white w-full  h-[100vh] overflow-hidden  capitalize"
            >

                <SwiperSlide className='bg-bg relative pt-10 md:pt-0' >
                    <img src="arrow.svg" className='absolute -top-5 -left-8 hidden md:block' alt="" />
                    <img src="round.svg" className='absolute top-0 right-0' alt="" />

                    <div className='grid md:grid-cols-2 grid-cols-1 w-10/12 m-auto items-center   h-full justify-content-center' >

                        <div className='flex flex-col justify-center items-center md:items-start gap-4  text-center md:text-start' >
                            <h1 className='flex uppercase text-center md:text-start md:text-5xl text-2xl' >
                                WE Help you to grow your business
                            </h1>
                            <hr />

                            <h2 className='text-xl text-ons' >
                                We Don't Create Business We create Brand Stories
                            </h2>

                            <p className='text-xs' >
                                We Make Creativity Work For Your Brand! Ours Is A Team Of Creatives That is Brainstroming On Great Ideas. The Time.
                            </p>
                            <img src={image1} alt="" />

                            <div className='w-56 p-3 bg-btn text-center text-white my-10 rounded-md active:bg-purpl hover:bg-ons' >
                                View More
                            </div>

                        </div>

                        <div
                            className='md:grid w-full grid-cols-2  h-full justify-items-center place-content-center items-center hidden ' >
                            <div>
                                <img src={image5} alt="" />
                            </div>
                            <div>
                                <img src={image6} alt="" />
                            </div>
                            <div>
                                <img src={image7} alt="" />
                            </div>
                            <div>
                                <img src={image8} alt="" />
                            </div>
                        </div>

                        <div className='flex md:hidden' >

                            <div className='flex flex-col    justify-center items-center ' >

                                <div>
                                    <img className='h-12' src={image9} alt="" />
                                </div>
                                <div>
                                    <img className='h-24' src={image10} alt="" />
                                </div>
                            </div>
                            <div>
                                <img className='h-56' src={image7} alt="" />
                            </div>
                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide className='bg-bg relative pt-10 md:pt-0' >
                    <img src="arrow.svg" className='absolute -top-5 -left-8 hidden md:block' alt="" />
                    <img src="round.svg" className='absolute top-0 right-0' alt="" />
                    <div className='grid md:grid-cols-2 grid-cols-1 w-10/12 m-auto items-center   h-full' >

                        <div className='flex flex-col justify-center items-center md:items-start gap-4  text-center md:text-start' >
                            <h1 className='flex uppercase text-center md:text-start md:text-5xl text-2xl' >
                                We Make Brandind more Easer than you think
                            </h1>
                            <hr />
                            <p className='text-xs' >Brand Creation is About Really Understanding your Business By Ascertaining Who you Are, What You Do, How You Do it and, Most Importantly, Why You Do it.
                            </p>
                            <img src={image1} alt="" />

                            <div className='w-56 p-3 bg-btn text-center text-white my-10 rounded-md active:bg-purpl hover:bg-ons' >
                                View More
                            </div>

                        </div>

                        <img src={image} alt="" />
                    </div>
                </SwiperSlide>



                <SwiperSlide className='bg-bg relative pt-10 md:pt-0' >
                    <img src="arrow.svg" className='absolute -top-5 -left-8 hidden md:block' alt="" />
                    <img src="round.svg" className='absolute top-0 right-0' alt="" />
                    <div className='grid md:grid-cols-2 grid-cols-1 w-10/12 m-auto items-center   h-full' >

                        <div className='flex flex-col justify-center items-center md:items-start gap-4  text-center md:text-start' >
                            <h1 className='flex uppercase text-center md:text-start md:text-5xl text-2xl' >
                                Creating experience & visual design more accessible
                            </h1>
                            <hr />

                            <h2 className='text-ons' >It's Not The Just About UI Vs UX</h2>
                            <p className='text-xs' >We make creativity work for your Brand! Ours Is A Team Of Creatives That Is Branstroming On Great Ideas. The Time.
                            </p>
                            <img src={image1} alt="" />

                            <div className='w-56 p-3 bg-btn text-center text-white my-10 rounded-md active:bg-purpl hover:bg-ons' >
                                <div className='flex gap-2 items-center justify-center' >
                                    View More
                                    <IoEyeSharp />
                                </div>
                            </div>

                        </div>

                        <img src={image2} alt="" />
                    </div>
                </SwiperSlide>


                <SwiperSlide className='bg-bg relative pt-10 md:pt-0' >
                    <img src="arrow.svg" className='absolute -top-5 -left-8 hidden md:block' alt="" />
                    <img src="round.svg" className='absolute top-0 right-0' alt="" />
                    <div className='grid md:grid-cols-2 grid-cols-1 w-10/12 m-auto items-center   h-full' >

                        <div className='flex flex-col justify-center items-center md:items-start gap-4  text-center md:text-start' >
                            <h1 className='flex uppercase text-center md:text-start md:text-5xl text-2xl' >
                                Creating experience & visual design more accessible
                            </h1>
                            <hr />

                            <h2 className='text-ons' >It's Not The Just About UI Vs UX</h2>
                            <p className='text-xs' >We make creativity work for your Brand! Ours Is A Team Of Creatives That Is Branstroming On Great Ideas. The Time.
                            </p>
                            <img src={image1} alt="" />

                            <div className='w-56 p-3 bg-btn text-center text-white my-10 rounded-md active:bg-purpl hover:bg-ons' >
                                <div className='flex gap-2 items-center justify-center' >
                                    View More
                                    <IoEyeSharp />
                                </div>
                            </div>

                        </div>

                        <img src={image3} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className='bg-bg relative pt-10 md:pt-0' >
                    <img src="arrow.svg" className='absolute -top-5 -left-8 hidden md:block' alt="" />
                    <img src="round.svg" className='absolute top-0 right-0' alt="" />
                    <div className='grid md:grid-cols-2 grid-cols-1 w-10/12 m-auto items-center   h-full' >

                        <div className='flex flex-col justify-center items-center md:items-start gap-4  text-center md:text-start' >
                            <h1 className='flex uppercase text-center md:text-start md:text-5xl text-2xl' >
                                Creating experience & visual design more accessible
                            </h1>
                            <hr />

                            <h2 className='text-ons' >It's Not The Just About UI Vs UX</h2>
                            <p className='text-xs' >We make creativity work for your Brand! Ours Is A Team Of Creatives That Is Branstroming On Great Ideas. The Time.
                            </p>
                            <img src={image1} alt="" />

                            <div className='w-56 p-3 bg-btn text-center text-white my-10 rounded-md active:bg-purpl hover:bg-ons' >
                                <div className='flex gap-2 items-center justify-center' >
                                    View More
                                    <IoEyeSharp />
                                </div>
                            </div>

                        </div>

                        <img src={image4} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className='bg-bg relative pt-10 md:pt-0' >
                    <img src="arrow.svg" className='absolute -top-5 -left-8 hidden md:block' alt="" />
                    <img src="round.svg" className='absolute top-0 right-0' alt="" />
                    <div className='grid md:grid-cols-2 grid-cols-1 w-10/12 m-auto items-center   h-full' >

                        <div className='flex flex-col justify-center items-center md:items-start gap-4  text-center md:text-start' >
                            <h1 className='flex uppercase text-center md:text-start md:text-5xl text-2xl' >
                                Creating experience & visual design more accessible
                            </h1>
                            <hr />

                            <h2 className='text-ons' >It's Not The Just About UI Vs UX</h2>
                            <p className='text-xs' >We make creativity work for your Brand! Ours Is A Team Of Creatives That Is Branstroming On Great Ideas. The Time.
                            </p>
                            <img src={image1} alt="" />

                            <div className='w-56 p-3 bg-btn text-center text-white my-10 rounded-md active:bg-purpl hover:bg-ons' >
                                <div className='flex gap-2 items-center justify-center' >
                                    View More
                                    <IoEyeSharp />
                                </div>
                            </div>

                        </div>

                        <img src={image5} alt="" />
                    </div>
                </SwiperSlide>

                {/* <SwiperNavButton /> */}
            </Swiper>
        </>
    )
}

export default SwiperMainPage




