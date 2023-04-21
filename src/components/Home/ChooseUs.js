import React, { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdContentPasteSearch } from 'react-icons/md';

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
import SwiperNavButton from '../SwiperNavButton';

const ChooseUs = () => {

    const [perView, setPerView] = useState(3)


    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth > 620 && window.innerWidth < 1000) {
            setPerView(2)
        } else if (window.innerWidth > 1000) {
            setPerView(3)
        }
        else {
            setPerView(1)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        handleResize()
        console.log("This is console")
    }, [])


    return (
        <>

            <div className=' bg-btn bg-grid bg-contain p-10 md:py-20 md:w-11/12 w-full m-auto rounded-xl' >
                <div className='grid gird-cols-1 md:grid-cols-3 w-11/12 md:gap-6 m-auto ' >

                    <div className='bg-btn flex justify-center text-center flex-col items-center  pr-10 md:items-start md:text-start gap-5 md:mr-6 ' >
                        <h2 className=' text-white text-2xl font-thin' >We Build Businesses.</h2>
                        <hr className='border w-3/12' />
                        <h2 className='font-semibold  text-white text-3xl' >We Make Your Business Bright</h2>
                        <p className='text-sm text-white/70' >We Don' t Stay In Our Lane But We Always Keep Our Hands On The Wheel. We're A Dedicated Partner, Not A Digital Add-On: Experts </p>

                        <button className='px-6 py-2 rounded-sm bg-white1 text-black text-sm font-semibold md:flex items-center gap-2 hidden ' >
                            Our Service
                            <BsArrowRightShort className='text-xl' />
                        </button>

                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay]}
                        effect='coverflow'
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        loop
                        spaceBetween={20}
                        slidesPerView={perView}
                        // pagination={{ clickable: true }}
                        // navigation
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="  h-56 w-full  overflow-hidden  capitalize md:col-span-2 bg-btn my-10"
                    >


                        <SwiperSlide className='bg-[#28236E] p-3 border-black/20  border-2 rounded-md h-56 w-56  text-white   shadow-2xl  ' >
                            <div className='flex flex-col items-between gap-2 pt-4 justify-center' >
                                <MdContentPasteSearch className='text-2xl  group-hover:text-btn' />
                                <h3 className='font-semibold text-sm my-1' >PPC & Google ADS</h3>
                                <p className='text-xs font-thin text-whtie/70' >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dolore sint eligendi consequatur facilis facere soluta consequuntur tempora fugiat.ates?
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-[#28236E] p-3 border-black/20  border-2 rounded-md h-56 w-56  text-white   shadow-2xl  ' >
                            <div className='flex flex-col items-between gap-2 pt-4 justify-center' >
                                <MdContentPasteSearch className='text-2xl  group-hover:text-btn' />
                                <h3 className='font-semibold text-sm my-1' >PPC & Google ADS</h3>
                                <p className='text-xs font-thin text-whtie/70' >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dolore sint eligendi consequatur facilis facere soluta consequuntur tempora fugiat.ates?
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='bg-[#28236E] p-3 border-black/20  border-2 rounded-md h-56 w-56  text-white   shadow-2xl  ' >
                            <div className='flex flex-col items-between gap-2 pt-4 justify-center' >
                                <MdContentPasteSearch className='text-2xl  group-hover:text-btn' />
                                <h3 className='font-semibold text-sm my-1' >PPC & Google ADS</h3>
                                <p className='text-xs font-thin text-whtie/70' >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dolore sint eligendi consequatur facilis facere soluta consequuntur tempora fugiat.ates?
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='bg-[#28236E] p-3 border-black/20  border-2 rounded-md h-56 w-56  text-white   shadow-2xl  ' >
                            <div className='flex flex-col items-between gap-2 pt-4 justify-center' >
                                <MdContentPasteSearch className='text-2xl  group-hover:text-btn' />
                                <h3 className='font-semibold text-sm my-1' >PPC & Google ADS</h3>
                                <p className='text-xs font-thin text-whtie/70' >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dolore sint eligendi consequatur facilis facere soluta consequuntur tempora fugiat.ates?
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='bg-[#28236E] p-3 border-black/20  border-2 rounded-md h-56 w-56  text-white   shadow-2xl  ' >
                            <div className='flex flex-col items-between gap-2 pt-4 justify-center' >
                                <MdContentPasteSearch className='text-2xl  group-hover:text-btn' />
                                <h3 className='font-semibold text-sm my-1' >PPC & Google ADS</h3>
                                <p className='text-xs font-thin text-whtie/70' >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dolore sint eligendi consequatur facilis facere soluta consequuntur tempora fugiat.ates?
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='bg-[#28236E] p-3 border-black/20  border-2 rounded-md h-56 w-56  text-white   shadow-2xl  ' >
                            <div className='flex flex-col items-between gap-2 pt-4 justify-center' >
                                <MdContentPasteSearch className='text-2xl  group-hover:text-btn' />
                                <h3 className='font-semibold text-sm my-1' >PPC & Google ADS</h3>
                                <p className='text-xs font-thin text-whtie/70' >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dolore sint eligendi consequatur facilis facere soluta consequuntur tempora fugiat.ates?
                                </p>
                            </div>
                        </SwiperSlide>



                        <div className="">
                            <SwiperNavButton />
                        </div>

                    </Swiper>



                    <button className='px-6 py-2 rounded-sm bg-white1 text-black text-sm font-semibold flex items-center justify-center gap-2 text-center w-full md:hidden ' >
                        Our Service
                        <BsArrowRightShort className='text-xl' />
                    </button>
                </div>
            </div>

        </>
    )
}

export default ChooseUs
