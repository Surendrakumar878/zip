import imgabout from '../assets/Mask Group 62.png'
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavButton from './SwiperNavButton';
import {
    BsShareFill,
    BsLink45Deg
} from "react-icons/bs";
import {
    BiDownload
} from "react-icons/bi";

const AboutSwiper = () => {

    return (
        <>

            <div className='w-10/12 m-auto  flex flex-col gap-3 pt-10' >
                <span className={`px-6  py-2 relative bg-ons md:w-2/12 sm:w-7/12 w-10/12 text-white`}>
                    <div className=" absolute h-6 w-6 rotate-45 left-full -translate-x-1/2 bg-white"></div>
                    <span className="mr-4">Brand Mannual</span>
                </span>
                <div className='flex text-2xl font-bold flex-col  gap-1' >
                    <span className=" ">
                        Super Crazy Stuff
                    </span>
                    <span>
                        Just For You
                    </span>

                </div>
            </div>

            <div className='w-10/12 m-auto flex gap-4 py-4 font-bold text-btn' >
                <BiDownload />
                <BsShareFill />
                <BsLink45Deg />
            </div>

            <div className="w-10/12 m-auto" >
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop
                    spaceBetween={20}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    className=" "
                >
                    <SwiperSlide>
                        <img src={imgabout} className="h-96 w-full" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgabout} className="h-96 w-full" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgabout} className="h-96 w-full" alt="" />
                    </SwiperSlide>
                    <div className='py-3' >
                        <SwiperNavButton />
                    </div>
                </Swiper>

            </div>
        </>
    )
}

export default AboutSwiper
