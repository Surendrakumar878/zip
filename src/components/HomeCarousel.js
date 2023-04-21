import React, { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Images from '../components/Image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube } from 'swiper';

const HomeCarousel = () => {


    return (
        <>
            <div className='bg-blueback min-h-screen flex justify-center flex-col items-center text-white gap-10 text-center' >
                <h1 className='font-black md:text-5xl md:w-4/12 text-3xl text-center w-full' >What Do Our Client Say About Us?</h1>

                <hr className='border md:w-1/12 w-4/12 ' />

                <Swiper

                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, EffectCube, Autoplay]}
                    effect='flip'
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    loop
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    className=" md:w-6/12 w-10/12 "

                >
                    {Images.map((img, index) => (

                        <SwiperSlide key={index}  >

                            <div className='md:w-10/12 w-full h-10/12  m-auto pt-16' >
                                <div className='flex flex-col justify-center items-center gap-4 text-center text-black h-full w-full m-auto py-10 relative bg-white1 rounded-md' >
                                    <img className='w-16 h-16 rounded-full absolute left-1/2 -translate-x-1/2 top-0 -translate-y-2/3'
                                        src={img.img} alt="" />
                                    <span className='text-xl font-semibold ' >
                                        Harrison phillips
                                    </span>
                                    <span>Repoter @ Radio Mirchi</span>

                                    <div className='flex gap-2 text-yellow-400' >
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarHalf />
                                    </div>

                                    <p className='text-sm md:px-10 px-3' >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam ab numquam libero harum porro esse officiis quis quaerat explicabo hic temporibus eligendi asperiores inventore repellat rem nam officia doloremque ipsam obcaecati, ea voluptate veritatis itaque eos. Aspernatur, expedita quia?
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}


                </Swiper>


            </div>
        </>
    )
}

export default HomeCarousel
